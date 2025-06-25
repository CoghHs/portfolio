import { MotionValue, useTransform } from "framer-motion";

export function useProfileCardAnimations(
  scrollYProgress: MotionValue<number>,
  count: number
) {
  const baseStart = 0.55;
  const range = 0.07;

  const animations = [];

  for (let i = 0; i < count; i++) {
    const start = baseStart + range * i;
    const end = start + range;

    animations.push({
      opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
      y: useTransform(scrollYProgress, [start, end], [40, 0]),
      scale: useTransform(scrollYProgress, [start, end], [0.9, 1]),
    });
  }

  return animations;
}
