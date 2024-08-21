import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vero Ventures",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-primary">
      <body className={cn(inter.className, "min-h-dvh bg-white antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="">
      <div className="flex items-center justify-center p-8">
        ©{new Date().getFullYear()} Vero Ventures
      </div>
    </footer>
  );
}
