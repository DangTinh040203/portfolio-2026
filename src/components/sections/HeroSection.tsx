"use client";

import { Download, Mail } from "lucide-react";
import { MotionHero, MotionHeroItem, MotionItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";

const HERO_STATS = [
  { v: "4.5+", l: "Years Experience", c: "text-blue-muted" },
  { v: "10+", l: "Major Projects", c: "text-cyan" },
  { v: "3", l: "Companies", c: "text-white" },
  { v: "90+", l: "Lighthouse Score", c: "text-green" },
];

const HERO_DETAILS = [
  { l: "Specialization", v: "Fullstack · React/Next.js & Node/NestJS", c: "text-blue-muted" },
  { l: "Frontend", v: "React.js, Next.js, TypeScript, TailwindCSS", c: "text-white/[.72]" },
  { l: "Backend", v: "Node.js, NestJS, Express.js, PostgreSQL", c: "text-green" },
  { l: "DevOps", v: "Docker, AWS, GCP, CI/CD", c: "text-cyan" },
  { l: "Location", v: "Ho Chi Minh City, Vietnam", c: "text-white/[.72]" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className={`
        relative flex min-h-[592px] items-center overflow-hidden
        bg-[linear-gradient(160deg,#0a1520_0%,#07101a_60%,#040d14_100%)] px-10 pt-[88px] pb-20
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)]
        before:[mask-image:radial-gradient(ellipse_85%_90%_at_55%_45%,#000_20%,transparent_75%)]
        before:bg-[length:52px_52px]
        max-md:min-h-0 max-md:px-8 max-md:py-16
        max-sm:px-5 max-sm:py-[52px]
      `}
    >
      {/* Glow effects */}
      <div
        className={`
          pointer-events-none absolute -top-[15%] left-0 size-[680px]
          bg-[radial-gradient(circle,rgba(24,71,240,.2)_0%,transparent_60%)]
        `}
      />
      <div
        className={`
          pointer-events-none absolute -right-[5%] -bottom-1/4 size-[500px]
          bg-[radial-gradient(circle,rgba(0,212,180,.1)_0%,transparent_65%)]
        `}
      />

      <div
        className={`
          relative z-[1] mx-auto grid w-full max-w-[1360px] grid-cols-[1fr_490px] items-center gap-20
          max-lg:grid-cols-1 max-lg:gap-11
        `}
      >
        <MotionHero>
          {/* Eyebrow */}
          <MotionHeroItem className="mb-6 flex flex-wrap items-center gap-2.5">
            <span
              className={`
                rounded bg-blue/[.18] px-[11px] py-1 font-mono text-[10px] font-medium tracking-[0.09em]
                text-blue-muted uppercase ring-1 ring-blue/30
              `}
            >
              Fullstack Developer · 4.5+ Years
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/30">
              <span className="inline-block size-[7px] animate-pulse rounded-full bg-green" />
              Open to opportunities
            </span>
          </MotionHeroItem>

          {/* Heading */}
          <MotionHeroItem>
            <h1
              className={`
                mb-5 font-serif text-[clamp(38px,5.2vw,70px)] leading-[1.03] font-bold tracking-[-0.02em] text-white
                max-lg:text-[clamp(32px,6vw,52px)]
                max-md:text-[clamp(28px,7.5vw,42px)]
                max-sm:text-[clamp(24px,8vw,34px)]
              `}
            >
              <span className="font-light text-white/45">Hi, I&apos;m</span>
              <br />
              Cao Dang Tinh.
              <br />
              <span className="text-cyan">I Build Things.</span>
            </h1>
          </MotionHeroItem>

          {/* Subtitle */}
          <MotionHeroItem>
            <p
              className={`
                mb-9 max-w-[520px] text-[17px] leading-[1.76] font-light text-white/[.42]
                max-md:max-w-full max-md:text-[15px]
                max-sm:text-[13.5px]
              `}
            >
              Fullstack Developer specializing in the JavaScript/TypeScript ecosystem. I architect scalable
              backend systems, design robust APIs, and deliver pixel-perfect user interfaces — from database
              design to CI/CD deployment.
            </p>
          </MotionHeroItem>

          {/* CTAs */}
          <MotionHeroItem>
            <div className="mb-10 flex flex-wrap gap-2.5 max-md:flex-col max-md:items-stretch">
              <Button href="/CV_Cao_Dang_Tinh_Fullstack.pdf" variant="primary" download>
                <Download size={16} />
                Download CV
              </Button>
              <Button href="#contact" variant="outlineLight">
                <Mail size={16} />
                Contact Me →
              </Button>
            </div>
          </MotionHeroItem>
        </MotionHero>

        {/* Terminal Card */}
        <MotionItem index={0} amount={0.05}>
          <div className="flex size-full items-center justify-center">
            <div
              className={`
                w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]
                max-lg:max-w-[520px]
              `}
            >
              <div className="flex items-center gap-1.5 border-b border-white/[.07] bg-black/45 px-[15px] py-3">
                <div className="size-2.5 rounded-full bg-red" />
                <div className="size-2.5 rounded-full bg-amber" />
                <div className="size-2.5 rounded-full bg-green" />
                <span className="ml-1.5 flex-1 font-mono text-[10px] text-white/20">
                  profile · cao-dang-tinh
                </span>
                <span className="flex items-center gap-1 font-mono text-[10.5px] text-green">
                  <span className="inline-block size-[7px] animate-pulse rounded-full bg-green" />
                  Available for hire
                </span>
              </div>
              <div className="p-4">
                <div className="mb-3 grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg bg-white/[.05]">
                  {HERO_STATS.map((kpi) => (
                    <div key={kpi.l} className="bg-[rgba(10,21,32,.6)] px-3 py-3.5">
                      <div
                        className={`
                          mb-1 font-serif text-2xl leading-none font-bold tracking-[-0.015em]
                          ${kpi.c}
                        `}
                      >
                        {kpi.v}
                      </div>
                      <div className="text-[10px] text-white/[.28]">{kpi.l}</div>
                    </div>
                  ))}
                </div>
                {HERO_DETAILS.map((row) => (
                  <div
                    key={row.l}
                    className={`
                      flex items-center justify-between border-b border-white/[.04] bg-white/[.03] px-3 py-[9px]
                      last:border-none
                    `}
                  >
                    <span className="text-[11.5px] text-white/[.28]">{row.l}</span>
                    <span
                      className={`
                        text-right font-mono text-[11.5px] font-medium
                        ${row.c}
                      `}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionItem>
      </div>
    </section>
  );
}
