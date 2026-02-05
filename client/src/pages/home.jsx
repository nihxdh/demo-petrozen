import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ImageCard from "@/components/ImageCard";
import Button from "@/components/Button";

import {
  ShieldCheck,
  ClipboardList,
  HardHat,
  Gauge,
  Factory,
  Building2,
  CheckCircle2,
} from "lucide-react";

const HERO = "/src/assets/images/industry-refinery.jpg";
const LOGO = "/src/assets/logo.png";

const INDUSTRY_1 = "/src/assets/images/industry-refinery.jpg";
const INDUSTRY_2 = "/src/assets/images/industrial-manufacturing.jpg";
const INDUSTRY_3 =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80";

export default function Home() {
  return (
    <PageLayout testId="page-home">
      <section data-testid="section-hero" className="relative overflow-hidden">
        <img
          src={HERO}
          alt=""
          className="w-full h-auto"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0">
          <div className="container-pad py-20 sm:py-28">
            <div className="max-w-3xl fade-in-up">
              <img
                src={LOGO}
                alt="Petrozen"
                className="h-14 w-auto sm:h-16"
                data-testid="hero-logo"
              />
              <div
                data-testid="text-hero-eyebrow"
                className="mt-4 text-xs font-semibold tracking-[0.22em] uppercase text-white/80"
              >
                Engineering • Industrial 
              </div>
              <h1
                data-testid="text-hero-title"
                className="mt-4 text-4xl sm:text-6xl font-semibold serif text-white leading-[1.05]"
              >
                Leading oil & gas manufacturing in the region
              </h1>
              <p
                data-testid="text-hero-subtitle"
                className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed"
              >
                Specializing in high-precision industrial components and infrastructure for the
                energy sector. Quality-driven, safety-first, and built for the future of the
                Middle East.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  as="link"
                  href="/services"
                  testId="button-hero-primary"
                  size="lg"
                >
                  Our Capabilities
                </Button>
                <Button
                  as="link"
                  href="/contact"
                  testId="button-hero-secondary"
                  size="lg"
                  variant="secondary"
                  className="bg-white/10 text-white border-white/15 hover:bg-white/15"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-about-preview" className="py-16 sm:py-20">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionTitle
                testId="title-about-preview"
                eyebrow="About"
                title="A partner built for field realities"
                description="We blend classical discipline with modern delivery: clean documentation, rigorous checks, and practical support that holds up on site."
              />
              <div className="mt-7">
                <Button
                  as="link"
                  href="/about"
                  testId="button-about-more"
                  variant="secondary"
                >
                  Learn about our team
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImageCard
                  testId="card-about-1"
                  badge="Approach"
                  title="Quality-driven"
                  description="ISO-aligned methods, consistent reporting, and audit-ready outputs."
                  imageSrc="/src/assets/images/industrial-manufacturing.jpg"
                  imageAlt="Industrial engineers reviewing plans"
                />
                <ImageCard
                  testId="card-about-2"
                  badge="Delivery"
                  title="Safety-first"
                  description="Practical processes that support safe, efficient execution."
                  imageSrc="/src/assets/images/industry-refinery.jpg"
                  imageAlt="Safety gear on an industrial site"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-services-preview" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <SectionTitle
            testId="title-services-preview"
            eyebrow="Services"
            title="Core capabilities"
            description="Focused services designed to de-risk delivery and strengthen compliance across project phases."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              testId="card-service-1"
              title="Quality assurance & control"
              description="Inspection support, ITP development, NCR management, and final dossier readiness."
              icon={ShieldCheck}
            />
            <ServiceCard
              testId="card-service-2"
              title="Project documentation"
              description="Registers, transmittals, vendor docs, as-builts, and handover packages that stand up." 
              icon={ClipboardList}
            />
            <ServiceCard
              testId="card-service-3"
              title="Field execution support"
              description="Method statements, work packs, commissioning readiness, and site coordination."
              icon={HardHat}
            />
            <ServiceCard
              testId="card-service-4"
              title="Engineering coordination"
              description="Interface tracking, RFIs, technical queries, and design change control." 
              icon={Gauge}
            />
            <ServiceCard
              testId="card-service-5"
              title="Industrial compliance"
              description="Compliance planning, evidence management, and supplier qualification support."
              icon={Factory}
            />
            <ServiceCard
              testId="card-service-6"
              title="Infrastructure delivery"
              description="Controls for schedule, quality, and closeout across civil and mechanical scopes." 
              icon={Building2}
            />
          </div>

          <div className="mt-10 flex justify-center">
            <Button as="link" href="/services" testId="button-services-more">
              View all services
            </Button>
          </div>
        </div>
      </section>

      <section data-testid="section-industries" className="py-16 sm:py-20">
        <div className="container-pad">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <SectionTitle
              testId="title-industries"
              eyebrow="Industries"
              title="Where we operate"
              description="Experience across high-stakes environments where standards, safety, and speed matter."
            />
            <Button
              as="link"
              href="/industries"
              testId="button-industries-more"
              variant="secondary"
            >
              Explore industries
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImageCard
              testId="card-industry-1"
              title="Oil & Gas"
              description="Quality controls, vendor oversight, and documentation built for audit readiness."
              imageSrc={INDUSTRY_1}
              imageAlt="Oil and gas facility"
            />
            <ImageCard
              testId="card-industry-2"
              title="Engineering"
              description="Interface coordination and technical workflows that keep execution aligned."
              imageSrc={INDUSTRY_2}
              imageAlt="Engineering team working in a lab"
            />
            <ImageCard
              testId="card-industry-3"
              title="Infrastructure"
              description="Controls for delivery, closeout, and compliance across complex projects."
              imageSrc={INDUSTRY_3}
              imageAlt="Infrastructure construction site"
            />
          </div>
        </div>
      </section>

      <section data-testid="section-why" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <SectionTitle
            testId="title-why"
            eyebrow="Why choose us"
            title="Quiet confidence, clear outcomes"
            description="We\u2019re built for disciplined delivery\u2014with systems that reduce ambiguity and make quality visible."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Structured process",
                desc: "Defined steps, consistent artifacts, and predictable handover quality.",
              },
              {
                title: "Field-ready delivery",
                desc: "Practical documents and controls that work in real conditions.",
              },
              {
                title: "Evidence-based compliance",
                desc: "Traceable records designed for reviews, audits, and client confidence.",
              },
            ].map((x, idx) => (
              <div
                key={x.title}
                data-testid={`card-why-${idx}`}
                className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold serif">{x.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {x.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-certifications" className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionTitle
            testId="title-certs"
            eyebrow="Certifications"
            title="Quality systems and compliance"
            description="A commitment to robust procedures, traceability, and continuous improvement." 
            align="center"
          />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["ISO 9001", "ISO 14001", "ISO 45001", "API Q1"].map((label) => (
              <div
                key={label}
                data-testid={`badge-cert-${label.replace(/\s+/g, "-")}`}
                className="rounded-2xl soft-border bg-card p-6 text-center shadow-sm shadow-black/5"
              >
                <div className="text-sm font-semibold serif">{label}</div>
                <div className="mt-1 text-xs text-muted-foreground">Aligned policy</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button as="link" href="/certifications" testId="button-certs-more" variant="secondary">
              View certifications
            </Button>
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="py-16 sm:py-20 bg-foreground">
        <div className="container-pad">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 data-testid="text-cta-title" className="text-3xl sm:text-4xl font-semibold serif text-white">
                  Ready to de-risk delivery?
                </h3>
                <p data-testid="text-cta-subtitle" className="mt-3 text-white/75 max-w-2xl">
                  Tell us about your project. We\u2019ll respond with a clear next step and a
                  proposed path to support.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Button as="link" href="/contact" testId="button-cta" size="lg">
                  Request a consult
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
