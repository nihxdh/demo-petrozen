import { Link } from "wouter";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="mt-16 bg-foreground text-white">
      <div className="container-pad py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-lg font-semibold serif">Petrozen</div>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              An industrial partner for energy, engineering, and infrastructure projects\u2014
              quality-driven, safety-first, and delivery focused.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide">Quick links</div>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/about">
                <a data-testid="link-footer-about" className="text-white/75 hover:text-white">
                  About
                </a>
              </Link>
              <Link href="/services">
                <a data-testid="link-footer-services" className="text-white/75 hover:text-white">
                  Services
                </a>
              </Link>
              <Link href="/industries">
                <a
                  data-testid="link-footer-industries"
                  className="text-white/75 hover:text-white"
                >
                  Industries
                </a>
              </Link>
              <Link href="/certifications">
                <a
                  data-testid="link-footer-certifications"
                  className="text-white/75 hover:text-white"
                >
                  Certifications
                </a>
              </Link>
              <Link href="/privacy">
                <a data-testid="link-footer-privacy" className="text-white/75 hover:text-white">
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4" />
                <div data-testid="text-footer-address">
                  1200 Industry Way, Suite 410\nNewark, NJ 07102
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a data-testid="link-footer-phone" href="tel:+1-555-0140" className="hover:text-white">
                  +1 (555) 014-0
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a
                  data-testid="link-footer-email"
                  href="mailto:info@petrozen.example"
                  className="hover:text-white"
                >
                  info@petrozen.example
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide">Social</div>
            <div className="mt-4 flex items-center gap-3">
              <a
                data-testid="link-footer-linkedin"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 hover:text-white hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 text-xs text-white/55">
              Certifications and claims shown are for demonstration in this prototype.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div data-testid="text-footer-copyright" className="text-xs text-white/60">
            \u00a9 {new Date().getFullYear()} Petrozen. All rights reserved.
          </div>
          <div className="text-xs text-white/60">
            Built as a frontend-only corporate website prototype.
          </div>
        </div>
      </div>
    </footer>
  );
}
