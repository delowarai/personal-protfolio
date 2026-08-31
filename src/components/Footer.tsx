export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full md:col-span-1">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            Delowar<span className="text-primary">.</span>
          </a>
          <p className="text-muted-foreground mt-2 text-sm">
            AI/ML Engineer · Dhaka, Bangladesh
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Navigate</h3>
          <a
            href="#about"
            className="opacity-60 hover:opacity-100"
          >
            About
          </a>
          <a
            href="#skills"
            className="opacity-60 hover:opacity-100"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="opacity-60 hover:opacity-100"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="opacity-60 hover:opacity-100"
          >
            Experience
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Connect</h3>
          <a
            rel="noreferrer noopener"
            href="https://github.com/delowarai"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            Github
          </a>
          <a
            rel="noreferrer noopener"
            href="https://linkedin.com/in/delowarai"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            LinkedIn
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.facebook.com/lowar.de.98"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            Facebook
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.instagram.com/iam.delowar.hossain/"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            Instagram
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <a
            href="mailto:delowar.ai.engineer@gmail.com"
            className="opacity-60 hover:opacity-100"
          >
            delowar.ai.engineer@gmail.com
          </a>
          <span className="opacity-60">+880 1830 377470</span>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2026{" "}
          <span className="text-primary">Mohammad Delowar Hossain</span>. All
          rights reserved.
        </h3>
      </section>
    </footer>
  );
};
