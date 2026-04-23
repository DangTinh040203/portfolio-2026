"use client";

import { forwardRef } from "react";
import { type HTMLMotionProps, m, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

type ContainerProps = HTMLMotionProps<"div"> & {
  triggerOnScroll?: boolean;
};

export const MotionHero = forwardRef<HTMLDivElement, ContainerProps>(function MotionHero(
  { children, triggerOnScroll = false, ...rest },
  ref,
) {
  const prefersReduced = useReducedMotion();

  if (triggerOnScroll) {
    return (
      <m.div
        ref={ref}
        variants={containerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        {...rest}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      ref={ref}
      variants={containerVariants}
      initial={prefersReduced ? "visible" : "hidden"}
      animate="visible"
      {...rest}
    >
      {children}
    </m.div>
  );
});

export const MotionHeroItem = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(function MotionHeroItem(
  { children, ...rest },
  ref,
) {
  return (
    <m.div ref={ref} variants={itemVariants} {...rest}>
      {children}
    </m.div>
  );
});
