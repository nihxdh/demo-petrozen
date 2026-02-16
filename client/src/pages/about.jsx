import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import { IMAGES, HERO_URLS } from "@/lib/images";

const HERO = IMAGES.ABOUT_HERO;

export default function About() {
  return (
    <PageLayout
      testId="page-about"
      title="About"
      subtitle="A disciplined partner for quality, compliance, and execution support."
      heroImage={HERO}
      heroTitleFont="sans"
    >
      <section data-testid="section-company-overview" className="py-16 sm:py-20">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <SectionTitle
                testId="title-overview"
                eyebrow="Company overview"
                title="Precision in Every Pipeline"
                description="Petrozen is a leading oil & gas equipment supplier in the UAE, supporting critical energy and infrastructure projects across the region. Since its establishment, the company has been focused on delivering certified oilfield equipment, mechanical systems, pumps, valves, and industrial supply solutions aligned with international engineering standards."
                titleFont="sans"
              />
            </div>
            <div className="lg:col-span-5">
              <img
                data-testid="img-about-overview"
                src={IMAGES.ABOUT_US}
                alt="Quality and precision at the core of what we do"
                className="w-full max-w-[90%] ml-0 lg:ml-auto rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.10)] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 w-full max-w-none">
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                Our operations are built on disciplined supply chain management, vendor qualification systems, and strict quality assurance processes. Through inventory readiness, coordinated logistics, and HSE-compliant practices, we ensure reliable oil & gas supply solutions for upstream, offshore, onshore, and refining operations across the UAE and wider GCC region.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                As a growing oil & gas services company, Petrozen focuses on operational excellence, technical compliance, and long-term partnerships, supporting complex industrial environments where performance, safety, and documentation control are critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-mission" className="relative py-16 sm:py-20 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${IMAGES.MISSION_VISION_ABOUT})` }}
          aria-hidden
        />
        <div className="container-pad relative z-10">
          <SectionTitle
            testId="title-mission"
            eyebrow="Mission & vision"
            title="Make quality visible"
            titleFont="sans"
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5">
                  <div className="text-lg font-semibold">Mission</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Our mission is to deliver high-quality oil and gas equipment and integrated engineering services that enhance operational efficiency, safety, and reliability across the UAE energy sector. We are committed to supporting upstream, midstream, and downstream oil and gas operations with technically advanced solutions and responsive industrial services. Through strict adherence to international standards, local regulatory compliance, and oilfield engineering best practices, we ensure excellence in every project we undertake. We build long-term partnerships by prioritizing integrity, performance, and customer satisfaction, contributing meaningfully to the UAE’s energy infrastructure development and industrial growth.
                  </p>
                </div>
                <div className="rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5">
                  <div className="text-lg font-semibold">Vision</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Our vision is to become the leading and most trusted oil and gas solutions provider in Abu Dhabi and the wider GCC energy market. We aspire to set industry benchmarks in quality, innovation, and operational excellence for the oilfield and industrial services sector. By continuously investing in advanced technology, skilled talent, and sustainable energy practices, we aim to deliver long-term value for our clients, partners, and stakeholders. We envision playing a strategic role in supporting national energy initiatives, future-ready energy infrastructure, and the UAE’s industrial growth. Our goal is to build a resilient and reliable organization recognized for leadership, innovation, and measurable impact in the global oil and gas industry.
                  </p>
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
            align="center"
            titleFont="sans"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                t: "Core Focus",
                d: "We are dedicated to continuous improvement and pursuing excellence across all aspects of our operations. By crafting effective business strategies, we adapt to the evolving needs of our customers, ensuring satisfaction and fostering loyalty. Supported by a robust distribution network, we deliver quality and reliability across the markets we serve.",
              },
              {
                t: "Customer Satisfaction",
                d: "At Petrozen, we prioritize our customers in every decision we make. By understanding their needs and delivering tailored solutions, we ensure a seamless experience and build long-term trust. Our commitment to quality, reliability, and responsive service guarantees that our customers' expectations are not just met, but exceeded.",
              },
              {
                t: "Innovation",
                d: "We embrace innovation to stay ahead in a rapidly evolving market. By adopting advanced technologies and creative approaches, we provide solutions that drive efficiency, reliability, and progress for our customers.",
              },
              {
                t: "Integrity",
                d: "We conduct our business with honesty, transparency, and accountability. Upholding the highest ethical standards ensures trust and fosters long-term relationships with our clients, partners, and stakeholders.",
              },
            ].map((x) => (
              <div
                key={x.t}
                data-testid={`card-value-${x.t.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative h-[360px] rounded-2xl bg-gradient-to-br from-[#0036A4] to-[#0680F4] p-6 shadow-sm shadow-black/10 overflow-hidden transition-shadow duration-300 hover:shadow-md border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 group-hover:items-start group-hover:justify-start group-hover:pt-6">
                  <div className="text-lg font-semibold text-white text-center transition-all duration-300 group-hover:text-left">{x.t}</div>
                </div>
                <p className="absolute inset-x-0 bottom-0 top-14 p-6 pt-0 text-sm text-white/90 leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {x.d}
                </p>
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
                titleFont="sans"
              />
            </div>
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
                titleFont="sans"
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
