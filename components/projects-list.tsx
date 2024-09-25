import { ProjectCard } from "./project-card";

type projectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  sourceCode: string;
  href: string;
  techStack: string[];
};

const projects: projectType[] = [
  {
    id: 1,
    title: "The News Thub",
    description:
      "NewsHub is a modern web application that delivers a rich news experience, optimized for performance with advanced rendering patterns and seamless API integration. Users can enjoy quick access to the latest news with robust search functionality and a streamlined interface.",
    image: "news-website.png",
    sourceCode: "https://github.com/ShivajiKS/NextJs_13_News_Website",
    href: "https://next-js-13-news-hub-website-v1.vercel.app/",
    techStack: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "The website you're browsing now!",
    image: "portfolio.png",
    sourceCode: "https://github.com/ShivajiKS/mimic_google_search_features",
    href: "https://shivaji.vercel.app/",
    techStack: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    id: 3,
    title: "SearchJet",
    description:
      "SearchJet is a high-performance search engine that leverages Google APIs to deliver reliable, comprehensive results. Advanced features such as debouncing, caching, and pagination ensure fast and seamless search experiences.",
    image: "search-engine.png",
    sourceCode: "https://github.com/ShivajiKS/mimic_google_search_features",
    href: "https://mimic-google-search-features.vercel.app/",
    techStack: ["typescript", "nextjs", "tailwindcss"],
  },
] as const;

export const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full mx-auto">
      {projects.map((item) => (
        <ProjectCard {...item} key={item.id} />
      ))}
    </div>
  );
};
