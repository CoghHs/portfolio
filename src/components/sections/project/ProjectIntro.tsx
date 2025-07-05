"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ProjectDetailButton from "./ProjectDetailModal";
import { Project } from "@/types/project";

type Props = {
  index: number;
  project: Project;
};

export default function ProjectIntroSection({ index, project }: Props) {
  const padded = String(index + 1).padStart(2, "0");
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const ySmooth = useSpring(yRange, {
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  });
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="h-[100vh] flex items-center text-white relative overflow-hidden"
    >
      <motion.div
        style={{ y: ySmooth, opacity }}
        className="absolute left-10 mt-22 sm:mt-0 text-[4rem] sm:text-[7rem] font-bold text-very-dark-glow"
      >
        {padded}
      </motion.div>

      <motion.div
        style={{ y: ySmooth, opacity }}
        className="absolute mt-22 sm:mt-0 left-24 p-10 sm:p-0 sm:left-52 w-[70%] sm:w-auto"
      >
        <h2 className="text-xl sm:text-4xl font-bold tracking-wide text-very-dark-glow">
          {project.title}
        </h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-xl font-bold text-very-dark-glow">
          {project.description}
        </p>
      </motion.div>

      <ProjectDetailButton
        project={{ ...project, index }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </section>
  );
}
