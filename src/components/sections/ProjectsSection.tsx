"use client";

import Image from "next/image";
import { ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { MotionItem } from "@/components/motion";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow, SectionHeading, SectionSubtitle } from "@/components/ui/SectionTypography";

const PROJECTS = [
  {
    title: "CV Craft",
    category: "AI Application",
    description:
      "AI-powered professional CV builder — features JD Matching analysis with RAG, real-time Mock Interview with AI via WebSocket, free PDF export and full resume management.",
    tech: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Google Gemini AI", "WebSocket", "Docker"],
    image: "/projects/cv-craft.png",
    demo: "https://cv-builder.site",
    github: "https://github.com/DangTinh040203/rag-cv-builder",
    accent: "border-blue",
  },
  {
    title: "TestArchitect Cloud",
    category: "SaaS Platform",
    description:
      "Powerful no-code automation platform to accelerate testing, boost collaboration, and deliver higher-quality releases without writing code.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Redux", "Spring Boot", "K8S", "AWS"],
    image: "/projects/testarchitect-cloud.png",
    demo: "https://cloud.testarchitect.com",
    accent: "border-cyan",
  },
  {
    title: "TestArchitect UI Mapify",
    category: "Browser Extension",
    description:
      "Chrome extension for automation testers — auto-generates CSS/XPath locators, streamlining Page Object Model workflows and eliminating manual coding.",
    tech: ["TypeScript", "TailwindCSS", "OpenAI API", "Webpack", "Vite.js"],
    image: "/projects/testarchitect-ui-mapify.png",
    demo: "https://testarchitect.com/product/testarchitect-ui-mapify",
    accent: "border-amber",
  },
  {
    title: "The Binary Network",
    category: "Web3 Ecosystem",
    description:
      "Web 2.5 infrastructure platform integrating blockchain into telco and banking apps. Enables millions to use dApps via daily apps, powered by the $BNRY token.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Express.js", "Solidity"],
    image: "/projects/binary-network.png",
    demo: "https://network.thebinaryholdings.com/",
    accent: "border-green",
  },
  {
    title: "The Binary Holdings",
    category: "Web3 Landing Page",
    description:
      "High-performance landing page for a Web3 ecosystem — focused on Growth Engineering with technical SEO, structured data, and conversion optimization.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Framer Motion", "Supabase"],
    image: "/projects/binary-holdings.png",
    demo: "https://www.thebinaryholdings.com/",
    accent: "border-blue",
  },
  {
    title: "The Binary Holdings CRM",
    category: "Admin Tools",
    description:
      "Specialized CRM system managing data and user growth metrics for the Web3 Ecosystem. Centralized database for admin control, metrics tracking, and content management.",
    tech: ["Next.js", "TailwindCSS", "Shadcn", "Supabase", "Better Auth", "MySQL"],
    isInternal: true,
    accent: "border-soft",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" variant="grey">
      <SectionEyebrow>Featured Projects</SectionEyebrow>
      <SectionHeading>
        Things I&apos;ve
        <br />
        <span className="text-blue">Built.</span>
      </SectionHeading>
      <SectionSubtitle>
        From AI-powered SaaS to Web3 infrastructure — production applications serving real users
        at scale.
      </SectionSubtitle>

      <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        {PROJECTS.map((project, i) => (
          <MotionItem key={project.title} index={i} amount={0.05}>
            <div
              className={`
                group h-full overflow-hidden rounded-xl border border-border bg-white
                transition-all duration-300 hover:shadow-elevated hover:border-blue/20
                ${project.accent ? `border-t-[3px] ${project.accent}` : ""}
              `}
            >
              {/* Screenshot */}
              {"image" in project && project.image ? (
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-alt">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center bg-navy/[.03]">
                  <div className="text-center">
                    <Lock size={32} className="mx-auto mb-2 text-soft" />
                    <span className="text-[13px] font-medium text-mid">Internal System</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="mb-1 block font-mono text-[10px] tracking-wider text-mid uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-[18px] font-bold text-navy">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {"github" in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-mid transition-colors hover:bg-surface-alt hover:text-navy"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {"demo" in project && project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-mid transition-colors hover:bg-surface-alt hover:text-blue"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-4 text-[13.5px] leading-[1.7] text-slate">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface-alt px-2 py-0.5 text-[11px] font-medium text-slate"
                    >
                      {t}
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
