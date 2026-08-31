import { buttonVariants } from "./ui/button";
import { Mail, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Cta = () => {
  return (
    <section
      id="contact"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Let's Build
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Something Together
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Open to AI/ML engineering roles, freelance projects, and
            internships. Reach out - I'd love to hear about what you're
            building.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2 lg:justify-self-end flex flex-col md:flex-row md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="mailto:delowar.ai.engineer@gmail.com"
            className={`w-full md:w-auto ${buttonVariants({})}`}
          >
            <Mail className="mr-2 w-5 h-5" />
            Email Me
          </a>
          <a
            rel="noreferrer noopener"
            href="https://linkedin.com/in/delowarai"
            target="_blank"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <Linkedin className="mr-2 w-5 h-5" />
            LinkedIn
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/delowarai"
            target="_blank"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <GitHubLogoIcon className="mr-2 w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
