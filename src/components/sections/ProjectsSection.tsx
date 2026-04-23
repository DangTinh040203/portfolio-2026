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
      "Full-stack AI-powered CV builder with RAG-based JD Matching that analyzes resumes against job descriptions, real-time Mock Interview via WebSocket streaming, ATS-optimized PDF export, and a complete resume management dashboard. Built with server-side rendering and a microservice architecture.",
    tech: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Google Gemini AI", "WebSocket", "Docker"],
    image: "/projects/cv-craft.png",
    demo: "https://cv-builder.site",
    github: "https://github.com/DangTinh040203/rag-cv-builder",
    accent: "border-cyan",
  },
  {
    title: "TestArchitect UI Mapify",
    category: "Browser Extension",
    description:
      "Chrome extension for QA automation — inspects web pages to auto-generate CSS/XPath locators with AI-powered suggestions, streamlines Page Object Model workflows, supports bulk element mapping, and exports directly to test automation frameworks, eliminating hours of manual locator coding.",
    tech: ["TypeScript", "TailwindCSS", "OpenAI API", "Webpack", "Vite.js"],
    image: "/projects/testarchitect-ui-mapify.png",
    demo: "https://testarchitect.com/product/testarchitect-ui-mapify",
    accent: "border-amber",
  },
  {
    title: "TestArchitect Cloud",
    category: "SaaS Platform",
    description:
      "Enterprise-grade no-code test automation platform used by QA teams globally. Built the frontend with complex state management for test case editing, real-time collaboration via WebSocket, cloud execution dashboards with live status tracking, and a responsive design system supporting 50+ UI components.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Redux", "Spring Boot", "K8S", "AWS"],
    image: "/projects/testarchitect-cloud.png",
    demo: "https://cloud.testarchitect.com",
    accent: "border-green",
  },
  {
    title: "Đạo Tràng Ảo",
    category: "AI Application",
    description:
      "Virtual Dharma Hall — an AI-powered Buddhist learning platform where users converse with an assistant trained on eminent Masters' teachings. Features bilingual Vietnamese/English chat, voice recognition with AI-generated voice responses, and transparent source citations from Buddhist scriptures.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "AI/RAG", "Voice AI", "Supabase"],
    image: "/projects/daotrang.png",
    demo: "https://daotrang.net/en",
    accent: "border-amber",
  },
  {
    title: "The Binary Network",
    category: "Web3 Ecosystem",
    description:
      "Web 2.5 infrastructure platform embedding blockchain capabilities into national-scale telco and banking apps across Asia, Africa, and the Middle East. Integrates the $BNRY token economy, on-chain rewards and airdrops, wallet management, and a regulatory-compliant settlement layer.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Express.js", "Solidity"],
    image: "/projects/binary-network.png",
    demo: "https://network.thebinaryholdings.com/",
    accent: "border-cyan",
  },
  {
    title: "The Binary Holdings Landing",
    category: "Web3 Landing Page",
    description:
      "High-performance landing page engineered for Growth — implements structured data (JSON-LD), Open Graph optimization, Core Web Vitals scoring 90+, and conversion funnels driving investor and partner acquisition for the Web3 ecosystem.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Framer Motion", "Supabase"],
    image: "/projects/binary-holdings.png",
    demo: "https://www.thebinaryholdings.com/",
    accent: "border-cyan",
  },
  {
    title: "The Binary Holdings CRM",
    category: "Admin Tools",
    description:
      "Internal CRM system for the Web3 ecosystem — centralized dashboard for user growth analytics, content management, admin RBAC controls, quota management for AI chat/voice features, and real-time metrics tracking across multiple product lines.",
    tech: ["Next.js", "TailwindCSS", "Shadcn", "Supabase", "Better Auth", "MySQL"],
    isInternal: true,
    accent: "border-soft",
  },
  {
    title: "HackNative",
    category: "Web3 Community",
    description:
      "Web3 hackathon platform connecting builders, mentors, and sponsors. Features hackathon creation & management, team formation workflows, project submission & judging systems, community channels via Discord/Telegram integration, and a leaderboard showcasing top blockchain builders.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Web3"],
    image: "/projects/hacknative.png",
    demo: "https://www.hacknative.com/",
    accent: "border-green",
  },
  {
    title: "HotPotGPT",
    category: "AI SaaS Platform",
    description:
      "Multi-agent AI chat platform supporting GPT-4, Claude, and custom AI agents. Features project-based conversation management, built-in agent templates (YouTube Writer, Cold Email, Pro Coder), file attachments, and Stripe-powered subscription billing with usage-based quotas.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API", "Supabase", "Stripe"],
    image: "/projects/hotpotgpt.png",
    demo: "https://hotpotgpt.com/",
    accent: "border-cyan",
  },
  {
    title: "JobRocky",
    category: "AI SaaS Platform",
    description:
      "All-in-one career platform featuring an AI-powered CV Builder with 20+ customizable templates and color themes, AI Mock Interview with real-time feedback scoring, and Video Interview recording for job preparation. Supports multi-step onboarding and Stripe-based subscription tiers.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API", "Supabase", "Stripe"],
    image: "/projects/jobrocky.png",
    demo: "https://www.jobrocky.com/templates",
    accent: "border-amber",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" variant="grey">
      <SectionEyebrow>Featured Projects</SectionEyebrow>
      <SectionHeading>
        Things I&apos;ve
        <br />
        <span className="text-cyan">Built.</span>
      </SectionHeading>
      <SectionSubtitle>
        From AI-powered SaaS to Web3 infrastructure — production applications serving real users at scale.
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
                    alt={`Screenshot of ${project.title} — ${project.category}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={75}
                    priority={i < 2}
                    loading={i < 2 ? "eager" : "lazy"}
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

                <p className="mb-4 text-[13.5px] leading-[1.7] text-slate">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-surface-alt px-2 py-0.5 text-[11px] font-medium text-slate">
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
