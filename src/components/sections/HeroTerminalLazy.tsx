"use client";

import dynamic from "next/dynamic";

export const HeroTerminalLazy = dynamic(
  () => import("./HeroTerminal").then((m) => ({ default: m.HeroTerminal })),
  {
    ssr: false,
    loading: () => (
      <div className="flex w-full items-center justify-center max-lg:max-w-130" aria-hidden>
        <div
          className={`
            w-full min-h-[280px] animate-pulse rounded-2xl border border-white/10 bg-white/[.06]
            max-lg:max-w-130
          `}
        />
      </div>
    ),
  },
);
