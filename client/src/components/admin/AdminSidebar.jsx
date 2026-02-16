import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { clearAdminToken, getAdminToken } from "@/lib/adminAuth";

const items = [
  { label: "Categories", href: "/admin/categories" },
  { label: "Subcategories", href: "/admin/subcategories" },
  { label: "Products", href: "/admin/products" },
];

export default function AdminSidebar({ className }) {
  const [location, setLocation] = useLocation();

  const isActive = (href) => location === href || location.startsWith(`${href}/`);
  const isLoggedIn = Boolean(getAdminToken());

  return (
    <aside
      className={cn(
        "rounded-2xl soft-border bg-card p-4 sm:p-5 shadow-sm shadow-black/5",
        "lg:sticky lg:top-24",
        className,
      )}
    >
      <div className="text-sm font-semibold tracking-wide">Admin</div>
      <div className="mt-1 text-xs text-muted-foreground">
        Manage your product hierarchy
      </div>

      <nav className="mt-4 grid gap-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              data-testid={`link-admin-${item.label.toLowerCase()}`}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive(item.href)
                  ? "border-primary/25 bg-primary/10 text-primary font-semibold"
                  : "border-border/70 bg-background text-foreground hover:bg-muted",
              )}
            >
              {item.label}
            </a>
          </Link>
        ))}
      </nav>

      <div className="mt-6 pt-4 border-t border-border/70">
        {isLoggedIn ? (
          <Button
            variant="secondary"
            size="sm"
            testId="button-admin-logout"
            className="w-full justify-center border-red-200/80 text-red-700 hover:bg-red-50"
            onClick={() => {
              clearAdminToken();
              setLocation("/admin/login");
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            as="link"
            href="/admin/login"
            variant="secondary"
            size="sm"
            testId="button-admin-login"
            className="w-full justify-center"
          >
            Go to login
          </Button>
        )}
      </div>
    </aside>
  );
}

