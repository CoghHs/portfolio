"use client";

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  project: {
    detailImages: string[];
    title: string;
  };
};

export default function ProjectHorizontalScroll({ project }: Props) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });

  const x = useTransform(
    smoothScroll,
    [0, 1],
    ["0%", `-${(project.detailImages.length - 1) * 90}%`]
  );

  const isInView = useInView(containerRef, { amount: 0.1 });

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative w-full h-full flex items-center">
          <AnimatePresence>
            {isInView && (
              <>
                <motion.div
                  key="topOverlay"
                  className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 to-transparent z-40 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  key="bottomOverlay"
                  className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent z-40 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </>
            )}
          </AnimatePresence>

          <motion.div
            style={{ x }}
            className="flex w-max h-full items-center gap-8 px-20 z-0"
          >
            {project.detailImages.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`${project.title} image ${i}`}
                className="w-full h-auto object-contain sm:w-[80vw] sm:h-[85vh] sm:object-cover rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
