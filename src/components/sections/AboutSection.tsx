"use client";

import { MotionSection } from "@/components/motion";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow, SectionHeading, SectionSubtitle } from "@/components/ui/SectionTypography";

const ABOUT_STATS = [
  { value: "4.5+", label: "Years of Experience" },
  { value: "6+", label: "Production Projects" },
  { value: "3", label: "Companies Worked" },
  { value: "700M+", label: "Users Reached" },
];

export function AboutSection() {
  return (
    <Section id="about" variant="white">
      <MotionSection as="div">
        <div className="grid grid-cols-[1fr_380px] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <SectionEyebrow>About Me</SectionEyebrow>
            <SectionHeading>
              Building Digital Products
              <br />
              <span className="text-blue">That Scale.</span>
            </SectionHeading>
            <SectionSubtitle className="mb-8">
              I&apos;m a Fullstack Developer based in Ho Chi Minh City, Vietnam, with over 4.5 years of
              hands-on experience across the entire web stack. I specialize in the JavaScript/TypeScript
              ecosystem — React.js, Next.js on the frontend, and Node.js, NestJS on the backend.
            </SectionSubtitle>
            <p className="max-w-[560px] text-[15px] leading-[1.8] text-mid">
              From architecting scalable backend systems and designing RESTful APIs to crafting
              pixel-perfect, responsive UIs — I manage end-to-end project lifecycles with a strong focus
              on performance optimization, clean code practices, and seamless deployment pipelines.
              I&apos;ve worked with Web3 ecosystems, AI-powered SaaS products, and enterprise testing
              platforms.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-4 max-sm:grid-cols-2">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`
                  rounded-xl border border-border bg-surface-alt p-5
                  transition-all duration-200 hover:shadow-card hover:border-blue/20
                `}
              >
                <div className="mb-1 font-serif text-[32px] leading-none font-bold tracking-[-0.02em] text-navy">
                  {stat.value}
                </div>
                <div className="text-[12px] font-medium tracking-[0.04em] text-mid uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </Section>
  );
}
