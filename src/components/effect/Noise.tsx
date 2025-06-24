"use client";

import { motion } from "framer-motion";

export default function Noise() {
  return (
    <motion.div
      className="fixed inset-0 bg-repeat opacity-5 z-0 pointer-events-none top-0 left-0 w-full h-full"
      style={{ backgroundImage: "url(/images/noise.png)" }}
      animate={{
        backgroundPosition: [
          "0 0",
          "50px 50px",
          "20px 80px",
          "70px 30px",
          "0 0",
        ],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    />
  );
}
