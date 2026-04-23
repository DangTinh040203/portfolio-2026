"use client";

import { MotionItem } from "@/components/motion";

const HERO_STATS = [
  { v: "4.5+", l: "Years Experience", c: "text-blue-muted" },
  { v: "20+", l: "Major Projects", c: "text-cyan" },
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

export function HeroTerminal() {
  return (
    <MotionItem index={0} amount={0.05}>
      <div className="flex size-full items-center justify-center">
        <div
          className={`
            w-full overflow-hidden rounded-2xl border border-white/10 bg-white/4
            max-lg:max-w-130
          `}
        >
          <div className="flex items-center gap-1.5 border-b border-white/[.07] bg-black/45 px-3.75 py-3">
            <div className="size-2.5 rounded-full bg-red" />
            <div className="size-2.5 rounded-full bg-amber" />
            <div className="size-2.5 rounded-full bg-green" />
            <span className="ml-1.5 flex-1 font-mono text-[10px] text-white/20">profile · cao-dang-tinh</span>
            <span className="flex items-center gap-1 font-mono text-[10.5px] text-green">
              <span className="inline-block size-1.75 animate-pulse rounded-full bg-green" />
              Available for hire
            </span>
          </div>
          <div className="p-4">
            <div className="mb-3 grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg bg-white/5">
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
                  flex items-center justify-between border-b border-white/4 bg-white/3 px-3 py-2.25
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
  );
}
