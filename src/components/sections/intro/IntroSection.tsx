"use client";

import { useIntroStore } from "@/store/introStore";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const introTexts = ["사용자 중심", "구조적 사고", "감각적 설계", "끈기와 집중"];

export default function IntroSection() {
  const [phase, setPhase] = useState<"intro" | "outro" | "done">("intro");
  const [showTexts, setShowTexts] = useState(true);
  const setIntroDone = useIntroStore((s) => s.setIntroDone);

  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    const introDuration = introTexts.length * 800 + 800;

    const toOutro = setTimeout(() => {
      setPhase("outro");
      setShowTexts(false);
    }, introDuration);

    const toDone = setTimeout(() => {
      setPhase("done");
      setIntroDone(true);
    }, introDuration + 1000);

    return () => {
      clearTimeout(toOutro);
      clearTimeout(toDone);
    };
  }, [setIntroDone]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/70 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: showTexts ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="flex flex-col justify-center items-center h-full gap-10 text-white text-2xl z-10 relative">
        <AnimatePresence>
          {showTexts &&
            introTexts.map((text, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.8,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: {
                    delay: (introTexts.length - 1 - i) * 0.3,
                    duration: 0.4,
                    ease: "easeInOut",
                  },
                }}
              >
                {text}
              </motion.span>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
