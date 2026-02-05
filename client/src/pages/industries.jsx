import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import IndustryCard from "@/components/IndustryCard";
import { IMAGES, HERO_URLS } from "@/lib/images";

const HERO = HERO_URLS.INDUSTRIES;

const items = [
  {
    title: "Oil & Gas",
    description:
      "Inspection planning, vendor documentation control, and evidence-based compliance for audit-ready delivery.",
    image: HERO_URLS.OIL_GAS,
  },
  {
    title: "Engineering",
    description:
      "Interface coordination, technical workflows, and structured documentation that keeps execution aligned.",
    image: IMAGES.INDUSTRIAL_MANUFACTURING,
  },
  {
    title: "Industrial",
    description:
      "Field-ready processes for quality, safety, and closeout across mechanical and electrical scopes.",
    image: HERO_URLS.INFRASTRUCTURE_1,
  },
  {
    title: "Infrastructure",
    description:
      "Controls for schedule, quality, and compliance across multi-stakeholder delivery environments.",
    image: HERO_URLS.INFRASTRUCTURE_2,
  },
];

export default function Industries() {
  return (
    <PageLayout
      testId="page-industries"
      title="Industries"
      subtitle="Experience across environments where standards, safety, and speed matter."
      heroImage={HERO}
    >
      <section data-testid="section-industry-grid" className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionTitle
            testId="title-industry-grid"
            eyebrow="Industries served"
            title="Focused experience"
            description="We support clients in high-consequence environments with disciplined systems and practical delivery support."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((x) => (
              <IndustryCard
                key={x.title}
                testId={`card-industry-${x.title.toLowerCase().replace(/\s+/g, "-")}`}
                title={x.title}
                description={x.description}
                imageSrc={x.image}
                imageAlt={`${x.title} industry`}
              />
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-industry-detail" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <SectionTitle
            testId="title-industry-detail"
            eyebrow="What we provide"
            title="Support tailored to standards"
            description="Our templates and checkpoints adapt to your clients and regulatory environment while keeping evidence complete and consistent."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4">
            {[
              {
                t: "Oil & Gas",
                d: "MDR control, ITPs, vendor packages, inspection records, and audit-ready handover evidence.",
              },
              {
                t: "Engineering",
                d: "Interface registers, technical queries, design change control, and consistent reporting across stakeholders.",
              },
              {
                t: "Industrial",
                d: "Work packs, permits coordination, punch list control, and closeout dossiers aligned to site reality.",
              },
              {
                t: "Infrastructure",
                d: "Delivery controls for schedule, quality, and compliance across complex, multi-party environments.",
              },
            ].map((x, idx) => (
              <div
                key={x.t}
                data-testid={`card-industry-detail-${idx}`}
                className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5 lg:col-span-6"
              >
                <div className="text-lg font-semibold serif">{x.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
