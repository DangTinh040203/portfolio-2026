import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroTerminal } from "./HeroTerminal";

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
          bg-[radial-gradient(circle,rgba(0,155,130,.1)_0%,transparent_65%)]
        `}
      />

      <div
        className={`
          relative z-[1] mx-auto grid w-full max-w-[1360px] grid-cols-[1fr_490px] items-center gap-20
          max-lg:grid-cols-1 max-lg:gap-11
        `}
      >
        <div>
          {/* Eyebrow — subtle animation ok, not LCP */}
          <div className="hero-animate mb-6 flex flex-wrap items-center gap-2.5" style={{ "--hero-delay": "100ms" } as React.CSSProperties}>
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
          </div>

          {/* Heading — NO animation. This is the LCP element. Must be visible immediately. */}
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

          {/* Subtitle */}
          <div className="hero-animate" style={{ "--hero-delay": "200ms" } as React.CSSProperties}>
            <p
              className={`
                mb-9 max-w-[520px] text-[17px] leading-[1.76] font-light text-white/[.42]
                max-md:max-w-full max-md:text-[15px]
                max-sm:text-[13.5px]
              `}
            >
              Fullstack Developer specializing in the JavaScript/TypeScript ecosystem. I architect scalable backend
              systems, design robust APIs, and deliver pixel-perfect user interfaces — from database design to CI/CD
              deployment.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-animate mb-10 flex flex-wrap gap-2.5 max-md:flex-col max-md:items-stretch" style={{ "--hero-delay": "350ms" } as React.CSSProperties}>
            <Button href="/CV_Cao_Dang_Tinh_Fullstack.pdf" variant="primary" download>
              <Download size={16} />
              Download CV
            </Button>
            <Button href="#contact" variant="outlineLight">
              <Mail size={16} />
              Contact Me →
            </Button>
          </div>
        </div>

        {/* Terminal Card */}
        <HeroTerminal />
      </div>
    </section>
  );
}
