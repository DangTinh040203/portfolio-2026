"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { MotionHero, MotionHeroItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "tinhcaodang.work@gmail.com",
    href: "mailto:tinhcaodang.work@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 862 040 542",
    href: "tel:+84862040542",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/DangTinh040203",
    href: "https://github.com/DangTinh040203",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className={`
        relative overflow-hidden bg-[linear-gradient(160deg,#0a1520_0%,#07101a_60%,#040d14_100%)]
        px-10 py-24
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)]
        before:[mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_30%,transparent_80%)]
        before:bg-[length:52px_52px]
        max-md:px-8 max-md:py-[72px]
        max-sm:px-5 max-sm:py-14
      `}
    >
      {/* Glow */}
      <div
        className={`
          pointer-events-none absolute -top-[20%] right-[10%] size-[500px]
          bg-[radial-gradient(circle,rgba(24,71,240,.15)_0%,transparent_60%)]
        `}
      />

      <div className="relative z-[1] mx-auto max-w-[1360px]">
        <MotionHero triggerOnScroll>
          <MotionHeroItem>
            <div className="mb-2.5 font-mono text-[10.5px] font-medium tracking-[0.17em] text-blue-muted/65 uppercase">
              Get In Touch
            </div>
          </MotionHeroItem>

          <MotionHeroItem>
            <h2
              className={`
                mb-3.5 font-serif text-[clamp(28px,3.8vw,48px)] leading-[1.07] font-bold tracking-[-0.025em] text-white
                max-md:text-[clamp(24px,6vw,36px)]
              `}
            >
              Let&apos;s Work
              <br />
              <span className="text-cyan">Together.</span>
            </h2>
          </MotionHeroItem>

          <MotionHeroItem>
            <p className="mb-12 max-w-[520px] text-[16.5px] leading-[1.74] font-light text-white/[.44]">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out through any channel below.
            </p>
          </MotionHeroItem>

          <MotionHeroItem>
            <div className="mb-10 grid grid-cols-2 gap-4 max-w-[640px] max-sm:grid-cols-1">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="group flex items-start gap-3">
                  <div className="rounded-lg bg-white/[.06] p-2.5 ring-1 ring-white/[.08]">
                    <item.icon size={18} className="text-blue-muted" />
                  </div>
                  <div>
                    <div className="mb-0.5 text-[11px] font-medium tracking-wider text-white/25 uppercase">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[14px] text-white/70 transition-colors hover:text-cyan"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[14px] text-white/70">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </MotionHeroItem>

          <MotionHeroItem>
            <div className="flex flex-wrap gap-2.5 max-md:flex-col max-md:items-stretch">
              <Button href="mailto:tinhcaodang.work@gmail.com" variant="primary">
                <Mail size={16} />
                Send Email →
              </Button>
              <Button href="https://github.com/DangTinh040203" variant="outlineLight">
                <GithubIcon size={16} />
                View GitHub
              </Button>
            </div>
          </MotionHeroItem>
        </MotionHero>
      </div>
    </section>
  );
}
