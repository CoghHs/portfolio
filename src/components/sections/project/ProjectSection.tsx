"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/components/sections/project/projectData";
import ProjectIntroSection from "./ProjectIntro";
import ProjectHorizontalScroll from "./ProjectHorizontalScroll";

export default function ProjectSection() {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <main id="projects">
      <motion.section
        ref={introRef}
        style={{ scale, opacity, y }}
        className="h-screen flex flex-col items-center justify-center text-white text-center space-y-4"
      >
        <h2 className="text-4xl tracking-widest drop-shadow-md">PROJECTS</h2>
      </motion.section>

      {projectsData.map((project, index) => (
        <section key={project.id} className="relative h-[500vh]">
          <div className="sticky -top-80 h-screen z-10">
            <ProjectIntroSection index={index} project={project} />
          </div>

          <ProjectHorizontalScroll
            project={{
              title: project.title,
              detailImages: project.detailImages!,
            }}
          />
        </section>
      ))}

      <div className="pb-[50vh]" />
    </main>
  );
}
