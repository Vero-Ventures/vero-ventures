import type { ReactNode } from "react";

export function HeroSection() {
  return (
    <section className="mt-20 p-8">
      <div className="mx-auto max-w-screen-xl">
        <HeroTitle>Innovative Software Solutions for Your Business</HeroTitle>
        <HeroDescription>
          We transform your ideas into powerful, scalable software. Let's build
          the future together.
        </HeroDescription>
      </div>
    </section>
  );
}

export function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-14 text-balance text-center text-4xl font-bold tracking-tighter md:text-7xl">
      {children}
    </h1>
  );
}

export function HeroDescription({ children }: { children: ReactNode }) {
  return (
    <p className="font-regular relative mx-auto mb-20 max-w-3xl text-center text-base text-muted-foreground">
      {children}
    </p>
  );
}
