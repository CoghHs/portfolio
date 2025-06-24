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
        className="absolute left-10 text-[7rem] font-bold text-dark-glow"
      >
        {padded}
      </motion.div>

      <motion.div style={{ y: ySmooth, opacity }} className="absolute left-52">
        <h2 className="text-4xl font-bold tracking-wide text-dark-glow ">
          {project.title}
        </h2>
        <p className="mt-4 text-xl font-semibold text-dark-glow">
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
