import { Button } from "../ui/button";

export function ContactUsSection() {
  return (
    <section className="bg-primary p-8 py-20 text-primary-foreground">
      <div className="mx-auto max-w-xl">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mb-8 mt-2 text-lg">
          Get in touch with us for any inquiries or project discussions.
        </p>
        <Button variant="secondary">Book Appointment</Button>
      </div>
    </section>
  );
}
