import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface ExperienceProps {
  role: string;
  org: string;
  period: string;
  description: string;
  current?: boolean;
}

const experienceList: ExperienceProps[] = [
  {
    role: "Junior Software Engineer",
    org: "HyperTAG Solutions Ltd.",
    period: "Jul 2026 - Present",
    description:
      "Contributing to Belancer.com, Bangladesh's first freelancing platform. Building UI with React 19, TypeScript, Tailwind CSS, Vite and React Router DOM v7, plus REST APIs with Python, FastAPI and PostgreSQL - while exploring LLM/LangChain/RAG integration.",
    current: true,
  },
  {
    role: "AI Engineer Intern",
    org: "Tynoc Tech (Remote)",
    period: "Jul 2026 — Sep 2026",
    description:
      "Two-month virtual internship focused on AI engineering, working on project-based deliverables with 10-20 day turnarounds.",
  },
  {
    role: "AI Engineering Bootcamp for Programmers",
    org: "Ostad",
    period: "Nov 2025 - Aug 2026",
    description:
      "Hands-on bootcamp covering LLMs, AI agents, and applied engineering practices for building production-ready AI systems.",
  },
  {
    role: "Executive Member, Research Wing",
    org: "DIU Computer Programming Club (CPC)",
    period: "2023 - 2024",
    description:
      "Contributed to the research wing of the university's programming club during my BSc at Daffodil International University.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Work{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Experience
        </span>
      </h2>

      <p className="text-muted-foreground text-xl text-center mt-4 mb-12 max-w-2xl mx-auto">
        A quick timeline of where I've worked and grown.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {experienceList.map(
          ({ role, org, period, description, current }: ExperienceProps) => (
            <Card key={`${role}-${org}`}>
              <CardHeader className="flex flex-row items-start justify-between gap-4 flex-wrap">
                <div>
                  <CardTitle className="flex items-center gap-2 flex-wrap">
                    {role}
                    {current && (
                      <Badge className="text-xs">Current</Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-primary text-md mt-1">
                    {org}
                  </CardDescription>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {period}
                </span>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
