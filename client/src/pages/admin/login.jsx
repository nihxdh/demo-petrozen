import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import Button from "@/components/Button";
import { apiClient } from "@/lib/apiClient";
import { setAdminToken } from "@/lib/adminAuth";
import { IMAGES } from "@/lib/images";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    return username.trim().length > 0 && password.trim().length > 0 && !isSubmitting;
  }, [username, password, isSubmitting]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const res = await apiClient.post("/api/admin/login", { username, password });
      const token = res?.data?.token;
      if (!token) {
        throw new Error("Missing token in response");
      }

      setAdminToken(token);
      setLocation("/admin/categories");
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout testId="page-admin-login">
      <div className="container-pad py-10 sm:py-14 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl soft-border bg-card p-6 sm:p-8 shadow-sm shadow-black/5">
            <div className="flex flex-col items-center text-center">
              <img
                src={IMAGES.LOGO}
                alt="Petrozen"
                className="h-16 w-auto"
                data-testid="admin-login-logo"
              />
              <h1 className="mt-4 text-xl font-semibold tracking-tight">
                Admin Login
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in to manage categories and products.
              </p>
            </div>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div>
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-foreground"
                >
                  Username
                </label>
                <input
                  data-testid="input-admin-username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="admin username"
                  autoComplete="username"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <input
                  data-testid="input-admin-password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="mt-2 h-11 w-full rounded-xl border border-border/70 bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="admin password"
                  autoComplete="current-password"
                />
              </div>

              {error ? (
                <div
                  data-testid="status-admin-login-error"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </div>
              ) : null}

              <div className="mt-2 flex items-center gap-3">
                <Button
                  testId="button-admin-login"
                  type="submit"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? "Signing in…" : "Sign in"}
                </Button>
                
              </div>

              {!import.meta.env.VITE_API_BASE_URL ? (
                <p className="text-xs text-red-600">
                  Missing `VITE_API_BASE_URL` env var.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

