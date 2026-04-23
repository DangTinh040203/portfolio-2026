import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "outlineLight";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  download?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: `
    bg-blue text-white
    hover:translate-y-[-1px] hover:shadow-[0_8px_28px_rgba(24,71,240,.38)]
  `,
  outline: `
    border-[1.5px] border-navy/20 text-navy/70
    hover:border-navy/50 hover:bg-navy/[.04] hover:text-navy
  `,
  outlineLight: `
    border-[1.5px] border-white/20 text-white/[.72]
    hover:border-white/50 hover:bg-white/[.06] hover:text-white
  `,
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  download,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center gap-[7px] rounded-[7px] px-7 py-[13px]
    text-[14.5px] font-semibold transition-all duration-200
    max-md:w-full max-md:justify-center max-md:text-center
    ${VARIANT_CLASSES[variant]}
    ${className}
  `;

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto") || download) {
      return (
        <a href={href} className={baseClasses} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" download={download}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
