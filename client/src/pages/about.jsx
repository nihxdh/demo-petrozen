import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import { HERO_URLS } from "@/lib/images";

const HERO = HERO_URLS.ABOUT;

export default function About() {
  return (
    <PageLayout
      testId="page-about"
      title="About"
      subtitle="A disciplined partner for quality, compliance, and execution support."
      heroImage={HERO}
    >
      <section data-testid="section-company-overview" className="py-16 sm:py-20">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionTitle
                testId="title-overview"
                eyebrow="Company overview"
                title="Classical rigor, modern delivery"
                description="Petrozen supports project teams with clear documentation, quality systems, and field-ready processes. We focus on traceability and practical execution\u2014so work holds up under review and on site."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl soft-border bg-card p-6 sm:p-8 shadow-sm shadow-black/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-semibold serif">What we do</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Quality assurance & control, documentation systems, compliance evidence,
                      and execution support across industrial projects.
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold serif">How we work</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Structured, transparent workflows with clear checkpoints and client-ready
                      outputs.
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold serif">What you get</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Reduced ambiguity, improved closeout readiness, and documentation that
                      aligns teams.
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold serif">Where we operate</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Oil & gas, engineering, industrial, and infrastructure environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-mission" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionTitle
                testId="title-mission"
                eyebrow="Mission & vision"
                title="Make quality visible"
                description="Our mission is to help teams execute safely, document clearly, and demonstrate quality through evidence that\u2019s easy to understand and hard to dispute."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5">
                  <div className="text-lg font-semibold serif">Mission</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Support industrial teams with robust systems and practical field support
                    that reduce risk and improve delivery outcomes.
                  </p>
                </div>
                <div className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5">
                  <div className="text-lg font-semibold serif">Vision</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Become the trusted standard for documentation clarity and compliance
                    evidence across complex projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-values" className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionTitle
            testId="title-values"
            eyebrow="Core values"
            title="Principles we operate by"
            description="Simple standards, consistently applied."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Integrity", d: "Do the right thing\u2014even when no one is watching." },
              { t: "Discipline", d: "Processes that keep work clean, safe, and traceable." },
              { t: "Clarity", d: "Documentation and communication that reduce friction." },
              { t: "Ownership", d: "We take accountability for outputs and outcomes." },
            ].map((x) => (
              <div
                key={x.t}
                data-testid={`card-value-${x.t.toLowerCase()}`}
                className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5"
              >
                <div className="text-lg font-semibold serif">{x.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-company-image" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <img
                data-testid="img-company"
                src={HERO_URLS.COMPANY}
                alt="Team working in an industrial setting"
                className="w-full rounded-3xl shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-6">
              <SectionTitle
                testId="title-image"
                eyebrow="On site"
                title="Support that matches the pace of execution"
                description="We\u2019re designed to integrate with your team and deliver artifacts that match your operating rhythm\u2014from field packs to closeout dossiers."
              />
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-timeline" className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionTitle
            testId="title-story"
            eyebrow="Timeline"
            title="Our story"
            description="A steady, deliberate build\u2014focused on standards and delivery." 
          />

          <div className="mt-10 grid gap-4">
            {[
              { y: "2016", t: "Founded", d: "Built around quality systems and documentation discipline." },
              { y: "2019", t: "Expanded", d: "Added execution support for industrial and infrastructure scopes." },
              { y: "2022", t: "Standardized", d: "Developed ISO-aligned templates and evidence frameworks." },
              { y: "2025", t: "Modernized", d: "Introduced digital registers and consistent reporting systems." },
            ].map((x) => (
              <div
                key={x.y}
                data-testid={`row-timeline-${x.y}`}
                className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-lg font-semibold serif">{x.t}</div>
                  <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    {x.y}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-leadership" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionTitle
                testId="title-leadership"
                eyebrow="Leadership message"
                title="Documentation is the backbone of trust"
                description="\u201cIn industrial environments, quality isn\u2019t a slogan\u2014it\u2019s a record. Our work is built to make that record clear, complete, and credible.\u201d"
              />
              <div className="mt-5 text-sm text-muted-foreground">
                \u2014 Managing Director, Petrozen
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImageCard
                  testId="card-lead-1"
                  badge="Leadership"
                  title="Client-first"
                  description="Clear communication, honest estimates, and delivery aligned to your standards."
                  imageSrc={HERO_URLS.LEADERSHIP_1}
                  imageAlt="Corporate leadership meeting"
                />
                <ImageCard
                  testId="card-lead-2"
                  badge="Culture"
                  title="Craft & care"
                  description="We treat every closeout package as a signature of professionalism."
                  imageSrc={HERO_URLS.LEADERSHIP_2}
                  imageAlt="Team collaborating in an office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
