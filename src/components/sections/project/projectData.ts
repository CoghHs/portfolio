import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "PORTFOLIO",
    description:
      "스크롤 기반 인터랙션과 부드러운 애니메이션이 적용된 포트폴리오 웹사이트입니다.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
    image: "/images/portfolio1.png",
    detailImages: [
      "/images/portfolio1.png",
      "/images/portfolio2.png",
      "/images/portfolio3.png",
    ],
    features: [
      "스크롤 기반 프로필/프로젝트 소개 인터랙션",
      "프로젝트 모달 + 원형 확장 애니메이션 구현",
      "숫자 오르는 애니메이션과 섹션 진입 인식 처리",
      "Next.js App Router 기반 폴더 구조",
      "반응형 디자인",
    ],
    purpose:
      "단순히 정적인 소개를 넘어서, 인터랙티브한 방식으로 내 프로젝트와 사고방식을 전달하고자 했습니다. 각 프로젝트가 스크롤과 함께 흐름 속에서 자연스럽게 이어지며 보여지는 구조로 설계했습니다.",
    improvements: [
      "스크롤에 맞춰 요소 등장과 고정 위치 전환을 useScroll과 useTransform으로 구현",
      "Framer Motion의 layoutId를 활용해 원형 버튼에서 전체 화면으로 확장되는 애니메이션 구성",
      "IntersectionObserver와 상태 관리로 프로젝트 번호가 자연스럽게 오르는 로직 구현",
    ],
    github: "https://github.com/CoghHs/portfolio",
    link: "https://cogh-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "CROGH",
    description:
      "그림 연습에 최적화된 심플하고 직관적인 크로키 타이머 플랫폼입니다.",
    technologies: [
      "Next.js",
      "Typescript",
      "Node.js",
      "Prisma",
      "Framer Motion",
      "Unsplash API",
    ],
    image: "/images/crogh1.png",
    detailImages: [
      "/images/crogh1.png",
      "/images/crogh2.png",
      "/images/crogh3.png",
      "/images/crogh4.png",
      "/images/crogh5.png",
      "/images/crogh6.png",
      "/images/crogh7.png",
      "/images/crogh8.png",
    ],
    features: [
      "카테고리별 이미지 탐색 (포즈, 얼굴, 손 등)",
      "드래그 가능한 타이머 UI 및 종료 알림",
      "무한 이미지 페이지네이션",
      "게시물 업로드 및 좋아요, 즐겨찾기 기능",
      "회원가입, 로그인, 마이페이지 흐름",
    ],
    purpose:
      "크로키 연습에 필요한 고화질 이미지와 타이머를 한 화면에서 제공하여, 누구나 간편하게 그림 연습을 할 수 있는 플랫폼을 만들고자 했습니다. 타이머 UI는 자유롭게 위치 조정이 가능하며, 사용자 간 그림 공유도 지원합니다.",
    improvements: [
      "Unsplash 이미지 URL에 해상도 파라미터를 추가하여 이미지 품질 개선",
      "IntersectionObserver와 useInfiniteQuery를 활용해 무한 스크롤 UX 개선",
      "타이머 로직을 커스텀 훅으로 분리하여 즐겨찾기 페이지에서도 재사용 가능하게 개선",
      "formState.isSubmitting을 활용해 업로드 중복 클릭 방지 및 로딩 상태 표시 처리",
    ],
    github: "https://github.com/CoghHs/crogh",
    link: "https://crogh.vercel.app/",
  },
  {
    id: 3,
    title: "OGAM POINT",
    description:
      "요가 회원의 포인트 적립/차감/만료를 효율적으로 관리하는 어드민 웹 앱입니다.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/images/ogam1.png",
    detailImages: [
      "/images/ogam1.png",
      "/images/ogam2.png",
      "/images/ogam3.png",
      "/images/ogam4.png",
    ],
    features: [
      "회원 등록 및 수정 / 포인트 적립, 차감, 만료 관리",
      "포인트 만료 내역 시각화",
      "탭 UI를 통한 내역 필터링",
      "실시간 데이터 반영을 위한 React Query 적용",
      "반응형 UI 및 접근성 고려",
    ],
    purpose:
      "요가원의 적립금 관리 프로세스를 디지털화하여, 회원별 포인트 흐름을 실시간으로 확인하고 처리할 수 있는 효율적인 관리자용 플랫폼을 만들었습니다.",
    improvements: [
      "만료 포인트를 총 적립금에서 제외되도록 처리 로직 수정 및 회색 표시로 시각화",
      "React Query의 invalidateQueries를 활용해 포인트 내역 실시간 반영",
      "prisma migrate deploy 스크립트를 build 환경에 포함하여 마이그레이션 오류 해결",
    ],
    github: "https://github.com/CoghHs/Ogam-point",
    link: "https://ogam-point.vercel.app/",
  },
  {
    id: 4,
    title: "BOOK",
    description:
      "뉴욕타임즈 베스트셀러 목록을 탐색하고 Amazon 구매 링크로 연결되는 책 정보 웹앱입니다.",
    technologies: ["Next.js", "React", "CSS Modules", "Book API"],
    image: "/images/book.png",
    detailImages: [
      "/images/book1.png",
      "/images/book2.png",
      "/images/book3.png",
    ],
    features: [
      "카테고리별 베스트셀러 도서 탐색",
      "도서별 Amazon 구매 링크 연결",
      "간결한 리스트/디테일 페이지 구성",
      "반응형 레이아웃",
    ],
    purpose:
      "복잡한 UI 없이, 베스트셀러 도서를 간편하게 확인하고 구매까지 이어질 수 있는 단순한 구조의 웹사이트를 목표로 제작했습니다.",
    improvements: [
      "App Router를 활용해 카테고리별 페이지 구조를 명확히 분리",
      "간결한 UI 설계를 통해 사용자 탐색 흐름을 직관적으로 구성",
    ],
    github: "hhttps://github.com/CoghHs/next14-books",
    link: "https://next14-books-alpha.vercel.app/",
  },
];
