"use client";

import { skillsData } from "@/components/sections/skills/skillsData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SkillCategory from "./SkillsCategory";

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      ref={sectionRef}
      className="text-white min-h-[150vh] p-10"
      id="skills"
    >
      <motion.div
        className="text-center mb-24"
        style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
      >
        <h2 className="text-4xl tracking-widest text-white drop-shadow-md">
          SKILLS
        </h2>
        <p className="mt-4 text-lg text-sky-400 drop-shadow-sm">
          제가 다뤄본 기술들입니다
        </p>
      </motion.div>

      <div className="space-y-40 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <SkillCategory
            key={index}
            title={skill.title}
            description={skill.description}
            icons={skill.icons}
            side={skill.side}
          />
        ))}
      </div>

      <div className="pb-[40vh]"></div>
    </section>
  );
}
