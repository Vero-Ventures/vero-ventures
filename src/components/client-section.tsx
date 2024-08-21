import Image from "next/image";

export function ClientSection() {
  return (
    <section className="mx-auto my-10 flex max-w-screen-xl flex-col items-center justify-center gap-4 p-8 md:flex-row">
      <p className="text-sm text-muted-foreground">
        Some of the amazing companies we have worked with
      </p>
      <div className="flex justify-evenly gap-4 grayscale">
        <Image
          src="https://www.financialtechtools.ca/wp-content/uploads/2021/09/Videre-300x100.png"
          width={200}
          height={50}
          alt="Videre"
        />
      </div>
    </section>
  );
}
