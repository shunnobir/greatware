import React from "react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import NavbarSheet from "@/components/NavbarSheet";
import { links } from "@/lib/links";

const Navbar = () => {
  return (
    <nav className="relative mx-auto flex max-w-[1220px] flex-row flex-wrap items-center justify-between px-6 py-4 sm:px-10">
      <div className="5 flex flex-row items-center gap-2">
        <NavbarSheet links={links} />
        <Logo long />
      </div>

      <ul className="hidden flex-row items-center gap-8 lg:flex">
        {links.map((link) => (
          <li key={link.label} className="text-slate-600">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <Button href="#contact-us">Contact us</Button>
    </nav>
  );
};

export default Navbar;
