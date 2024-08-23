import BookAppointmentButton from "../book-appointment-button";

export function ContactUsSection() {
  return (
    <section className="bg-primary p-8 py-40 text-primary-foreground">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Let&apos;s Talk About Your Project
        </h2>
        <p className="mb-8 mt-2 text-lg">
          Get in touch with us for any inquiries or project discussions.
        </p>
        <BookAppointmentButton variant="secondary" />
      </div>
    </section>
  );
}
