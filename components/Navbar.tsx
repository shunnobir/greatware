import React from "react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { Button as DefaultButton } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const links = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Showcase",
      href: "#showcase",
    },
    {
      label: "Blog",
      href: "#blog",
    },
    {
      label: "About us",
      href: "#about-us",
    },
    {
      label: "Hire",
      href: "#hire",
    },
  ];

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

      <Button>Contact Us</Button>
    </nav>
  );
};

const NavbarSheet = ({
  links,
}: {
  links: { label: string; href: string }[];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <DefaultButton variant="ghost" size="icon" className="lg:hidden">
          <Menu size={24} />
        </DefaultButton>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Quick Links</SheetTitle>
        </SheetHeader>

        <ul className="mt-10 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label} className="text-slate-600">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
