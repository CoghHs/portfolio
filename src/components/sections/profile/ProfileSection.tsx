// app/components/sections/profile/ProfileSection.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { profileInfo, profileQuestions } from "./profileData";

export default function ProfileSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const profileTitleY = useTransform(scrollYProgress, [0.45, 0.5], [-40, 0]);
  const profileTitleOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.5],
    [0, 1]
  );
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.55], [40, 0]);

  const profileCardOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const profileCardY = useTransform(scrollYProgress, [0.5, 0.65], [40, 0]);
  const profileCardScale = useTransform(
    scrollYProgress,
    [0.5, 0.65],
    [0.95, 1]
  );

  const cardAnimations = profileQuestions.map((_, index) => {
    const baseStart = 0.55;
    const range = 0.07;
    const start = baseStart + range * index;
    const end = start + range;

    return {
      opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
      y: useTransform(scrollYProgress, [start, end], [40, 0]),
      scale: useTransform(scrollYProgress, [start, end], [0.9, 1]),
    };
  });

  return (
    <section ref={containerRef} className="relative min-h-[350vh]">
      <div className="relative h-[150vh]">
        <div className="sticky top-0 h-screen z-10 flex items-start justify-center">
          <motion.div
            style={{ height: lineHeight }}
            className="w-[0.8px] rounded-full bg-white mt-[10vh]"
          />
        </div>
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="w-full max-w-6xl px-6 mx-auto mt-[10vh]"
      >
        <motion.div
          id="profile"
          style={{ opacity: profileTitleOpacity, y: profileTitleY }}
          className="absolute left-1/2 text-white text-3xl tracking-widest -translate-x-1/2 mt-12"
        >
          PROFILE
        </motion.div>

        <motion.div
          style={{
            opacity: profileCardOpacity,
            y: profileCardY,
            scale: profileCardScale,
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 pb-12 pt-30"
        >
          <div className="w-[180px] h-[240px] md:w-[260px] md:h-[360px] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/profileimg.png"
              alt="profile"
              fill
              className="object-cover rotate-y-180"
            />
          </div>
          <div className="text-white text-center md:text-left space-y-2">
            <h1 className="text-3xl font-semibold">{profileInfo.name}</h1>
            <h2 className="text-xl text-sky-400">{profileInfo.role}</h2>
            {profileInfo.bio.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-white text-base leading-relaxed max-w-xl"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex gap-6 text-white">
              <div className="pt-2 text-sm flex items-center">
                <FaGithub className="size-8" />
                <div className="flex flex-col ml-2">
                  <span>Github</span>
                  <span>{profileInfo.contact.github}</span>
                </div>
              </div>
              <div className="pt-2 text-sm flex items-center">
                <FaLocationDot className="size-8" />
                <div className="flex flex-col ml-2">
                  <span>Location</span>
                  <span>{profileInfo.contact.location}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {profileQuestions.map(({ title, text }, index) => (
            <motion.div
              key={index}
              style={{
                opacity: cardAnimations[index].opacity,
                y: cardAnimations[index].y,
                scale: cardAnimations[index].scale,
              }}
              className="space-y-4 bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="whitespace-pre-line text-base leading-relaxed text-white/90">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
