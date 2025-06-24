"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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

  const delayUnit = 1 / 3;

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
          style={{
            opacity: profileTitleOpacity,
            y: profileTitleY,
          }}
          className="absolute left-1/2 text-white text-3xl tracking-widest -translate-x-1/2 mt-12"
        >
          PROFILE
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            <h1 className="text-3xl font-semibold">박형석</h1>
            <h2 className="text-xl text-sky-400">Frontend Developer</h2>
            <p className="text-white text-base leading-relaxed max-w-xl">
              아트와 코드의 경계를 넘나드는{" "}
              <strong className="text-white font-extrabold">
                크리에이티브 개발자
              </strong>
              입니다. 탄탄한 기술 기반과 예술적 감각을 결합해 사용자에게 특별한
              경험을 선사합니다.
            </p>
            <p className="text-white text-base leading-relaxed max-w-xl">
              React, TypeScript, Next.js 생태계에서{" "}
              <strong className="text-white font-extrabold">
                사용자 중심의 인터페이스
              </strong>
              를 구현하는 데 전문성을 갖추고 있으며, 제 그림 실력은 UI/UX에 대한
              이해를 한층 더 깊게 합니다.
            </p>
            <p className="text-white text-base leading-relaxed max-w-xl">
              활발하고 선한 성격으로 새로운 환경에 빠르게 적응하며, 사용자의
              니즈를 이해하고 공감하는 개발자가 되기 위해 노력합니다.
            </p>
            <div className="flex gap-6 text-white">
              <div className="pt-2 text-sm  flex items-center">
                <FaGithub className="size-8" />
                <div className="flex flex-col ml-2">
                  <span className="">Github</span>
                  <span>cogh.dev@gmail.com</span>
                </div>
              </div>
              <div className="pt-2 text-sm  flex items-center">
                <FaLocationDot className="size-8" />
                <div className="flex flex-col ml-2">
                  <span className="">Location</span>
                  <span>cogh.dev@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {[
            {
              key: 1,
              title: "Q. 프론트엔드를 선택한 이유는?",
              text: `그림과 디자인을 좋아하던 저는, 시각적인 결과물로 사용자 경험을 개선하는 프론트엔드 개발에 매력을 느꼈습니다.\n단순히 기능을 구현하는 것을 넘어, 창의성을 발휘해 타인의 만족도를 높일 수 있다는 점이 저의 성향과 잘 맞았고,\n그 과정에서 성취감과 보람을 느낄 수 있다는 것에 마음이 끌렸습니다.`,
            },
            {
              key: 2,
              title: "Q. 감각을 살리는 방법은?",
              text: `관찰력과 창의성은 오랫동안 그림을 그려온 경험에서 비롯된 저의 강점입니다.\n다양한 사이트와 레퍼런스를 참고하며 공통적으로 사용되는 패턴과 요소를 분석했고,\n그것들을 제 방식으로 재해석하며 저만의 UI 감각을 발전시켜 왔습니다.`,
            },
            {
              key: 3,
              title: "Q. 성장을 위한 노력은 어떤 것들이 있나요?",
              text: `일상 속 불편함을 해결할 수 있는 웹 서비스를 직접 기획하고 구현해보며, 실전에서 필요한 기술을 익혔습니다.\n모르는 개념은 반복적으로 검색하고 정리하며, 스스로 응용할 수 있을 만큼 충분히 이해하려고 노력해왔습니다.\n또한 온라인 강의와 실무 중심의 커리큘럼을 수강하며 기초를 탄탄히 다졌고,\n스터디 활동을 통해 다양한 개발 방식과 협업 경험을 쌓으며 꾸준히 성장해 나가고 있습니다.`,
            },
          ].map((item, i) => {
            const start = 0.55 + i * delayUnit * 0.2;
            const end = start + delayUnit * 0.2;
            const cardOpacity = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );
            const cardY = useTransform(scrollYProgress, [start, end], [40, 0]);
            const cardScale = useTransform(
              scrollYProgress,
              [start, end],
              [0.9, 1]
            );
            return (
              <motion.div
                key={item.key}
                style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
                className="space-y-4 bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="whitespace-pre-line text-base leading-relaxed text-white/90">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
