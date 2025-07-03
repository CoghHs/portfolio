"use client";

import { Project } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ProjectDetailInfoSection from "./PorjectDetailInfo";

export default function ProjectDetailButton({
  project,
  isOpen,
  setIsOpen,
}: {
  project: Project & { index: number };
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const padded = String(project.index + 1).padStart(2, "0");

  return (
    <div className="absolute mt-18 sm:mt-12 right-12 z-50">
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="sm:w-16 sm:h-16 w-10 h-10 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
        >
          <FaPlus />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0.8, scale: 0, borderRadius: "50%" }}
              animate={{ opacity: 1, scale: 100, borderRadius: "50%" }}
              exit={{ opacity: 0.8, scale: 0, borderRadius: "50%" }}
              transition={{ duration: 1 }}
              className="fixed top-20 right-14 w-12 h-12 bg-white z-10"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-20 p-10 ml-4 overflow-y-auto text-black"
            >
              <div className="absolute left-6 z-30 text-black flex items-center mt-3">
                <h2 className="text-[4rem] sm:text-[7rem] font-bold text-black leading-none text-dark-glow">
                  {padded}
                </h2>
                <div className="ml-4 sm:ml-11">
                  <h2 className="text-lg sm:text-4xl font-bold tracking-wide text-dark-glow">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-xl text-gray-600 mt-0 sm:mt-4 text-dark-glow">
                    {project.description}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={() => setIsOpen(false)}
                className="fixed mt-0 sm:mt-10 top-8 right-12 sm:w-16 sm:h-16 w-10 h-10 rounded-full bg-black/50 text-white text-lg flex items-center justify-center z-50"
              >
                <ImCross />
              </motion.button>

              <div className="max-w-5xl mx-auto mt-40 space-y-14 text-black">
                {project.purpose && (
                  <section className="border-b border-gray-300 pb-4">
                    <h3 className="text-2xl font-semibold mb-4">작업 의도</h3>
                    <p className="text-lg text-gray-800 whitespace-pre-line leading-relaxed">
                      {project.purpose}
                    </p>
                  </section>
                )}

                <section className="border-b border-gray-300 pb-4">
                  <h3 className="text-2xl font-semibold mb-4">관련 링크</h3>
                  <div className="mt-6 flex flex-col space-y-2 ml-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 text-lg font-semibold hover:opacity-80 no-underline"
                      >
                        배포링크
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 text-lg font-semibold hover:opacity-80 no-underline"
                      >
                        깃허브
                      </a>
                    )}
                  </div>
                </section>

                <ProjectDetailInfoSection
                  title="기술 스택"
                  items={project.technologies}
                  type="tag"
                />
                <ProjectDetailInfoSection
                  title="주요 기능"
                  items={project.features}
                  type="decimal"
                />
                <ProjectDetailInfoSection
                  title="개선 사항"
                  items={project.improvements}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
