import { useEffect, useMemo, useState } from "react";
import Button from "@/components/Button";
import { apiClient } from "@/lib/apiClient";
import AdminShell from "@/components/admin/AdminShell";

export default function AdminProducts() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [formSubCategories, setFormSubCategories] = useState([]);
  const [listSubCategories, setListSubCategories] = useState([]);
  const [formCategoryId, setFormCategoryId] = useState("");
  const [formSubCategoryId, setFormSubCategoryId] = useState("");
  const [listCategoryId, setListCategoryId] = useState("");
  const [listSubCategoryId, setListSubCategoryId] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [active, setActive] = useState(true);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [editingId, setEditingId] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");
  const [editSubCategories, setEditSubCategories] = useState([]);
  const [editSubCategoryId, setEditSubCategoryId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImageFile, setEditImageFile] = useState(null);
  const [editActive, setEditActive] = useState(true);
  const [editStatus, setEditStatus] = useState({ type: "", message: "" });
  const [isUpdating, setIsUpdating] = useState(false);
  const [deletingId, setDeletingId] = useState("");

  const apiBase = import.meta.env.VITE_API_BASE_URL || "";
  const toPublicUrl = (maybePath) => {
    if (!maybePath) return "";
    if (/^https?:\/\//i.test(maybePath)) return maybePath;
    const base = String(apiBase).replace(/\/$/, "");
    const path = String(maybePath).startsWith("/") ? maybePath : `/${maybePath}`;
    return `${base}${path}`;
  };

  useEffect(() => {
    let mounted = true;
    apiClient
      .get("/api/categories")
      .then((res) => {
        if (!mounted) return;
        setCategories(res?.data?.items ?? []);
      })
      .catch(() => {
        if (!mounted) return;
        setCategories([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!formCategoryId) {
      setFormSubCategories([]);
      setFormSubCategoryId("");
      return;
    }

    apiClient
      .get("/api/subcategories", { params: { categoryId: formCategoryId } })
      .then((res) => {
        if (!mounted) return;
        setFormSubCategories(res?.data?.items ?? []);
      })
      .catch(() => {
        if (!mounted) return;
        setFormSubCategories([]);
      });

    return () => {
      mounted = false;
    };
  }, [formCategoryId]);

  useEffect(() => {
    let mounted = true;
    if (!listCategoryId) {
      setListSubCategories([]);
      setListSubCategoryId("");
      return;
    }

    apiClient
      .get("/api/subcategories", { params: { categoryId: listCategoryId } })
      .then((res) => {
        if (!mounted) return;
        setListSubCategories(res?.data?.items ?? []);
      })
      .catch(() => {
        if (!mounted) return;
        setListSubCategories([]);
      });

    return () => {
      mounted = false;
    };
  }, [listCategoryId]);

  const fetchProducts = async (maybeSubCategoryId) => {
    setLoadError("");
    setIsLoading(true);
    try {
      const res = await apiClient.get("/api/products", {
        params: maybeSubCategoryId ? { subCategoryId: maybeSubCategoryId } : undefined,
      });
      setItems(res?.data?.items ?? []);
    } catch (err) {
      setLoadError(err?.response?.data?.message || err?.message || "Failed to load products.");
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(listSubCategoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listSubCategoryId]);

  const canSubmit = useMemo(() => {
    return formSubCategoryId && title.trim().length > 0 && !isSubmitting;
  }, [formSubCategoryId, title, isSubmitting]);

  const resetForm = () => {
    setFormCategoryId("");
    setFormSubCategoryId("");
    setTitle("");
    setDescription("");
    setImageFile(null);
    setActive(true);
  };

  const loadEditSubcategories = async (categoryId, desiredSubCategoryId) => {
    if (!categoryId) {
      setEditSubCategories([]);
      setEditSubCategoryId("");
      return;
    }
    try {
      const res = await apiClient.get("/api/subcategories", {
        params: { categoryId },
      });
      const subcats = res?.data?.items ?? [];
      setEditSubCategories(subcats);
      if (desiredSubCategoryId) setEditSubCategoryId(desiredSubCategoryId);
      else setEditSubCategoryId("");
    } catch (_) {
      setEditSubCategories([]);
      setEditSubCategoryId("");
    }
  };

  const startEdit = (item) => {
    const catId = item.subCategory?.category?._id || "";
    const subId = item.subCategory?._id || item.subCategory || "";
    setEditingId(item._id);
    setEditCategoryId(catId);
    setEditTitle(item.title || "");
    setEditDescription(item.description || "");
    setEditImageFile(null);
    setEditActive(Boolean(item.active));
    setEditStatus({ type: "", message: "" });
    loadEditSubcategories(catId, subId);
  };

  const cancelEdit = () => {
    setEditingId("");
    setEditCategoryId("");
    setEditSubCategories([]);
    setEditSubCategoryId("");
    setEditTitle("");
    setEditDescription("");
    setEditImageFile(null);
    setEditActive(true);
    setEditStatus({ type: "", message: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("subCategoryId", formSubCategoryId);
      fd.append("title", title.trim());
      if (description.trim()) fd.append("description", description.trim());
      fd.append("active", String(active));
      if (imageFile) fd.append("image", imageFile);

      await apiClient.post("/api/products", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus({ type: "success", message: "Product created successfully." });
      await fetchProducts(listSubCategoryId);
      resetForm();
      setIsFormOpen(false);
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || "Failed to create product.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    if (!editingId) return;

    setEditStatus({ type: "", message: "" });
    setIsUpdating(true);
    try {
      const fd = new FormData();
      fd.append("subCategoryId", editSubCategoryId);
      fd.append("title", editTitle.trim());
      fd.append("description", editDescription.trim());
      fd.append("active", String(editActive));
      if (editImageFile) fd.append("image", editImageFile);

      await apiClient.put(`/api/products/${editingId}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEditStatus({ type: "success", message: "Product updated successfully." });
      await fetchProducts(listSubCategoryId);
      cancelEdit();
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || "Failed to update product.";
      setEditStatus({ type: "error", message });
    } finally {
      setIsUpdating(false);
    }
  };

  const onDelete = async (id) => {
    const ok = window.confirm("Delete this product?");
    if (!ok) return;

    setDeletingId(id);
    try {
      await apiClient.delete(`/api/products/${id}`);
      await fetchProducts(listSubCategoryId);
      if (editingId === id) cancelEdit();
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || "Failed to delete product.";
      setStatus({ type: "error", message });
    } finally {
      setDeletingId("");
    }
  };

  return (
    <AdminShell
      testId="page-admin-products"
      title="Products"
      subtitle="Create and manage products under a subcategory."
      actions={
        <>
          <Button
            variant="secondary"
            testId="button-admin-products-refresh"
            onClick={() => fetchProducts(listSubCategoryId)}
          >
            Refresh
          </Button>
          <Button
            testId="button-admin-product-add"
            variant={isFormOpen ? "secondary" : "primary"}
            onClick={() => {
              setStatus({ type: "", message: "" });
              setIsFormOpen((s) => !s);
            }}
          >
            {isFormOpen ? "Close" : "Add Product"}
          </Button>
        </>
      }
    >

          {isFormOpen ? (
            <form
              onSubmit={onSubmit}
              className="grid gap-4 max-w-2xl rounded-2xl border border-border/70 bg-background p-4 sm:p-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="product-category">
                    Category
                  </label>
                  <select
                    id="product-category"
                    data-testid="select-admin-product-category"
                    value={formCategoryId}
                    onChange={(e) => setFormCategoryId(e.target.value)}
                    className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a category…</option>
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="product-subcategory">
                    Subcategory
                  </label>
                  <select
                    id="product-subcategory"
                    data-testid="select-admin-product-subcategory"
                    value={formSubCategoryId}
                    onChange={(e) => setFormSubCategoryId(e.target.value)}
                    disabled={!formCategoryId}
                    className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  >
                    <option value="">
                      {formCategoryId ? "Select a subcategory…" : "Select category first…"}
                    </option>
                    {formSubCategories.map((s) => (
                      <option key={s._id} value={s._id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="product-title">
                  Title
                </label>
                <input
                  id="product-title"
                  data-testid="input-admin-product-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. API 6D Gate Valve"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="product-description">
                  Description (optional)
                </label>
                <textarea
                  id="product-description"
                  data-testid="input-admin-product-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 min-h-[96px] w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Short description…"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:items-end">
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="product-image">
                    Image (optional)
                  </label>
                  <input
                    id="product-image"
                    data-testid="input-admin-product-image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                    className="mt-2 block w-full text-sm"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    data-testid="input-admin-product-active"
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Active
                </label>
              </div>

              {status.message ? (
                <div
                  data-testid="status-admin-product"
                  className={
                    status.type === "success"
                      ? "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                      : "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  }
                >
                  {status.message}
                </div>
              ) : null}

              <div className="mt-1 flex items-center gap-3">
                <Button
                  testId="button-admin-product-submit"
                  type="submit"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? "Saving…" : "Create Product"}
                </Button>
                <Button
                  variant="ghost"
                  testId="button-admin-product-cancel"
                  onClick={() => {
                    resetForm();
                    setStatus({ type: "", message: "" });
                    setIsFormOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          ) : null}

          <div className="mt-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <div className="text-sm font-semibold tracking-wide">Products</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {isLoading ? "Loading…" : `${items.length} item(s)`}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:items-end">
                <div>
                  <label className="text-xs font-medium text-muted-foreground" htmlFor="filter-product-category">
                    Filter category
                  </label>
                  <select
                    id="filter-product-category"
                    data-testid="select-admin-product-filter-category"
                    value={listCategoryId}
                    onChange={(e) => setListCategoryId(e.target.value)}
                    className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">All categories</option>
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground" htmlFor="filter-product-subcategory">
                    Filter subcategory
                  </label>
                  <select
                    id="filter-product-subcategory"
                    data-testid="select-admin-product-filter-subcategory"
                    value={listSubCategoryId}
                    onChange={(e) => setListSubCategoryId(e.target.value)}
                    disabled={!listCategoryId}
                    className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  >
                    <option value="">
                      {listCategoryId ? "All subcategories" : "Select category first…"}
                    </option>
                    {listSubCategories.map((s) => (
                      <option key={s._id} value={s._id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="lg:justify-self-end" />
              </div>
            </div>

            {loadError ? (
              <div
                data-testid="status-admin-products-load-error"
                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {loadError}
              </div>
            ) : null}

            {!isLoading && !loadError && items.length === 0 ? (
              <div className="mt-4 rounded-xl border border-border/70 bg-background px-4 py-6 text-sm text-muted-foreground">
                No products found.
              </div>
            ) : null}

            {!isLoading && !loadError && items.length > 0 ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div
                    key={item._id}
                    data-testid={`card-admin-product-${item._id}`}
                    className="rounded-2xl soft-border bg-background p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-14 w-14 rounded-xl border border-border/70 overflow-hidden bg-secondary shrink-0">
                        {item.imageUrl ? (
                          <img
                            src={toPublicUrl(item.imageUrl)}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : null}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold truncate">{item.title}</div>
                          <span
                            className={
                              item.active
                                ? "inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                                : "inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                            }
                          >
                            {item.active ? "Active" : "Inactive"}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          Category:{" "}
                          <span className="text-foreground">
                            {item.subCategory?.category?.title || "—"}
                          </span>
                          {"  "}•{"  "}
                          Subcategory:{" "}
                          <span className="text-foreground">
                            {item.subCategory?.title || "—"}
                          </span>
                        </div>
                        {item.description ? (
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        ) : (
                          <p className="mt-2 text-sm text-muted-foreground">
                            No description.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <Button
                        variant="ghost"
                        testId={`button-admin-product-edit-${item._id}`}
                        onClick={() => {
                          if (editingId === item._id) cancelEdit();
                          else startEdit(item);
                        }}
                      >
                        {editingId === item._id ? "Close" : "Edit"}
                      </Button>
                      <Button
                        variant="secondary"
                        testId={`button-admin-product-delete-${item._id}`}
                        disabled={deletingId === item._id}
                        className="border-red-200/80 text-red-700 hover:bg-red-50"
                        onClick={() => onDelete(item._id)}
                      >
                        {deletingId === item._id ? "Deleting…" : "Delete"}
                      </Button>
                    </div>

                    {editingId === item._id ? (
                      <form onSubmit={onUpdate} className="mt-4 grid gap-3">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div>
                            <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-product-category-${item._id}`}>
                              Category
                            </label>
                            <select
                              id={`edit-product-category-${item._id}`}
                              data-testid={`select-admin-product-edit-category-${item._id}`}
                              value={editCategoryId}
                              onChange={(e) => {
                                const next = e.target.value;
                                setEditCategoryId(next);
                                loadEditSubcategories(next, "");
                              }}
                              className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="">Select a category…</option>
                              {categories.map((c) => (
                                <option key={c._id} value={c._id}>
                                  {c.title}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-product-subcategory-${item._id}`}>
                              Subcategory
                            </label>
                            <select
                              id={`edit-product-subcategory-${item._id}`}
                              data-testid={`select-admin-product-edit-subcategory-${item._id}`}
                              value={editSubCategoryId}
                              onChange={(e) => setEditSubCategoryId(e.target.value)}
                              disabled={!editCategoryId}
                              className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                            >
                              <option value="">
                                {editCategoryId ? "Select a subcategory…" : "Select category first…"}
                              </option>
                              {editSubCategories.map((s) => (
                                <option key={s._id} value={s._id}>
                                  {s.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-product-title-${item._id}`}>
                            Title
                          </label>
                          <input
                            id={`edit-product-title-${item._id}`}
                            data-testid={`input-admin-product-edit-title-${item._id}`}
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-product-description-${item._id}`}>
                            Description
                          </label>
                          <textarea
                            id={`edit-product-description-${item._id}`}
                            data-testid={`input-admin-product-edit-description-${item._id}`}
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            className="mt-2 min-h-[84px] w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 sm:items-end">
                          <div>
                            <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-product-image-${item._id}`}>
                              Replace image (optional)
                            </label>
                            <input
                              id={`edit-product-image-${item._id}`}
                              data-testid={`input-admin-product-edit-image-${item._id}`}
                              type="file"
                              accept="image/*"
                              onChange={(e) => setEditImageFile(e.target.files?.[0] ?? null)}
                              className="mt-2 block w-full text-sm"
                            />
                          </div>

                          <label className="flex items-center gap-2 text-sm text-foreground">
                            <input
                              data-testid={`input-admin-product-edit-active-${item._id}`}
                              type="checkbox"
                              checked={editActive}
                              onChange={(e) => setEditActive(e.target.checked)}
                              className="h-4 w-4"
                            />
                            Active
                          </label>
                        </div>

                        {editStatus.message ? (
                          <div
                            data-testid={`status-admin-product-edit-${item._id}`}
                            className={
                              editStatus.type === "success"
                                ? "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                                : "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                            }
                          >
                            {editStatus.message}
                          </div>
                        ) : null}

                        <div className="flex items-center gap-3">
                          <Button
                            testId={`button-admin-product-update-${item._id}`}
                            type="submit"
                            disabled={
                              isUpdating ||
                              !editSubCategoryId ||
                              editTitle.trim().length === 0
                            }
                          >
                            {isUpdating ? "Saving…" : "Save changes"}
                          </Button>
                          <Button
                            variant="ghost"
                            testId={`button-admin-product-update-cancel-${item._id}`}
                            onClick={cancelEdit}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
    </AdminShell>
  );
}

