import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface SkillGroupProps {
  title: string;
  description: string;
  icon: JSX.Element;
  skills: string[];
}

const skillGroups: SkillGroupProps[] = [
  {
    title: "AI / ML & LLMs",
    description:
      "Building agents, RAG pipelines, and models that actually ship.",
    icon: <ChartIcon />,
    skills: [
      "LangChain",
      "CrewAI",
      "OpenAI API",
      "RAG",
      "Multi-Agent Systems",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "REST APIs and services that connect AI to real applications.",
    icon: <WalletIcon />,
    skills: ["FastAPI", "Flask", "REST API", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Data & Languages",
    description: "The core languages and tooling I build everything on.",
    icon: <MagnifierIcon />,
    skills: [
      "Python",
      "JavaScript",
      "C",
      "TypeScript",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        My{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Skills
        </span>
      </h2>

      <p className="text-muted-foreground text-xl text-center mt-4 mb-8 max-w-2xl mx-auto">
        A full-stack foundation focused on AI agents, RAG, and LLM-powered
        products.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map(({ icon, title, description, skills }) => (
          <Card key={title}>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                  {icon}
                </div>
                <CardTitle>{title}</CardTitle>
              </div>
              <CardDescription className="text-md pt-2">
                {description}
              </CardDescription>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
