import { FadeUp } from "./fade-up";
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
    id: 0,
    title: "Svella",
    description:
      "Designed and developed an e-commerce website with a focus on user experience and security.Optimized site performance by implementing CSR, SSG, and SSR, reducing initial load times by 40% and improving user retention by 10% due to faster content delivery.",
    image: "ecommerce.png",
    github: "https://github.com/ShivajiVS/ecommerce",
    href: "https://ecommerce-vsy.vercel.app/",
    techStack: ["ReactJs", "Nextjs", "Tailwindcss"],
  },
  {
    id: 1,
    title: "The News Thub",
    description:
      "NewsHub is a modern web application that delivers a rich news experience, optimized for performance with advanced rendering patterns and seamless API integration. Users can enjoy quick access to the latest news with robust search functionality and a streamlined interface.",
    image: "news-website.png",
    github: "https://github.com/ShivajiVS/NextJs_13_News_Website",
    href: "https://next-js-13-news-hub-website-v1.vercel.app/",
    techStack: ["Typescript", "Nextjs", "Tailwindcss"],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "The website you're browsing now. Showcases my journey as a frontend developer.It highlights my expertise in building responsive,user-friendly applications using tools like React and Next.js.",
    image: "portfolio.png",
    github: "https://github.com/ShivajiVS/shivaji-s_portfolio",
    href: "https://shivaji.vercel.app/",
    techStack: ["Typescript", "Nextjs", "Tailwindcss"],
  },
  {
    id: 3,
    title: "SearchJet",
    description:
      "SearchJet is a high-performance search engine that leverages Google APIs to deliver reliable, comprehensive results. Advanced features such as debouncing, caching, and pagination ensure fast and seamless search experiences.",
    image: "search-engine.png",
    github: "https://github.com/ShivajiVS/mimic_google_search_features",
    href: "https://mimic-google-search-features.vercel.app/",
    techStack: ["Typescript", "Nextjs", "Tailwindcss"],
  },
  {
    id: 4,
    title: "Authentication System",
    description:
      "Our system includes the ability to sign up, login, reset passwords, update email address, change password, logout, and even delete accounts. Additionally, users can add, update, and remove addresses, making it easy to keep their contact information up to date.",
    image: "authentication-system.png",
    github: "https://github.com/ShivajiVS/react-native-login-system",
    techStack: ["React native", "Firebase", "Tailwindcss"],
  },
  {
    id: 5,
    title: "Food Ordering Application",
    description:
      "Developed a cross-platform food ordering mobile application using React Native, improving user engagement by 25% and increasing accessibility for both iOS and Android users. Utilized Redux Toolkit for optimized data ow and Firebase for real-time storage and user authentication",
    image: "food-ordering.png",
    github: "https://github.com/ShivajiVS/Food_App",
    techStack: ["React native", "Firebase", "Redux"],
  },
] as const;

export const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full mx-auto">
      {projects.map((item) => (
        <FadeUp key={item.id} duration={0.8}>
          <ProjectCard {...item} />
        </FadeUp>
      ))}
    </div>
  );
};
