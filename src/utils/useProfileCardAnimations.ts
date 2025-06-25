import { useTransform, MotionValue } from "framer-motion";

export function useProfileCardTransforms(scrollYProgress: MotionValue<number>) {
  const base = 0.55;
  const range = 0.07;

  const card1 = {
    opacity: useTransform(scrollYProgress, [base, base + range], [0, 1]),
    y: useTransform(scrollYProgress, [base, base + range], [40, 0]),
    scale: useTransform(scrollYProgress, [base, base + range], [0.9, 1]),
  };

  const card2 = {
    opacity: useTransform(
      scrollYProgress,
      [base + range, base + range * 2],
      [0, 1]
    ),
    y: useTransform(scrollYProgress, [base + range, base + range * 2], [40, 0]),
    scale: useTransform(
      scrollYProgress,
      [base + range, base + range * 2],
      [0.9, 1]
    ),
  };

  const card3 = {
    opacity: useTransform(
      scrollYProgress,
      [base + range * 2, base + range * 3],
      [0, 1]
    ),
    y: useTransform(
      scrollYProgress,
      [base + range * 2, base + range * 3],
      [40, 0]
    ),
    scale: useTransform(
      scrollYProgress,
      [base + range * 2, base + range * 3],
      [0.9, 1]
    ),
  };

  return [card1, card2, card3];
}
