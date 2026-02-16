import { useEffect } from "react";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { getAdminToken } from "@/lib/adminAuth";
import { cn } from "@/lib/utils";

export default function AdminShell({
  testId,
  title,
  subtitle,
  actions,
  children,
  className,
}) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Simple guard: if not logged in, redirect to login
    if (!getAdminToken()) {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  return (
    <PageLayout testId={testId}>
      <div className="container-pad py-8 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
          <AdminSidebar />

          <div className="min-w-0 space-y-6">
            <header className="rounded-2xl soft-border bg-card p-5 sm:p-6 shadow-sm shadow-black/5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h1 className="text-2xl sm:text-[28px] font-semibold tracking-tight">
                    {title}
                  </h1>
                  {subtitle ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {subtitle}
                    </p>
                  ) : null}
                </div>
                {actions ? (
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    {actions}
                  </div>
                ) : null}
              </div>
            </header>

            <section
              className={cn(
                "rounded-2xl soft-border bg-card p-6 sm:p-8 shadow-sm shadow-black/5",
                className,
              )}
            >
              {children}
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

