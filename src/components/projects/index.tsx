import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { LinkPreview } from "../ui/link-preview";

export function OurWorkSection() {
  return (
    <section id="work">
      <div className="mx-auto mt-10 p-8">
        <h2 className="text-center text-4xl font-bold">Our Work</h2>
        <p className="my-4 text-center text-xl">
          Amazing web / mobile applications that we&apos;ve built recently.
        </p>
        <div className="mt-10 space-y-20 rounded-lg bg-muted py-20">
          <ProjectCard>
            <ProjectImage
              src="/projects/dynamic-needs-analysis.png"
              alt="Dynamic Needs Analysis Web App"
            />
            <ProjectContent>
              <ProjectTitle>
                <LinkPreview url="https://www.dynamicneedsanalysis.com/">
                  Dynamic Needs Analysis
                </LinkPreview>
              </ProjectTitle>
              <ProjectDescription>
                Comprehensive tool designed to optimize life insurance solutions
                for your clients
              </ProjectDescription>
              <div className="flex justify-center">
                <ProjectLinkButton href="https://www.dynamicneedsanalysis.com/" />
              </div>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src="/projects/clasibot.png" alt="Clasibot Web App" />
            <ProjectContent>
              <ProjectTitle>
                <LinkPreview url="https://www.clasibot.com//">
                  Clasibot
                </LinkPreview>
              </ProjectTitle>
              <ProjectDescription>
                AI-powered transaction classification tool designed to simplify
                bookkeeping
              </ProjectDescription>
              <div className="flex justify-center">
                <ProjectLinkButton href="https://www.clasibot.com/" />
              </div>
            </ProjectContent>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ children }: { children: ReactNode }) {
  return <article className="mx-auto max-w-7xl px-4">{children}</article>;
}

function ProjectContent({ children }: { children: ReactNode }) {
  return <div className="mt-10 space-y-4 pl-10">{children}</div>;
}

function ProjectTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-center text-4xl font-bold">{children}</h3>;
}
function ProjectDescription({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto max-w-4xl text-balance text-center text-xl leading-relaxed">
      {children}
    </p>
  );
}

function ProjectLinkButton({ href }: { href: string }) {
  return (
    <Button className="rounded-full" size="lg" asChild>
      <a href={href} target="_blank">
        Live Preview
      </a>
    </Button>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}
