"use client";

import { forwardRef } from "react";
import { type HTMLMotionProps, motion, useReducedMotion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

type Props = HTMLMotionProps<"div"> & {
  amount?: number;
  as?: "section" | "div";
};

export const MotionSection = forwardRef<HTMLDivElement, Props>(function MotionSection(
  { children, amount = 0.15, as = "section", ...rest },
  ref,
) {
  const prefersReduced = useReducedMotion();

  if (as === "section") {
    return (
      <motion.section
        ref={ref as React.Ref<HTMLElement>}
        variants={variants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount }}
        {...rest}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
});
