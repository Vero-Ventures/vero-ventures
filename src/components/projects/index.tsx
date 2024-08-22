import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { LinkPreview } from "../ui/link-preview";

export function OurWorkSection() {
  return (
    <section id="work" className="border-y">
      <div className="mx-auto mt-10 p-8">
        <h2 className="text-center text-4xl font-bold">🚀 Our Work</h2>
        <p className="my-4 text-center text-muted-foreground">
          A look at some of the amazing web / mobile applications that
          we&apos;ve built recently.
        </p>
        <div className="flex flex-col gap-20 py-20">
          <ProjectCard>
            <ProjectImage
              src="/projects/dynamic-needs-analysis.png"
              alt="Dynamic Needs Analysis Web App"
            />
            <ProjectContent>
              <ProjectTitle>
                <LinkPreview url="https://www.dynamicneedsanalysis.com/">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text font-bold text-transparent">
                    Dynamic Needs Analysis
                  </span>
                </LinkPreview>
              </ProjectTitle>
              <ProjectDescription>
                Comprehensive tool designed to optimize life insurance solutions
                for your clients
              </ProjectDescription>
              <ProjectLinkButton href="https://www.dynamicneedsanalysis.com/" />
            </ProjectContent>
          </ProjectCard>
          <ProjectCard>
            <ProjectContent>
              <ProjectTitle>
                <LinkPreview url="https://www.clasibot.com//">
                  <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text font-bold text-transparent">
                    Clasibot
                  </span>
                </LinkPreview>
              </ProjectTitle>
              <ProjectDescription>
                AI-powered transaction classification tool designed to simplify
                bookkeeping
              </ProjectDescription>
              <ProjectLinkButton href="https://www.clasibot.com/" />
            </ProjectContent>
            <ProjectImage src="/projects/clasibot.png" alt="Clasibot Web App" />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ children }: { children: ReactNode }) {
  return (
    <article className="flex flex-col justify-evenly gap-6 px-4 md:flex-row">
      {children}
    </article>
  );
}

function ProjectContent({ children }: { children: ReactNode }) {
  return <div className="mt-10 space-y-4">{children}</div>;
}

function ProjectTitle({ children }: { children: ReactNode }) {
  return <h3 className="max-w-xs text-xl font-semibold">{children}</h3>;
}
function ProjectDescription({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-balance text-4xl font-bold leading-relaxed">
      {children}
    </p>
  );
}

function ProjectLinkButton({ href }: { href: string }) {
  return (
    <Button asChild>
      <a href={href} target="_blank">
        Live Preview
      </a>
    </Button>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <img src={src} alt={alt} className="w-full max-w-screen-lg" />
    </div>
  );
}
