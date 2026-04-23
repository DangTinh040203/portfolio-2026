"use client";

import { MotionSection } from "@/components/motion";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow, SectionHeading, SectionSubtitle } from "@/components/ui/SectionTypography";

function TechConstellation() {
  return (
    <div className="relative flex items-center justify-center max-lg:py-4">
      <svg
        viewBox="0 0 380 380"
        className="h-auto w-full max-w-[380px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid background */}
        <defs>
          <pattern id="about-grid" width="38" height="38" patternUnits="userSpaceOnUse">
            <path d="M 38 0 L 0 0 0 38" fill="none" stroke="rgba(13,27,42,0.04)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="about-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="about-mask">
            <rect width="380" height="380" fill="url(#about-fade)" />
          </mask>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4b4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1847f0" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1847f0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00d4b4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <rect width="380" height="380" fill="url(#about-grid)" mask="url(#about-mask)" />

        {/* Orbit rings */}
        <circle cx="190" cy="190" r="60" stroke="rgba(0,212,180,0.08)" strokeWidth="1" strokeDasharray="4 6">
          <animateTransform attributeName="transform" type="rotate" from="0 190 190" to="360 190 190" dur="40s" repeatCount="indefinite" />
        </circle>
        <circle cx="190" cy="190" r="110" stroke="rgba(24,71,240,0.06)" strokeWidth="0.8" strokeDasharray="3 8">
          <animateTransform attributeName="transform" type="rotate" from="360 190 190" to="0 190 190" dur="55s" repeatCount="indefinite" />
        </circle>
        <circle cx="190" cy="190" r="155" stroke="rgba(0,212,180,0.04)" strokeWidth="0.6" strokeDasharray="2 10">
          <animateTransform attributeName="transform" type="rotate" from="0 190 190" to="360 190 190" dur="70s" repeatCount="indefinite" />
        </circle>

        {/* Connection lines */}
        <line x1="190" y1="190" x2="130" y2="130" stroke="url(#line-grad-1)" strokeWidth="1">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="190" x2="280" y2="150" stroke="url(#line-grad-2)" strokeWidth="1">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="190" x2="150" y2="280" stroke="url(#line-grad-1)" strokeWidth="0.8">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="190" x2="270" y2="260" stroke="url(#line-grad-2)" strokeWidth="0.8">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="190" x2="100" y2="210" stroke="url(#line-grad-1)" strokeWidth="0.6">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4.5s" repeatCount="indefinite" />
        </line>
        <line x1="130" y1="130" x2="80" y2="85" stroke="url(#line-grad-2)" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="280" y1="150" x2="320" y2="95" stroke="url(#line-grad-1)" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="5.5s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="280" x2="95" y2="315" stroke="url(#line-grad-2)" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.2;0.45;0.2" dur="7s" repeatCount="indefinite" />
        </line>

        {/* Center node — glow */}
        <circle cx="190" cy="190" r="18" fill="rgba(0,212,180,0.06)">
          <animate attributeName="r" values="16;22;16" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="190" cy="190" r="6" fill="#00d4b4">
          <animate attributeName="r" values="5;7;5" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Primary nodes — orbiting */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 190 190" to="360 190 190" dur="40s" repeatCount="indefinite" />
          <circle cx="130" cy="190" r="10" fill="rgba(24,71,240,0.08)">
            <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="130" cy="190" r="4" fill="#1847f0">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <animateTransform attributeName="transform" type="rotate" from="120 190 190" to="480 190 190" dur="40s" repeatCount="indefinite" />
          <circle cx="130" cy="190" r="9" fill="rgba(0,212,180,0.07)">
            <animate attributeName="r" values="7;11;7" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="130" cy="190" r="3.5" fill="#00d4b4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <animateTransform attributeName="transform" type="rotate" from="240 190 190" to="600 190 190" dur="40s" repeatCount="indefinite" />
          <circle cx="130" cy="190" r="8" fill="rgba(16,185,129,0.07)">
            <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="130" cy="190" r="3" fill="#10b981">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Secondary nodes */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="360 190 190" to="0 190 190" dur="55s" repeatCount="indefinite" />
          <circle cx="80" cy="190" r="3" fill="#1847f0" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="190" r="2.5" fill="#00d4b4" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <animateTransform attributeName="transform" type="rotate" from="45 190 190" to="405 190 190" dur="55s" repeatCount="indefinite" />
          <circle cx="80" cy="190" r="2" fill="#f59e0b" opacity="0.4">
            <animate attributeName="opacity" values="0.25;0.55;0.25" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Tertiary outer nodes */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 190 190" to="360 190 190" dur="70s" repeatCount="indefinite" />
          <circle cx="35" cy="190" r="2" fill="#00d4b4" opacity="0.3">
            <animate attributeName="opacity" values="0.15;0.4;0.15" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="345" cy="190" r="1.5" fill="#1847f0" opacity="0.25">
            <animate attributeName="opacity" values="0.1;0.35;0.1" dur="8s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <animateTransform attributeName="transform" type="rotate" from="90 190 190" to="450 190 190" dur="70s" repeatCount="indefinite" />
          <circle cx="35" cy="190" r="1.5" fill="#10b981" opacity="0.2">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="9s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Static ambient dots */}
        <circle cx="80" cy="85" r="2.5" fill="#1847f0" opacity="0.25">
          <animate attributeName="opacity" values="0.15;0.4;0.15" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="95" r="2" fill="#00d4b4" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.35;0.1" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="95" cy="315" r="2" fill="#10b981" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="310" cy="300" r="1.5" fill="#f59e0b" opacity="0.15">
          <animate attributeName="opacity" values="0.08;0.25;0.08" dur="8s" repeatCount="indefinite" />
        </circle>

        {/* Pulse ring from center */}
        <circle cx="190" cy="190" r="30" stroke="#00d4b4" strokeWidth="0.5" fill="none" opacity="0">
          <animate attributeName="r" values="20;80;140" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.15;0" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="190" cy="190" r="30" stroke="#1847f0" strokeWidth="0.4" fill="none" opacity="0">
          <animate attributeName="r" values="20;80;140" dur="6s" begin="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0" dur="6s" begin="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export function AboutSection() {
  return (
    <Section id="about" variant="white">
      <MotionSection as="div">
        <div className="grid grid-cols-[1fr_380px] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <SectionEyebrow>About Me</SectionEyebrow>
            <SectionHeading>
              Building Digital Products
              <br />
              <span className="text-cyan">That Scale.</span>
            </SectionHeading>
            <SectionSubtitle className="mb-8">
              I&apos;m a Fullstack Developer based in Ho Chi Minh City, Vietnam, with over 4.5 years of hands-on
              experience across the entire web stack. I specialize in the JavaScript/TypeScript ecosystem — React.js,
              Next.js on the frontend, and Node.js, NestJS on the backend.
            </SectionSubtitle>
            <p className="max-w-[560px] text-[15px] leading-[1.8] text-mid">
              From architecting scalable backend systems and designing RESTful APIs to crafting pixel-perfect,
              responsive UIs — I manage end-to-end project lifecycles with a strong focus on performance optimization,
              clean code practices, and seamless deployment pipelines. I&apos;ve worked with Web3 ecosystems, AI-powered
              SaaS products, and enterprise testing platforms.
            </p>
          </div>

          <TechConstellation />
        </div>
      </MotionSection>
    </Section>
  );
}
