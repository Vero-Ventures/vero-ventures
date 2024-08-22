import {
  PencilRulerIcon,
  SquareTerminalIcon,
  LightbulbIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { CardSpotlight } from "../ui/card-spotlight";

export function OurServicesSection() {
  return (
    <section id="services" className="pb-28 pt-8">
      <div className="mx-auto max-w-screen-2xl space-y-20">
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="text-center text-4xl font-bold">Our Services</h2>
          <p className="my-4 text-center text-muted-foreground">
            We offer custom software development, web and mobile application
            creation, and technology consulting to help businesses innovate,
            grow, and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 px-8 md:grid-cols-2 lg:grid-cols-3">
          <CardSpotlight
            className="flex max-w-lg flex-col gap-4 border border-slate-200 bg-background p-8 tracking-wide"
            color="#A0DEFF"
          >
            <PencilRulerIcon className="mb-3" width={36} height={36} />
            <ServiceHeader>Custom Software Development</ServiceHeader>
            <ServiceDescription>
              Tailor-made software solutions designed to meet your
              business&apos;s unique needs. We deliver scalable,
              high-performance software that aligns with your goals and drives
              growth.
            </ServiceDescription>
          </CardSpotlight>

          <CardSpotlight
            className="flex max-w-lg flex-col gap-4 border border-slate-200 bg-background p-8 tracking-wide"
            color="#A0DEFF"
          >
            <SquareTerminalIcon className="mb-3" width={36} height={36} />
            <ServiceHeader>
              Web and Mobile Application Development
            </ServiceHeader>
            <ServiceDescription>
              End-to-end development of responsive, user-friendly web and mobile
              applications. We focus on delivering seamless digital experiences
              that enhance user engagement and satisfaction.
            </ServiceDescription>
          </CardSpotlight>
          <CardSpotlight
            className="flex max-w-lg flex-col gap-4 border border-slate-200 bg-background p-8 tracking-wide"
            color="#A0DEFF"
          >
            <LightbulbIcon className="mb-3" width={36} height={36} />
            <ServiceHeader>Technology Consulting and Strategy</ServiceHeader>
            <ServiceDescription>
              Expert guidance on digital transformation, technology adoption,
              and aligning your IT strategy with business goals. We help you
              make informed decisions that optimize efficiency and innovation.
            </ServiceDescription>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
}

function ServiceHeader({ children }: { children: ReactNode }) {
  return <h2 className="font-semibold">{children}</h2>;
}
function ServiceDescription({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground">{children}</p>;
}
