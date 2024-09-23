import Script from "next/script";

export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <>
      <div
        id="calendly"
        className="calendly-inline-widget mx-auto h-[350px] max-w-96"
        data-url={url}
      ></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </>
  );
}
