import { Card, CardContent } from "./ui/card";

export const ProjectCard = ({
  title,
  description,
  image,
  liveSite,
  sourceCode,
}: {
  title: string;
  description: string;
  image: string;
  sourceCode: string;
  liveSite: string;
}) => {
  console.log(title, description, image, liveSite, sourceCode);
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col space-y-3 items-center md:flex-row md:space-x-3 md:items-start p-2">
          <div className="flex-1">
            <img src={image} alt={image} className="object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold tracking-tight ">{title}</h1>
            <h3 className="tracking-tight line-clamp-4 text-justify hyphens-auto">
              {description}
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
