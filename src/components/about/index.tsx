import Image from "next/image";

export function AboutUsSection() {
  return (
    <section
      id="aboutUs"
      className="flex flex-col gap-4 bg-muted py-20 xl:flex-row xl:items-center xl:py-0"
    >
      <div className="max-w-screen-xl px-8 xl:mx-auto">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="my-4 w-full max-w-xl text-xl leading-relaxed">
          At Vero Ventures, we believe in the power of technology to transform
          businesses. Founded with a mission to deliver exceptional digital
          solutions, we are passionate about helping companies leverage
          technology for growth. Our team of experts is committed to creating
          innovative, high-quality software that drives results.
        </p>
      </div>
      <Image
        width={600}
        height={600}
        quality={100}
        className="w-full shadow-inner xl:max-w-screen-lg"
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of people working together in an office"
      />
    </section>
  );
}
