"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ConnectSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      id="connect"
      ref={ref}
      style={{ y, opacity, scale }}
      className="min-h-screen flex flex-col items-center justify-center text-white text-center space-y-6 relative px-10 sm:px-0"
    >
      <h2 className="text-4xl md:text-5xl font-bold ">감사합니다</h2>

      <p className="text-lg md:text-xl leading-relaxed">
        기능 구현에 그치지 않고,
        <br className="hidden md:block" />
        사용자 경험과 프로덕트의 퍼포먼스를 함께 고민합니다.
      </p>

      <p className="text-lg md:text-xl leading-relaxed">
        완성도를 높이기 위해 작은 디테일도 세심하게 다듬으며,
        <br className="hidden md:block" />
        함께하는 사람들에게 믿음을 주는 개발자가 되고 싶습니다.
      </p>

      <div className="flex justify-center gap-6 ">
        <a
          href="https://github.com/CoghHs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>
        <a
          href="mailto:mrpanda2412@gmail.com"
          className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Email
        </a>
      </div>
    </motion.section>
  );
}
