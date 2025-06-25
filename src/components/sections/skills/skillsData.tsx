import { SkillCategoryData } from "@/types/skills";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiFramer,
  SiReactquery,
  SiRecoil,
  SiStyledcomponents,
  SiAxios,
  SiVercel,
  SiGithub,
} from "react-icons/si";

export const skillsData: SkillCategoryData[] = [
  {
    title: "언어",
    description:
      "기본기 탄탄한 언어 실력을 바탕으로 빠르고 유연하게 개발합니다.",
    side: "left",
    icons: [
      { icon: <FaHtml5 />, label: "HTML5" },
      { icon: <FaCss3 />, label: "CSS3" },
      { icon: <FaJs />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
    ],
  },
  {
    title: "프론트엔드",
    description: "반응형, 접근성, 퍼포먼스를 고려한 UI를 설계합니다.",
    side: "right",
    icons: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
    ],
  },
  {
    title: "라이브러리",
    description:
      "React 생태계를 중심으로 다양한 라이브러리를 조합하여 생산성과 유지보수성을 높입니다.",
    side: "left",
    icons: [
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiFramer />, label: "Framer Motion" },
      { icon: <SiReactquery />, label: "React Query" },
      { icon: <SiRecoil />, label: "Recoil" },
      {
        icon: <span className="text-xs font-semibold">ZUSTAND</span>,
        label: "Zustand",
      },
      { icon: <SiStyledcomponents />, label: "Styled Components" },
      { icon: <SiAxios />, label: "Axios" },
    ],
  },
  {
    title: "백엔드 및 데이터베이스",
    description: "Prisma와 PostgreSQL을 통해 구조적인 데이터 관리를 합니다.",
    side: "left",
    icons: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiPrisma />, label: "Prisma" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      {
        icon: <span className="text-xs font-semibold">NEON</span>,
        label: "Neon",
      },
    ],
  },
  {
    title: "배포 및 협력도구",
    description:
      "프로젝트를 실제 서비스 환경에 배포하고, 데이터베이스를 안정적으로 운영합니다.",
    side: "right",
    icons: [
      { icon: <SiGithub />, label: "Github" },
      { icon: <SiVercel />, label: "Vercel" },
    ],
  },
];
