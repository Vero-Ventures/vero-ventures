import type { ReactNode } from "react";
import { ModeToggle } from "../../components/mode-toggle";

export default function Navbar() {
  return (
    <header className="drop-shadow-xl">
      <div className="mx-auto flex max-w-screen-xl flex-row items-center p-8 md:justify-between">
        <div className="font-bold">Vero Ventures</div>
        <nav className="hidden flex-1 flex-row items-center justify-center space-x-14 text-sm md:flex">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#aboutUs">About Us</NavLink>
        </nav>
        <div>
          <ModeToggle />
        </div>
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
