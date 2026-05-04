interface SectionEyebrowProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionEyebrow({ children, light }: SectionEyebrowProps) {
  return (
    <div
      className={`
        mb-2.5 font-mono text-[10.5px] font-medium tracking-[0.17em] uppercase
        ${light ? "text-blue-muted/65" : "text-blue"}
      `}
    >
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  children: React.ReactNode;
  white?: boolean;
  className?: string;
}

export function SectionHeading({ children, white, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`
        mb-3.5 font-serif text-[clamp(28px,3.8vw,48px)] leading-[1.07] font-bold tracking-[-0.025em]
        max-md:text-[clamp(24px,6vw,36px)]
        max-sm:text-[clamp(22px,7vw,30px)]
        ${white ? "text-white" : "text-navy"}
        ${className}
      `}
    >
      {children}
    </h2>
  );
}

interface SectionSubtitleProps {
  children: React.ReactNode;
  white?: boolean;
  className?: string;
}

export function SectionSubtitle({ children, white, className = "" }: SectionSubtitleProps) {
  return (
    <p
      className={`
        mb-[52px] max-w-[560px] text-[16.5px] leading-[1.74] font-normal
        max-md:mb-9 max-md:text-[15px]
        max-sm:mb-7 max-sm:text-sm
        ${white ? "text-white/[.44]" : "text-mid"}
        ${className}
      `}
    >
      {children}
    </p>
  );
}
