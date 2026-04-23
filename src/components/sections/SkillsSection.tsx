"use client";

import { Code2, Layout, Database, Cloud, Wrench, Blocks } from "lucide-react";
import { MotionItem } from "@/components/motion";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow, SectionHeading, SectionSubtitle } from "@/components/ui/SectionTypography";

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Java", "SQL"],
    color: "text-blue",
    bg: "bg-blue/[.08]",
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React.js", "Next.js", "TailwindCSS", "Framer Motion", "Redux", "shadcn/ui", "Vite.js", "Webpack"],
    color: "text-cyan",
    bg: "bg-cyan/[.08]",
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "Prisma", "PostgreSQL", "MySQL", "MongoDB"],
    color: "text-green",
    bg: "bg-green/[.08]",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS Services", "Google Cloud", "Docker", "Nginx", "CI/CD"],
    color: "text-amber",
    bg: "bg-amber/[.08]",
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["Git/GitHub", "Postman", "Figma", "Jira", "Agile/Scrum"],
    color: "text-red",
    bg: "bg-red/[.08]",
  },
  {
    icon: Blocks,
    title: "Specialties",
    skills: ["REST APIs", "WebSocket", "AI/RAG Integration", "SEO Optimization"],
    color: "text-blue-muted",
    bg: "bg-blue-muted/[.08]",
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" variant="grey">
      <SectionEyebrow>Tech Stack</SectionEyebrow>
      <SectionHeading>
        Tools & Technologies
        <br />
        <span className="text-cyan">I Work With.</span>
      </SectionHeading>
      <SectionSubtitle>
        Focused on the JavaScript/TypeScript ecosystem with full-stack coverage — from responsive frontends to scalable
        microservices and cloud deployments.
      </SectionSubtitle>

      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {SKILL_CATEGORIES.map((cat, i) => (
          <MotionItem key={cat.title} index={i} amount={0.05}>
            <div
              className={`
                group h-full rounded-xl border border-border bg-white p-6
                transition-all duration-200 hover:shadow-elevated hover:border-blue/15
              `}
            >
              <div className={`mb-4 inline-flex rounded-lg p-2.5 ${cat.bg}`}>
                <cat.icon size={20} className={cat.color} />
              </div>
              <h3 className="mb-3 text-[17px] font-semibold text-navy">{cat.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      rounded-md bg-surface-alt px-2.5 py-1 text-[12px] font-medium text-slate
                      transition-colors group-hover:bg-blue/[.05] group-hover:text-navy
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </MotionItem>
        ))}
      </div>
    </Section>
  );
}
