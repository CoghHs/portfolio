"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useMemo } from "react";
import { useIntroStore } from "@/store/introStore";

const headline = "프론트엔드 개발자";
const nameText = "박형석입니다.";

const splitText = (text: string) =>
  text.split("").map((char, idx) => ({
    char,
    key: `${char}-${idx}`,
  }));

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

export default function HomePage() {
  const introDone = useIntroStore((s) => s.introDone);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const headlineChars = useMemo(() => splitText(headline), []);
  const nameChars = useMemo(() => splitText(nameText), []);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex flex-col items-center justify-center z-10 text-white "
    >
      <div className="w-full max-w-6xl mx-auto px-8 text-center">
        <AnimatePresence>
          {introDone && (
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
          )}
        </AnimatePresence>

        {introDone && (
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            개발에서 쌓은 구조적 사고와 그림에서 기른 관찰력을 바탕으로,
            <br />
            디자인과 기능이 조화를 이루는 UI를 만듭니다.
          </motion.p>
        )}
      </div>

      {introDone && (
        <motion.div
          className="absolute bottom-24 w-full overflow-hidden mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {introDone && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-white/60 text-sm mb-2 font-light">스크롤 하세요</p>
          <motion.div className="w-5 h-10 border border-white/20 rounded-full flex items-center justify-center">
            <motion.div
              className="w-1 h-1 bg-white/60 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
