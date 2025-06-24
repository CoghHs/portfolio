"use client";

import { motion } from "framer-motion";

export default function Lighting() {
  return (
    <motion.div
      className="absolute w-4xl h-96 bg-gradient-to-r from-white to-transparent opacity-20 rotate-[90deg] bottom-0 left-90 "
      initial={{ opacity: 0.2 }}
      animate={{
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
