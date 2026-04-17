import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Logo } from "@/components/logo";
import { ThemeProvider } from "@/components/theme-provider";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vero Ventures — MVP Studio",
  description:
    "We design and ship production-grade MVPs for founders and companies. From first sketch to live app in 1–2 weeks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        instrumentSerif.variable,
        geist.variable,
        jetbrainsMono.variable,
        "scroll-smooth"
      )}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper-elevated">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo markSize={28} />
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:yaniv.talmor@veroventures.com"
              className="font-mono text-xs text-ink-muted transition-colors hover:text-ink"
            >
              yaniv.talmor@veroventures.com
            </a>
            <a
              href="https://linkedin.com/company/vero-ventures"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-muted transition-colors hover:text-ink"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-hairline pt-6">
          <p className="font-mono text-xs text-ink-muted">
            © {new Date().getFullYear()} VERO VENTURES
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-azure" />
            <span className="font-mono text-xs text-ink-muted">
              NOW BOOKING
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
