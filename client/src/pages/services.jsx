import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { IMAGES } from "@/lib/images";

import { BadgeCheck, Clock, Layers, PackageCheck } from "lucide-react";

const HERO = IMAGES.SERVICES_HERO;

export default function Services() {
  return (
    <PageLayout
      testId="page-services"
      title="Services"
      subtitle="Focused capabilities to support quality, compliance, and delivery."
      heroImage={HERO}
      heroTitleFont="sans"
    >
      <section data-testid="section-service-cards" className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionTitle
            testId="title-services"
            eyebrow="What we do"
            title="Core service lines"
            className="max-w-none w-full"
            description={
              <>
                <p>
                  At Petrozen, we provide comprehensive Service & Maintenance solutions designed to
                  support critical industrial operations across Abu Dhabi and the wider GCC region. Our
                  expertise extends beyond supplying high-performance industrial lubricants we ensure
                  that rotating equipment and essential machinery operate with maximum efficiency,
                  reliability, and safety.
                </p>
                <p className="mt-4">
                  Our service approach focuses on preventive care, technical precision, and rapid
                  response, helping clients minimize downtime and extend equipment life in demanding oil
                  & gas and industrial environments.
                </p>
              </>
            }
            titleFont="sans"
          />
        </div>
      </section>

      <section data-testid="section-service-categories" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <SectionTitle
            testId="title-service-categories"
            eyebrow="Service categories"
            title="Categories of services we provide"
            // description="Choose a service category below and get in touch for a tailored solution."
            align="center"
            titleFont="sans"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              data-testid="card-service-air-compressor"
              className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5 flex flex-col"
            >
              <h3 className="text-xl font-semibold">Air Compressor Services</h3>
              <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed flex-1">
                <p>
                One of the leading air compressor service specialists in the UAE and Sharjah, committed to quality and reliability. From routine maintenance to emergency breakdown support, our technical team ensures optimal compressor performance, energy efficiency, and operational reliability. 
                </p>
              </div>
              <Button
                as="link"
                href="/contact"
                testId="button-enquiry-air-compressor"
                className="mt-6 w-full sm:w-auto"
              >
                Enquiry now
              </Button>
            </div>

            <div
              data-testid="card-service-vacuum-pump"
              className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5 flex flex-col"
            >
              <h3 className="text-xl font-semibold">Vacuum Pump Services</h3>
              <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed flex-1">
                <p>Looking for reliable vacuum pump services in Dubai? You’ve come to the right place. Our experienced technical team delivers professional maintenance, troubleshooting, and repair solutions for vacuum pumps across various industries.
                </p>
              </div>
              <Button
                as="link"
                href="/contact"
                testId="button-enquiry-vacuum-pump"
                className="mt-6 w-full sm:w-auto"
              >
                Enquiry now
              </Button>
            </div>

            <div
              data-testid="card-service-cnc"
              className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5 flex flex-col"
            >
              <h3 className="text-xl font-semibold">CNC Services</h3>
              <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed flex-1">
                <p>
                  Our preventive maintenance programs are structured to reduce unexpected breakdowns
                  and improve equipment lifecycle. Through scheduled inspections, performance
                  monitoring, and technical evaluation, we help clients maintain uninterrupted
                  operations while lowering long-term maintenance costs.
                </p>
              </div>
              <Button
                as="link"
                href="/contact"
                testId="button-enquiry-cnc"
                className="mt-6 w-full sm:w-auto"
              >
                Enquiry now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-service-teams" className="py-16 sm:py-20 ">
        <div className="container-pad">
          <SectionTitle
            testId="title-service-teams"
            eyebrow="Field expertise & support"
            title="Our Service Engineers & Support Team"
            className="max-w-none w-full"
            description={
              <>
                <p>
                  Our skilled and certified service engineers operate across Abu Dhabi and the UAE,
                  delivering reliable maintenance and technical support for all major rotary screw
                  compressor brands. With strong field experience, our team ensures early fault
                  detection, efficient troubleshooting, and professional servicing to minimize
                  downtime.
                </p>
                <p className="mt-4">
                  We maintain ready stock of essential service kits and fast-moving spare parts to
                  support routine maintenance and emergency breakdowns. Using digital reporting
                  systems, our engineers provide quick documentation, transparent communication,
                  and responsive aftermarket support to ensure smooth and uninterrupted operations.
                </p>
                <p className="mt-4">
                  Our dedicated service support team ensures seamless coordination from planning to
                  aftermarket assistance. Backed by strong in-house technical expertise, we provide
                  prompt and efficient responses to customer requirements across all major compressor
                  brands.
                </p>
                <p className="mt-4">
                  Using advanced monitoring tools and a structured service database, we schedule
                  maintenance at predefined intervals based on equipment type, usage, and operating
                  conditions. Our tailored maintenance approach helps maximize equipment reliability,
                  performance, and operational continuity.
                </p>
              </>
            }
            titleFont="sans"
          />
        </div>
      </section>

      

      <section data-testid="section-process" className="py-16 sm:py-20 bg-secondary">
        <div className="container-pad">
          <SectionTitle
            testId="title-process"
            eyebrow="How it works"
            title="A Simple, Guaranteed Process"
            align="center"
            titleFont="sans"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                t: "Certified Service Engineers",
                d: "Trained and certified technicians to deliver expert service and maintenance.",
                i: BadgeCheck,
              },
              {
                t: "Multi-Brand Service Support",
                d: "Expert support across leading industrial and lubricant brands.",
                i: Layers,
              },
              {
                t: "24/7 Service Response",
                d: "Round-the-clock availability for critical operations and emergencies.",
                i: Clock,
              },
              {
                t: "Quality Spare Parts Availability",
                d: "Genuine parts and quality spares to keep your equipment running.",
                i: PackageCheck,
              },
            ].map((x, idx) => {
              const isBlue = idx % 2 === 0;
              const background = isBlue
                ? "linear-gradient(to bottom right, #064CCA, #068FFC)"
                : "linear-gradient(to bottom right, #239012, #57C50D)";
              return (
                <div
                  key={x.t}
                  data-testid={`card-process-${x.t.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-2xl border-0 p-6 sm:p-8 shadow-lg text-center text-white"
                  style={{ background }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <x.i className="h-10 w-10 shrink-0 text-white" />
                    <div>
                      <div className="text-lg font-semibold">{x.t}</div>
                      <p className="mt-2 text-sm text-white/90 leading-relaxed">{x.d}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
