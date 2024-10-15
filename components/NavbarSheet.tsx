"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavbarSheet = ({
  links,
}: {
  links: { label: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const element = document.getElementById(
      href.slice(1),
    ); /* Get the id without the # */
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 350);
    }
  };

  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)} modal>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Quick Links</SheetTitle>
        </SheetHeader>

        <ul className="mt-10 flex flex-col gap-4">
          {links.map((link) => (
            <li
              key={link.label}
              className="text-slate-600"
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
