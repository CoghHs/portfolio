export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  detailImages?: string[];
  technologies: string[];
  github: string;
  link?: string;
  features: string[];
  purpose?: string;
  improvements: string[];
};
