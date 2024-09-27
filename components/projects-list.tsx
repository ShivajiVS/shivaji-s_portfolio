import { ProjectCard } from "./project-card";

type projectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  href?: string;
  techStack: string[];
};

const projects: projectType[] = [
  {
    id: 1,
    title: "The News Thub",
    description:
      "NewsHub is a modern web application that delivers a rich news experience, optimized for performance with advanced rendering patterns and seamless API integration. Users can enjoy quick access to the latest news with robust search functionality and a streamlined interface.",
    image: "news-website.png",
    github: "https://github.com/ShivajiVS/NextJs_13_News_Website",
    href: "https://next-js-13-news-hub-website-v1.vercel.app/",
    techStack: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "The website you're browsing now. Showcases my journey as a frontend developer.It highlights my expertise in building responsive,user-friendly applications using tools like React and Next.js.",
    image: "portfolio.png",
    github: "https://github.com/ShivajiVS/mimic_google_search_features",
    href: "https://shivaji.vercel.app/",
    techStack: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    id: 3,
    title: "SearchJet",
    description:
      "SearchJet is a high-performance search engine that leverages Google APIs to deliver reliable, comprehensive results. Advanced features such as debouncing, caching, and pagination ensure fast and seamless search experiences.",
    image: "search-engine.png",
    github: "https://github.com/ShivajiVS/mimic_google_search_features",
    href: "https://mimic-google-search-features.vercel.app/",
    techStack: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    id: 4,
    title: "Authentication System",
    description:
      "Our system includes the ability to sign up, login, reset passwords, update email address, change password, logout, and even delete accounts. Additionally, users can add, update, and remove addresses, making it easy to keep their contact information up to date.",
    image: "authentication-system.png",
    github: "https://github.com/ShivajiVS/NextJs_13_News_Website",
    techStack: ["React native", "Firebase", "tailwindcss"],
  },
] as const;

export const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full mx-auto">
      {projects.map((item) => (
        <ProjectCard {...item} key={item.id} />
      ))}
    </div>
  );
};
