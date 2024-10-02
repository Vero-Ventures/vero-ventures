import { Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

export default function Navbar() {
  return (
    <header>
      <div className="mx-auto flex max-w-screen-xl flex-row items-center gap-4 p-8 md:justify-between">
        <div className="rounded-full bg-primary p-2 text-xl font-bold text-primary-foreground">
          <Lightbulb />
        </div>
        <div className="text-2xl font-bold">Vero Ventures</div>
        <nav className="hidden flex-1 flex-row items-center justify-center space-x-14 md:flex">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#aboutUs">About Us</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a href={href} className="cursor-pointer">
      {children}
    </a>
  );
}
