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
      "HTML과 CSS를 웹 표준에 맞게 작성하고, JavaScript/TypeScript의 핵심 문법과 타입 시스템을 학습하며 컴포넌트 기반 개발에 익숙해졌습니다.",
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
    description:
      "웹 접근성과 시멘틱 구조를 고려해 마크업하고, React 기반의 렌더링 최적화와 사용자 경험을 중심으로 UI를 설계했습니다.",
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
    description:
      "Prisma를 통해 테이블 구조를 직접 정의하고 관계형 모델 설계, 프론트에서 API를 연동하고 응답을 처리하는 전반적인 흐름도 직접 구현해보며, 프론트-백엔드 간 상호작용을 이해했습니다.",
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
      "Git을 통한 형상관리의 중요성을 이해하고, 브랜치 전략에 대한 이해도를 높였습니다. 프로젝트를 실제 서비스 환경에 배포하고, 데이터베이스를 안정적으로 운영해본 경험이 있습니다.",
    side: "right",
    icons: [
      { icon: <SiGithub />, label: "Github" },
      { icon: <SiVercel />, label: "Vercel" },
    ],
  },
];
