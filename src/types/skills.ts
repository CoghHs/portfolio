import { ReactNode } from "react";

export type SkillIcon = {
  icon: ReactNode;
  label: string;
};

export type SkillCategoryData = {
  title: string;
  description: string;
  icons: SkillIcon[];
  side: "left" | "right";
};
