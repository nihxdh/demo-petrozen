import { useEffect, useMemo, useState } from "react";
import Button from "@/components/Button";
import { apiClient } from "@/lib/apiClient";
import AdminShell from "@/components/admin/AdminShell";

export default function AdminCategories() {
  const [isFormOpen, setIsFormOpen] = useState(false);
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

  const fetchCategories = async () => {
    setLoadError("");
    setIsLoading(true);
    try {
      const res = await apiClient.get("/api/categories");
      setItems(res?.data?.items ?? []);
    } catch (err) {
      setLoadError(err?.response?.data?.message || err?.message || "Failed to load categories.");
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canSubmit = useMemo(() => {
    return title.trim().length > 0 && !isSubmitting;
  }, [title, isSubmitting]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImageFile(null);
    setActive(true);
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setEditTitle(item.title || "");
    setEditDescription(item.description || "");
    setEditImageFile(null);
    setEditActive(Boolean(item.active));
    setEditStatus({ type: "", message: "" });
  };

  const cancelEdit = () => {
    setEditingId("");
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
      fd.append("title", title.trim());
      if (description.trim()) fd.append("description", description.trim());
      fd.append("active", String(active));
      if (imageFile) fd.append("image", imageFile);

      await apiClient.post("/api/categories", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus({ type: "success", message: "Category created successfully." });
      await fetchCategories();
      resetForm();
      setIsFormOpen(false);
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to create category.";
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
      fd.append("title", editTitle.trim());
      fd.append("description", editDescription.trim());
      fd.append("active", String(editActive));
      if (editImageFile) fd.append("image", editImageFile);

      await apiClient.put(`/api/categories/${editingId}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEditStatus({ type: "success", message: "Category updated successfully." });
      await fetchCategories();
      cancelEdit();
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to update category.";
      setEditStatus({ type: "error", message });
    } finally {
      setIsUpdating(false);
    }
  };

  const onDelete = async (id) => {
    const ok = window.confirm(
      "Delete this category? This will also delete its subcategories and products.",
    );
    if (!ok) return;

    setDeletingId(id);
    try {
      await apiClient.delete(`/api/categories/${id}`);
      await fetchCategories();
      if (editingId === id) cancelEdit();
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || "Failed to delete category.";
      setStatus({ type: "error", message });
    } finally {
      setDeletingId("");
    }
  };

  return (
    <AdminShell
      testId="page-admin-categories"
      title="Categories"
      subtitle="Create and manage top-level categories for your product hierarchy."
      actions={
        <>
          <Button
            variant="secondary"
            testId="button-admin-categories-refresh"
            onClick={fetchCategories}
          >
            Refresh
          </Button>
          <Button
            testId="button-admin-category-add"
            variant={isFormOpen ? "secondary" : "primary"}
            onClick={() => {
              setStatus({ type: "", message: "" });
              setIsFormOpen((s) => !s);
            }}
          >
            {isFormOpen ? "Close" : "Add Category"}
          </Button>
        </>
      }
    >
      {isFormOpen ? (
            <form
              onSubmit={onSubmit}
              className="grid gap-4 max-w-2xl rounded-2xl border border-border/70 bg-background p-4 sm:p-5"
            >
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="category-title">
                  Title
                </label>
                <input
                  id="category-title"
                  data-testid="input-admin-category-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. Valves"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="category-description">
                  Description (optional)
                </label>
                <textarea
                  id="category-description"
                  data-testid="input-admin-category-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 min-h-[96px] w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Short description…"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:items-end">
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="category-image">
                    Image (optional)
                  </label>
                  <input
                    id="category-image"
                    data-testid="input-admin-category-image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                    className="mt-2 block w-full text-sm"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    data-testid="input-admin-category-active"
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
                  data-testid="status-admin-category"
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
                  testId="button-admin-category-submit"
                  type="submit"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? "Saving…" : "Create Category"}
                </Button>
                <Button
                  variant="ghost"
                  testId="button-admin-category-cancel"
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

          <div className="mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="text-sm font-semibold tracking-wide">All categories</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {isLoading ? "Loading…" : `${items.length} item(s)`}
                </div>
              </div>
            </div>

            {loadError ? (
              <div
                data-testid="status-admin-categories-load-error"
                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {loadError}
              </div>
            ) : null}

            {!isLoading && !loadError && items.length === 0 ? (
              <div className="mt-4 rounded-xl border border-border/70 bg-background px-4 py-6 text-sm text-muted-foreground">
                No categories yet. Click “Add Category” to create your first one.
              </div>
            ) : null}

            {!isLoading && !loadError && items.length > 0 ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div
                    key={item._id}
                    data-testid={`card-admin-category-${item._id}`}
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
                        {item.description ? (
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        ) : (
                          <p className="mt-1 text-sm text-muted-foreground">
                            No description.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <Button
                        variant="ghost"
                        testId={`button-admin-category-edit-${item._id}`}
                        onClick={() => {
                          if (editingId === item._id) cancelEdit();
                          else startEdit(item);
                        }}
                      >
                        {editingId === item._id ? "Close" : "Edit"}
                      </Button>
                      <Button
                        variant="secondary"
                        testId={`button-admin-category-delete-${item._id}`}
                        disabled={deletingId === item._id}
                        className="border-red-200/80 text-red-700 hover:bg-red-50"
                        onClick={() => onDelete(item._id)}
                      >
                        {deletingId === item._id ? "Deleting…" : "Delete"}
                      </Button>
                    </div>

                    {editingId === item._id ? (
                      <form onSubmit={onUpdate} className="mt-4 grid gap-3">
                        <div className="grid gap-3">
                          <div>
                            <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-category-title-${item._id}`}>
                              Title
                            </label>
                            <input
                              id={`edit-category-title-${item._id}`}
                              data-testid={`input-admin-category-edit-title-${item._id}`}
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-category-description-${item._id}`}>
                              Description
                            </label>
                            <textarea
                              id={`edit-category-description-${item._id}`}
                              data-testid={`input-admin-category-edit-description-${item._id}`}
                              value={editDescription}
                              onChange={(e) => setEditDescription(e.target.value)}
                              className="mt-2 min-h-[84px] w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                            />
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2 sm:items-end">
                            <div>
                              <label className="text-xs font-medium text-muted-foreground" htmlFor={`edit-category-image-${item._id}`}>
                                Replace image (optional)
                              </label>
                              <input
                                id={`edit-category-image-${item._id}`}
                                data-testid={`input-admin-category-edit-image-${item._id}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => setEditImageFile(e.target.files?.[0] ?? null)}
                                className="mt-2 block w-full text-sm"
                              />
                            </div>

                            <label className="flex items-center gap-2 text-sm text-foreground">
                              <input
                                data-testid={`input-admin-category-edit-active-${item._id}`}
                                type="checkbox"
                                checked={editActive}
                                onChange={(e) => setEditActive(e.target.checked)}
                                className="h-4 w-4"
                              />
                              Active
                            </label>
                          </div>
                        </div>

                        {editStatus.message ? (
                          <div
                            data-testid={`status-admin-category-edit-${item._id}`}
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
                            testId={`button-admin-category-update-${item._id}`}
                            type="submit"
                            disabled={isUpdating || editTitle.trim().length === 0}
                          >
                            {isUpdating ? "Saving…" : "Save changes"}
                          </Button>
                          <Button
                            variant="ghost"
                            testId={`button-admin-category-update-cancel-${item._id}`}
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

