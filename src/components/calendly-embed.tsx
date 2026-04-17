import Script from "next/script";

export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <>
      <div
        id="calendly"
        className="calendly-inline-widget m-0 h-[660px] p-0"
        data-url={url}
      ></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </>
  );
}
