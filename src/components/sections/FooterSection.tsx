import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: "https://github.com/DangTinh040203", label: "GitHub" },
  { icon: Mail, href: "mailto:tinhcaodang.work@gmail.com", label: "Email" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-white px-10 py-10 max-sm:px-5 max-sm:py-8">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between max-md:flex-col max-md:gap-6">
        {/* Left */}
        <div className="flex items-center gap-6 max-md:flex-col max-md:gap-3">
          <span className="font-serif text-[18px] font-bold tracking-[-0.01em] text-navy">
            CDT<span className="text-blue">.</span>
          </span>
          <span className="text-[13px] text-mid">
            © {new Date().getFullYear()} Cao Dang Tinh. All rights reserved.
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-5 max-md:gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-mid transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-md p-2 text-mid transition-colors hover:bg-surface-alt hover:text-navy"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
