import type { ReactNode } from "react";

export function AboutUsSection() {
  return (
    <section id="aboutUs" className="border-y bg-secondary">
      <div className="mx-auto mt-20 max-w-screen-xl p-8">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="my-4 mb-20 max-w-xl leading-relaxed text-muted-foreground">
          At Vero Ventures, we believe in the power of technology to transform
          businesses. Founded with a mission to deliver exceptional digital
          solutions, we are passionate about helping companies leverage
          technology for growth. Our team of experts is committed to creating
          innovative, high-quality software that drives results.
        </p>
        <div id="team" className="py-10">
          <h2 className="text-4xl font-bold">Meet the Team</h2>
          <div className="grid gap-10 pt-20 md:grid-cols-3">
            <TeamCard>
              <TeamCardImage
                src="https://github.com/ynvtlmr.png"
                alt="placeholder"
              />
              <TeamMember name="Yaniv Talmor" position="CEO" />
            </TeamCard>
            <TeamCard>
              <TeamCardImage alt="placeholder" />
              <TeamMember name="Dev Dhillon" position="Marketing Specialist" />
            </TeamCard>
            <TeamCard>
              <TeamCardImage alt="placeholder" />
              <TeamMember name="Braden Rogers" position="Software Developer" />
            </TeamCard>
            <TeamCard>
              <TeamCardImage
                src="https://github.com/scottchen98.png"
                alt="placeholder"
              />
              <TeamMember name="Scott Chen" position="Software Developer" />
            </TeamCard>
            <TeamCard>
              <TeamCardImage
                src="https://media.licdn.com/dms/image/v2/D5603AQGxDovhPB4UZw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702798993128?e=1729728000&v=beta&t=DZSd1O0_AeMgLR4w-HiqSaA8d7bAZQvUgBm_I0MQa3s"
                alt="placeholder"
              />
              <TeamMember name="Michael Lei" position="Software Developer" />
            </TeamCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamCard({ children }: { children: ReactNode }) {
  return <article className="flex flex-col gap-4">{children}</article>;
}

export function TeamCardImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <img
      src={
        src ??
        "https://www.paintersplace.ca/cdn/shop/products/444A50_1024x.png?v=1608659013"
      }
      width={208}
      height={208}
      className="mx-auto h-52 w-52 rounded-full border object-cover"
      alt={alt}
    />
  );
}

export function TeamMember({
  name,
  position,
}: {
  name: string;
  position: string;
}) {
  return (
    <div className="space-y-4 text-center">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm leading-6 text-muted-foreground">{position}</p>
    </div>
  );
}
