import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { HERO_URLS } from "@/lib/images";

import {
  ShieldCheck,
  ClipboardList,
  HardHat,
  Gauge,
  Factory,
  Building2,
  FileCheck2,
  ListChecks,
  Workflow,
} from "lucide-react";

const HERO = HERO_URLS.SERVICES;

export default function Services() {
  return (
    <PageLayout
      testId="page-services"
      title="Services"
      subtitle="Focused capabilities to support quality, compliance, and delivery."
      heroImage={HERO}
    >
      <section data-testid="section-service-cards" className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionTitle
            testId="title-services"
            eyebrow="What we do"
            title="Core service lines"
            description="A modular set of services you can engage independently or as an integrated package."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              testId="service-quality"
              title="Quality assurance & control"
              description="Inspection planning, ITPs, NCR workflows, vendor oversight, and closeout readiness."
              icon={ShieldCheck}
            />
            <ServiceCard
              testId="service-docs"
              title="Project documentation"
              description="Registers, transmittals, MDRs, as-builts, and handover dossiers that are consistent and complete."
              icon={ClipboardList}
            />
            <ServiceCard
              testId="service-field"
              title="Field execution support"
              description="Work packs, method statements, permits, and site coordination aligned to safe execution."
              icon={HardHat}
            />
            <ServiceCard
              testId="service-engineering"
              title="Engineering coordination"
              description="Interface tracking, RFIs, technical queries, and design change control support."
              icon={Gauge}
            />
            <ServiceCard
              testId="service-compliance"
              title="Industrial compliance"
              description="Compliance planning, evidence management, supplier qualification support, and audits."
              icon={Factory}
            />
            <ServiceCard
              testId="service-infra"
              title="Infrastructure delivery"
              description="Controls for schedule, quality, and closeout across complex scopes and stakeholders."
              icon={Building2}
            />
          </div>
        </div>
      </section>

      <section data-testid="section-process" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <SectionTitle
            testId="title-process"
            eyebrow="How it works"
            title="A simple, repeatable process"
            description="Clear steps that reduce ambiguity and keep delivery aligned."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              {
                t: "Assess",
                d: "Confirm scope, standards, and acceptance criteria. Align on outputs.",
                i: ListChecks,
              },
              {
                t: "Implement",
                d: "Deploy templates, registers, and checkpoints. Coordinate with your team.",
                i: Workflow,
              },
              {
                t: "Prove",
                d: "Package evidence for reviews, audits, and handover. Closeout with confidence.",
                i: FileCheck2,
              },
            ].map((x) => (
              <div
                key={x.t}
                data-testid={`card-process-${x.t.toLowerCase()}`}
                className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <x.i className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold serif">{x.t}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-industry-support" className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionTitle
            testId="title-support"
            eyebrow="Industry support"
            title="Built to adapt across environments"
            description="Our methods remain consistent while documentation and checkpoints adapt to your standards."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {["Oil & Gas", "Engineering", "Industrial", "Infrastructure"].map((label, idx) => (
              <div
                key={label}
                data-testid={`row-support-${idx}`}
                className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ListChecks className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold serif">{label}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Templates and evidence structures tailored to common standards and client
                      expectations in {label.toLowerCase()} environments.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
