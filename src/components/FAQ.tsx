import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What kind of work are you looking for?",
    answer:
      "I'm focused on AI/ML engineering - LLM applications, AI agents, and RAG pipelines - while staying comfortable across full-stack development.",
    value: "item-1",
  },
  {
    question: "Are you open to freelance or contract projects?",
    answer:
      "Yes. I'm open to freelance and contract work involving AI agents, RAG systems, computer vision, or full-stack web apps built with React and FastAPI.",
    value: "item-2",
  },
  {
    question: "What's your current tech stack?",
    answer:
      "Python, LangChain, CrewAI, and the OpenAI API for AI work; React, TypeScript, and FastAPI for full-stack development; PyTorch, TensorFlow, and Scikit-learn for ML.",
    value: "item-3",
  },
  {
    question: "Where are you based, and do you work remotely?",
    answer:
      "I'm based in Mirpur-1, Dhaka, Bangladesh, and I'm comfortable working remotely with international teams.",
    value: "item-4",
  },
  {
    question: "How can I reach you?",
    answer:
      "Email is the fastest way to reach me - see the Contact section below, or connect with me on LinkedIn or GitHub.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Get in touch
        </a>
      </h3>
    </section>
  );
};
