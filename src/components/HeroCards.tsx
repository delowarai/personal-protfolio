import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profile from "../assets/profile.jpeg";
import { Badge } from "./ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { MapPin, Sparkles } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Current role */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="rounded-full bg-primary/20 p-2">
            <Sparkles className="text-primary w-5 h-5" />
          </div>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Junior Software Engineer</CardTitle>
            <CardDescription>HyperTAG Solutions Ltd.</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Building Belancer.com - Bangladesh's first freelancing platform.
        </CardContent>
      </Card>

      {/* Profile */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Avatar className="absolute -top-12 w-24 h-24">
            <AvatarImage
              src={profile}
              alt="Mohammad Delowar Hossain"
              className="object-cover"
            />
            <AvatarFallback className="text-xl font-bold bg-primary/20">
              MD
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-center">
            Mohammad Delowar Hossain
          </CardTitle>
          <CardDescription className="font-normal text-primary flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Dhaka, Bangladesh
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            AI/ML engineer building LLM agents, RAG pipelines, and full-stack
            products.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/delowarai"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://linkedin.com/in/delowarai"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <LinkedInLogoIcon className="w-5 h-5" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Core skills */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Core Skills
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              AI/ML
            </Badge>
          </CardTitle>

          <CardDescription>
            The stack I reach for most often.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2">
          {["Python", "LangChain", "FastAPI", "PyTorch", "RAG", "React"].map(
            (skill) => (
              <Badge
                key={skill}
                variant="outline"
              >
                {skill}
              </Badge>
            )
          )}
        </CardContent>
      </Card>

      {/* Focus area */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>AI Agents & RAG</CardTitle>
            <CardDescription className="text-md mt-2">
              Multi-agent systems, retrieval pipelines, and LLM-powered tools
              - from prototype to FastAPI-backed product.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
