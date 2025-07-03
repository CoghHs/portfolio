"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  targetId: string;
  label?: string;
};

const fadeSlideVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.1 },
};

export default function SkipScrollButton({
  targetId,
  label = "프로젝트로 바로 이동하셔도 좋아요!",
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 120, bounce: 0.4 }}
      className="relative text-white text-xl text-center backdrop-blur-sm rounded-full bg-white/10 border border-white/20 text-glow w-[400px] h-[150px] cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.span
            key="hover"
            {...fadeSlideVariants}
            className="font-bold text-4xl tracking-widest text-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            PROJECTS
          </motion.span>
        ) : (
          <motion.span
            key="default"
            {...fadeSlideVariants}
            className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-xl"
          >
            <div className="mb-2">지루하신가요?</div>
            <div className="text-glow font-bold">{label}</div>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
