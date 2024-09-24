import CalendlyEmbed from "../../../components/calendly-embed";

export function ContactUsSection() {
  return (
    <section className="bg-primary px-8 py-28 text-primary-foreground">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Let&apos;s Talk About Your Project
        </h2>
        <p className="mt-2 text-lg">
          Get in touch with us for any inquiries or project discussions.
        </p>
      </div>
      <CalendlyEmbed url="https://calendly.com/veroventures/30min" />
    </section>
  );
}
