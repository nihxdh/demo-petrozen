import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { IMAGES } from "@/lib/images";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const isActive = useMemo(
    () => (href) => (href === "/" ? location === "/" : location.startsWith(href)),
    [location],
  );

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldHide = location === "/" && isAtTop;

  return (
    <div
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-all duration-300",
        shouldHide ? "-translate-y-full -mb-16" : "translate-y-0",
      )}
    >
      <div className="container-pad">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span
              data-testid="link-brand"
              className="flex items-center gap-2 text-foreground cursor-pointer"
            >
              <img
                src={IMAGES.LOGO}
                alt="Petrozen"
                className="h-9 w-auto rounded-xl object-contain"
                data-testid="navbar-logo"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold serif">Petrozen</div>
                <div className="text-xs text-muted-foreground">Industrial & Gas Mfg.</div>
              </div>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={cn(
                    "text-sm transition-colors hover:text-foreground cursor-pointer",
                    isActive(item.href) ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/privacy">
              <span
                data-testid="link-nav-privacy"
                className={cn(
                  "text-sm transition-colors hover:text-foreground cursor-pointer",
                  isActive("/privacy") ? "text-foreground" : "text-muted-foreground",
                )}
              >
                Privacy
              </span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              as="link"
              href="/contact"
              testId="button-nav-cta"
              size="sm"
            >
              Request a consult
            </Button>
          </div>

          <button
            data-testid="button-nav-mobile"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-border/70 bg-white/90 backdrop-blur">
          <div className="container-pad py-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm transition-colors cursor-pointer",
                      isActive(item.href)
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <Button
                as="link"
                href="/contact"
                testId="button-mobile-cta"
                className="w-full"
              >
                Request a consult
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
