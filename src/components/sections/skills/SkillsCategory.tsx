"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SkillCategoryProps {
  title: string;
  description: string;
  icons: { icon: ReactNode; label: string }[];
  side: "left" | "right";
}

export default function SkillCategory({
  title,
  description,
  icons,
  side,
}: SkillCategoryProps) {
  const isLeft = side === "left";

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y, scale }}
      className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl font-semibold mb-4 tracking-wide leading-snug">
          {title}
        </h3>
        <p className="text-sky-300 leading-relaxed text-lg">{description}</p>
      </div>

      <motion.div
        className="md:w-1/2 flex justify-center flex-wrap gap-6 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {icons.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
          >
            <div className="w-24 h-24 bg-white/10 rounded-xl flex items-center justify-center text-4xl shadow-xl transition-colors hover:text-sky-400">
              {item.icon}
            </div>
            <span className="text-xs text-zinc-300">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
