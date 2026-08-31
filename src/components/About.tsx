import { Statistics } from "./Statistics";

import profile from "../assets/profile.jpeg";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={profile}
            alt="Mohammad Delowar Hossain"
            className="w-[280px] shrink-0 mx-auto md:mx-0 aspect-square object-cover rounded-lg border"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                I'm Mohammad Delowar Hossain, an aspiring AI/ML engineer from
                Mirpur-1, Dhaka. I completed my BSc in Computer Science &
                Engineering at Daffodil International University (2026), and
                I'm currently working as a Junior Software Engineer at
                HyperTAG Solutions, where I build React/TypeScript interfaces
                and FastAPI/PostgreSQL backends for Belancer.com - while
                exploring LLM integration on the side.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                My focus is on large language models, AI agents, RAG
                pipelines, and multi-agent systems using LangChain, CrewAI,
                and the OpenAI API - paired with solid full-stack fundamentals
                so I can ship what I build.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
