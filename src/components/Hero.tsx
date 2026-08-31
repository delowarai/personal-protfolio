import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Hi, I'm{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Delowar
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mt-4 text-muted-foreground">
            Aspiring AI/ML Engineer
          </p>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          I build LLM-powered AI agents, RAG pipelines, and full-stack web
          apps - currently a Junior Software Engineer at HyperTAG Solutions,
          based in Dhaka, Bangladesh.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="#projects"
          >
            <Button className="w-full md:w-1/3">View Projects</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="https://github.com/delowarai"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Profile
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
