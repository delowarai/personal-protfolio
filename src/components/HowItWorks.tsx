import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface StrengthProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const strengths: StrengthProps[] = [
  {
    icon: <MedalIcon />,
    title: "AI Agents & RAG",
    description:
      "Designing multi-agent systems and retrieval pipelines with LangChain, CrewAI, and the OpenAI API.",
  },
  {
    icon: <MapIcon />,
    title: "Full-Stack Delivery",
    description:
      "Shipping React/TypeScript UIs backed by FastAPI and PostgreSQL - from idea to deployed product.",
  },
  {
    icon: <PlaneIcon />,
    title: "Computer Vision",
    description:
      "Training and deploying vision models like YOLOv8 for real-time, real-world detection tasks.",
  },
  {
    icon: <GiftIcon />,
    title: "Fast Learner",
    description:
      "Constantly upskilling through bootcamps and certifications to stay current with the AI ecosystem.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        What I{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Bring{" "}
        </span>
        to the Table
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        The strengths I focus on as I grow into an AI/ML engineering role.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {strengths.map(({ icon, title, description }: StrengthProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
