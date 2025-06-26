"use client";

import { useIntroStore } from "@/store/introStore";
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const introDone = useIntroStore((s) => s.introDone);

  const navItems = [
    { name: "PROFILE", href: "#profile" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONNECT", href: "#connect" },
  ];

  const controls = useAnimation();
  const { scrollY } = useScroll();

  let lastY = 0;

  useEffect(() => {
    if (introDone) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [introDone, controls]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!introDone) return;
    if (latest > lastY && latest > 100) {
      controls.start({ y: -200 });
    } else {
      controls.start({ y: 0 });
    }
    lastY = latest;
  });

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 z-30 font-light"
    >
      <motion.div>
        <Link
          href="#top"
          onClick={(e) => handleScroll(e, "top")}
          className="text-lg sm:text-xl tracking-wide sm:tracking-widest text-white cursor-pointer"
        >
          COGH
        </Link>
      </motion.div>

      <div className="flex gap-4 sm:gap-8">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            <Link
              href={item.href}
              className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors"
              onClick={(e) => handleScroll(e, item.href.substring(1))}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </motion.nav>
  );
}
