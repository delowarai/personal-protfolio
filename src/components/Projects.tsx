import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

const projects: ProjectProps[] = [
  {
    title: "Taka Detector",
    description:
      "Real-time Bangladeshi banknote detection with YOLOv8, served through FastAPI endpoints that return confidence scores and bounding-box data. Packaged with Docker for easy deployment.",
    tags: ["YOLOv8", "FastAPI", "Computer Vision", "Docker"],
  },
  {
    title: "BD Multi-Tool AI Agent",
    description:
      "An AI agent that ingests three Hugging Face datasets (hospitals, institutions, restaurants) into SQLite and answers questions using LangChain SQL tools, with a SerpAPI web-search fallback to cut down on hallucinated answers.",
    tags: ["LangChain", "SQLite", "SerpAPI", "AI Agents"],
  },
  {
    title: "IMDB Sentiment Analysis",
    description:
      "Benchmarked TF-IDF, Word2Vec, and BERT on 50,000 movie reviews for sentiment classification - BERT reached ~93% accuracy versus a ~88% TF-IDF baseline.",
    tags: ["BERT", "NLP", "Scikit-learn", "Sentiment Analysis"],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Featured{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Projects
        </span>
      </h2>

      <p className="text-muted-foreground text-xl md:text-center max-w-2xl mx-auto">
        A few things I've built while learning and applying AI/ML in
        practice.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, tags }: ProjectProps) => (
          <Card
            key={title}
            className="flex flex-col"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
              <CardDescription className="text-md">
                {description}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <a
                rel="noreferrer noopener"
                href="https://github.com/delowarai"
                target="_blank"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
              >
                <GitHubLogoIcon className="mr-2 w-4 h-4" />
                View on GitHub
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
