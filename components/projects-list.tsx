import { ProjectCard } from "./project-card";

type projectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  sourceCode: string;
  liveSite: string;
};

const projects: projectType[] = [
  {
    id: 1,
    title: "VS Search",
    description:
      "I created a small website that incorporates advanced concepts like debouncing, caching, API aborting, and pagination. Through this project, I gained valuable experience in designing efficient and user-friendly web applications that optimize performance and data management.",
    image:
      "https://github.com/ShivajiKS/mimic_google_search_features/blob/main/assets/home-page.png?raw=true",
    sourceCode: "https://github.com/ShivajiKS/mimic_google_search_features",
    liveSite: "https://mimic-google-search-features.vercel.app/",
  },
  {
    id: 2,
    title: "VS Search",
    description:
      "I created a small website that incorporates advanced concepts like debouncing, caching, API aborting, and pagination. Through this project, I gained valuable experience in designing efficient and user-friendly web applications that optimize performance and data management.",
    image:
      "https://github.com/ShivajiKS/mimic_google_search_features/blob/main/assets/home-page.png?raw=true",
    sourceCode: "https://github.com/ShivajiKS/mimic_google_search_features",
    liveSite: "https://mimic-google-search-features.vercel.app/",
  },
  {
    id: 3,
    title: "VS Search",
    description:
      "I created a small website that incorporates advanced concepts like debouncing, caching, API aborting, and pagination. Through this project, I gained valuable experience in designing efficient and user-friendly web applications that optimize performance and data management.",
    image:
      "https://github.com/ShivajiKS/mimic_google_search_features/blob/main/assets/home-page.png?raw=true",
    sourceCode: "https://github.com/ShivajiKS/mimic_google_search_features",
    liveSite: "https://mimic-google-search-features.vercel.app/",
  },
] as const;

export const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {projects.map((item) => (
        <ProjectCard {...item} key={item.id} />
      ))}
    </div>
  );
};
