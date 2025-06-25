// app/components/sections/home/HomeSection.tsx
"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useMemo } from "react";
import { useIntroStore } from "@/store/introStore";
import { splitText } from "@/utils/splitText";
import IntroHeadline from "./IntroHeadLine";
import ScrollIndicator from "./ScrollIndicator";

const headline = "프론트엔드 개발자";
const nameText = "박형석입니다.";

export default function HomeSection() {
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
      className="relative min-h-screen flex flex-col items-center justify-center z-10 text-white"
    >
      <div className="w-full max-w-6xl mx-auto px-8 text-center">
        <AnimatePresence>
          {introDone && (
            <IntroHeadline
              headlineChars={headlineChars}
              nameChars={nameChars}
            />
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

      {introDone && <ScrollIndicator />}
    </motion.div>
  );
}
