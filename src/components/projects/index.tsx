"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  num: string;
  title: string;
  description: string;
  outcome: string;
  year: string;
  type: string;
  stack: string;
  role: string;
  image: string;
  url: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "Dynamic Needs Analysis",
    description:
      "A web-based financial planning tool that helps insurance advisors model complex life insurance scenarios for their clients — replacing manual spreadsheets with a guided, real-time analysis engine.",
    outcome: "",
    year: "2024",
    type: "Web App",
    stack: "Next.js · TypeScript · Postgres",
    role: "Design + Full-Stack Build",
    image: "/projects/dynamic-needs-analysis.png",
    url: "https://www.dynamicneedsanalysis.com/",
    imageAlt: "Dynamic Needs Analysis web application screenshot",
  },
  {
    num: "02",
    title: "Clasibot",
    description:
      "An AI-powered bookkeeping assistant that automatically classifies bank transactions for small business owners — cutting hours of manual categorization down to a quick review.",
    outcome: "",
    year: "2024",
    type: "Web App · AI",
    stack: "Next.js · TypeScript · OpenAI",
    role: "Design + Full-Stack Build",
    image: "/projects/clasibot.png",
    url: "https://www.clasibot.com/",
    imageAlt: "Clasibot AI bookkeeping web app screenshot",
  },
];

export function OurWorkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="px-8 pb-24 pt-0" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Selected work
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Things we&apos;ve shipped.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            Real products, real production code, real outcomes.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-0 divide-y divide-hairline border-t border-hairline">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.num}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:gap-16"
    >
      {index % 2 === 0 ? (
        <>
          <ProjectImage project={project} />
          <ProjectMeta project={project} />
        </>
      ) : (
        <>
          <ProjectMeta project={project} />
          <ProjectImage project={project} />
        </>
      )}
    </motion.article>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <img
      src={project.image}
      alt={project.imageAlt}
      className="block w-full transition-transform duration-700 hover:scale-[1.02]"
    />
  );
}

function ProjectMeta({ project }: { project: Project }) {
  const isNDA = project.url === "";
  return (
    <div className="flex flex-col justify-center">
      {/* Index */}
      <span className="font-mono text-[10px] text-ink-muted">
        {project.num}
      </span>

      {/* Title */}
      <h3 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
        {project.title}
      </h3>

      {/* Meta chips */}
      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-hairline pt-5">
        {[
          { label: "Year", value: project.year },
          { label: "Type", value: project.type },
          { label: "Stack", value: project.stack },
          { label: "Role", value: project.role },
        ].map((m) => (
          <div key={m.label}>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
              {m.label}
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-ink">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-6 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      {/* Outcome */}
      {project.outcome && (
        <div className="mt-5 flex items-start gap-2.5 border-l-2 border-vermilion pl-4">
          <p className="text-sm font-medium text-ink">{project.outcome}</p>
        </div>
      )}

      {/* Link */}
      {!isNDA && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-xs font-medium text-ink underline underline-offset-4 transition-colors hover:text-vermilion"
        >
          Live site ↗
        </a>
      )}
    </div>
  );
}
