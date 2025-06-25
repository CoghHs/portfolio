"use client";

import { motion } from "framer-motion";

const letterVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

export default function IntroHeadline({
  headlineChars,
  nameChars,
}: {
  headlineChars: { char: string; key: string }[];
  nameChars: { char: string; key: string }[];
}) {
  return (
    <motion.h1
      className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 tracking-tight"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {headlineChars.map(({ char, key }) => (
        <motion.span key={key} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <br />
      {nameChars.map(({ char, key }) => (
        <motion.span key={`name-${key}`} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
