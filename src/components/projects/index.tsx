import type { ReactNode } from "react";
import { Button } from "../ui/button";

export function OurWorkSection() {
  return (
    <section id="work" className="border-y">
      <div className="mx-auto mt-10 max-w-screen-xl p-8">
        <h2 className="text-center text-4xl font-bold">🚀 Our Work</h2>
        <p className="my-4 text-center text-muted-foreground">
          A look at some of the amazing web / mobile applications that we've
          built recently.
        </p>
        <div className="flex flex-col gap-20 py-20">
          <ProjectCard>
            <ProjectContent>
              <ProjectTitle>Dynamic Needs Analysis</ProjectTitle>
              <ProjectDescription>
                <p className="leading-relaxed">
                  The Ultimate Insurance Calculator for Professionals
                </p>
              </ProjectDescription>
              <ProjectLinkButton href="https://www.dynamicneedsanalysis.com/" />
            </ProjectContent>
            <ProjectGallery>
              <ProjectImage
                src="https://placehold.co/365x218"
                alt="placeholder"
              />
              <ProjectImage
                src="https://placehold.co/365x218"
                alt="placeholder"
              />
            </ProjectGallery>
          </ProjectCard>
          <ProjectCard>
            <ProjectContent>
              <ProjectTitle>Accubot</ProjectTitle>
              <ProjectDescription>
                <p className="leading-relaxed">
                  The Ultimate Insurance Calculator for Professionals
                </p>
              </ProjectDescription>
              <ProjectLinkButton href="https://www.dynamicneedsanalysis.com/" />
            </ProjectContent>
            <ProjectGallery>
              <ProjectImage
                src="https://placehold.co/365x218"
                alt="placeholder"
              />
              <ProjectImage
                src="https://placehold.co/365x218"
                alt="placeholder"
              />
            </ProjectGallery>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ children }: { children: ReactNode }) {
  return (
    <article className="flex flex-col gap-6 md:flex-row">{children}</article>
  );
}

function ProjectContent({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

function ProjectTitle({ children }: { children: ReactNode }) {
  return <h3 className="max-w-xs text-2xl font-bold">{children}</h3>;
}
function ProjectDescription({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-xs text-sm text-muted-foreground">{children}</div>
  );
}

function ProjectLinkButton({ href }: { href: string }) {
  return (
    <Button asChild>
      <a href={href}>Live Preview</a>
    </Button>
  );
}

function ProjectGallery({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4 md:flex-row">{children}</div>;
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} width={365} height={218} className="rounded-lg" />
  );
}
