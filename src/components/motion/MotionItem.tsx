"use client";

import { forwardRef } from "react";
import { type HTMLMotionProps, motion, useReducedMotion, type Variants } from "framer-motion";

const BASE_DELAY = 0.06;

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * BASE_DELAY,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type Props = HTMLMotionProps<"div"> & {
  index?: number;
  amount?: number;
};

export const MotionItem = forwardRef<HTMLDivElement, Props>(function MotionItem(
  { children, index = 0, amount = 0.1, ...rest },
  ref,
) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      custom={index}
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
