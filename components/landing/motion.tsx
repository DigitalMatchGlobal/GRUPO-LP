"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUpReduced = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

export function MotionSection({
  children,
  className,
  ...props
}: HTMLMotionProps<"section">) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={prefersReducedMotion ? staggerReduced : stagger}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <motion.div
      variants={prefersReducedMotion ? fadeUpReduced : fadeUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
