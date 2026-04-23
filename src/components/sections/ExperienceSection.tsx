"use client";

import { MotionItem } from "@/components/motion";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow, SectionHeading, SectionSubtitle } from "@/components/ui/SectionTypography";

const EXPERIENCES = [
  {
    period: "01/2024 — 02/2026",
    company: "Agest Vietnam",
    role: "Fullstack Developer",
    description: [
      "Led end-to-end development for the TestArchitect platform — scalable backend architectures with responsive React/Next.js frontends.",
      "Designed RESTful APIs and microservices, optimizing database queries and data processing pipelines.",
      "Collaborated with cross-functional teams on system requirements, database schemas, and API integrations.",
      "Maintained strict code quality with ESLint/Prettier, clean code principles, and rigorous code reviews.",
    ],
    tags: ["Next.js", "TypeScript", "Spring Boot", "AWS", "K8S"],
    accent: "border-blue",
    dotColor: "bg-blue",
  },
  {
    period: "05/2021 — 01/2024",
    company: "The Binary Holdings",
    role: "Fullstack Developer",
    description: [
      "Architected full-stack web applications and CRM systems with Next.js and Node.js/Express.js.",
      "Built centralized databases (MySQL, PostgreSQL) handling large-scale user data and system metrics.",
      "Implemented complex frontends with TailwindCSS and Framer Motion — achieving 90+ Lighthouse scores.",
      "Integrated backend services with Web3 technologies, managing secure auth flows and data synchronization.",
    ],
    tags: ["Next.js", "TailwindCSS", "Supabase", "Web3", "Framer Motion"],
    accent: "border-cyan",
    dotColor: "bg-cyan",
  },
  {
    period: "08/2021 — 11/2023",
    company: "RockyStudio",
    role: "Web Developer · Project Contract",
    description: [
      "Developed and optimized real-time full-stack applications with seamless user experiences.",
      "Refactored legacy codebases to improve maintainability, rendering speed, and security.",
      "Active participation in system architecture discussions and Agile workflow optimization.",
    ],
    tags: ["React.js", "Node.js", "Real-time", "Agile"],
    accent: "border-green",
    dotColor: "bg-green",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience" variant="white">
      <SectionEyebrow>Work Experience</SectionEyebrow>
      <SectionHeading>
        Where I&apos;ve
        <br />
        <span className="text-blue">Made Impact.</span>
      </SectionHeading>
      <SectionSubtitle>
        Building production systems across enterprise SaaS, Web3 infrastructure, and real-time
        applications.
      </SectionSubtitle>

      <div className="relative space-y-6">
        {/* Timeline line */}
        <div className="absolute top-0 left-[19px] h-full w-px bg-border max-md:hidden" />

        {EXPERIENCES.map((exp, i) => (
          <MotionItem key={exp.company} index={i} amount={0.05}>
            <div className="relative grid grid-cols-[40px_1fr] gap-6 max-md:grid-cols-1">
              {/* Timeline dot */}
              <div className="relative z-[1] flex justify-center pt-6 max-md:hidden">
                <div className={`size-3 rounded-full ${exp.dotColor} ring-4 ring-white shadow-sm`} />
              </div>

              {/* Card */}
              <div
                className={`
                  rounded-xl border-l-[3px] ${exp.accent} bg-surface-alt p-6
                  transition-all duration-200 hover:shadow-card
                  max-md:border-l-[3px]
                `}
              >
                <div className="mb-1 flex items-center gap-3 max-sm:flex-col max-sm:items-start max-sm:gap-1">
                  <span className="font-mono text-[11px] tracking-wider text-mid uppercase">
                    {exp.period}
                  </span>
                </div>
                <h3 className="mb-0.5 text-[20px] font-bold text-navy">{exp.company}</h3>
                <p className="mb-4 text-[14px] font-medium text-blue">{exp.role}</p>

                <ul className="mb-4 space-y-2">
                  {exp.description.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-[14px] leading-[1.7] text-slate"
                    >
                      <span className="mt-[7px] inline-block size-1.5 shrink-0 rounded-full bg-mid/40" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-navy ring-1 ring-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MotionItem>
        ))}
      </div>
    </Section>
  );
}
