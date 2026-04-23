interface SectionProps {
  children: React.ReactNode;
  variant?: "white" | "grey" | "dark" | "dark2";
  className?: string;
  id?: string;
}

const VARIANT_MAP = {
  white: "bg-white",
  grey: "bg-surface",
  dark: "bg-navy text-white",
  dark2: "bg-navy-deep text-white",
};

export function Section({ children, variant = "white", className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`
        contain-content px-10 py-24
        max-md:px-8 max-md:py-[72px]
        max-sm:px-5 max-sm:py-14
        ${VARIANT_MAP[variant]}
        ${className}
      `}
    >
      <div className="mx-auto max-w-[1360px]">{children}</div>
    </section>
  );
}
