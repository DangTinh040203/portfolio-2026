"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 z-[900] w-full transition-all duration-300
        ${scrolled
          ? "bg-navy-deep/90 shadow-[0_1px_12px_rgba(0,0,0,.25)] backdrop-blur-md"
          : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex h-[64px] max-w-[1360px] items-center justify-between px-10 max-sm:px-5">
        {/* Logo */}
        <a href="#hero" className="font-serif text-[22px] font-bold tracking-[-0.02em] text-white">
          CDT<span className="text-cyan">.</span>
        </a>

        {/* Desktop nav */}
        <div className="flex items-center gap-7 max-md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/CV_Cao_Dang_Tinh_Fullstack.pdf"
            download
            className={`
              ml-2 rounded-[7px] bg-blue px-5 py-[9px] text-[13.5px] font-semibold text-white
              transition-all duration-200 hover:shadow-blue-glow hover:translate-y-[-1px]
            `}
          >
            Download CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-white/60 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/[.06] bg-navy-deep/95 px-5 py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/CV_Cao_Dang_Tinh_Fullstack.pdf"
              download
              className="mt-2 w-full rounded-[7px] bg-blue px-5 py-[11px] text-center text-[14px] font-semibold text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
