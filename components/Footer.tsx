import React from "react";
import Logo from "@/components/Logo";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import X from "@/components/icons/X";
import Youtube from "@/components/icons/Youtube";
import Button from "@/components/Button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
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
    <footer className="flex flex-col gap-5 border-t border-solid border-slate-200 sm:px-10">
      <div className="mx-auto flex max-w-[1220px] flex-col px-6 py-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Logo long />
            <p className="mt-2 max-w-[300px] text-sm leading-relaxed text-slate-500">
              Empowering businesses with elite development teams. From start to
              scale, we build custom software solutions tailored to your needs.
            </p>
            <div className="flex flex-row gap-4">
              <a href="#">
                <Facebook className="h-6 w-6 rounded-full border border-solid border-white fill-slate-700 stroke-transparent" />
              </a>
              <a href="#">
                <Instagram className="h-6 w-6 border border-solid border-white fill-slate-700 stroke-transparent" />
              </a>
              <a href="#">
                <X className="h-6 w-6 border border-solid border-white fill-slate-700 stroke-transparent" />
              </a>
              <a href="#">
                <Youtube className="h-6 w-6 border border-solid border-white fill-slate-700 stroke-transparent" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 md:col-span-2">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold text-slate-600">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label} className="text-slate-500">
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div id="#contact-us" className="col-span-2 flex flex-col gap-3">
              <h4 className="text-lg font-semibold text-slate-600">
                Contact Us
              </h4>
              <ul>
                <li className="text-slate-500">
                  Email:{" "}
                  <em>
                    <a href="mailto:info@greatware.com" className="underline">
                      info@greatware.com
                    </a>
                  </em>
                </li>
                <li className="text-slate-500">Phone: +880 123 456 7891</li>
                <li className="text-slate-500">
                  Address: University of Chittagong, Chittagong-4331, Bangladesh
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:col-span-2 xl:col-span-1">
            <h4 className="text-lg font-semibold text-slate-600">
              Stay Updated
            </h4>
            <p className="max-w-[300px] text-sm text-slate-500">
              Subscribe to our newsletter for the latest news, updates, and
              offers.
            </p>
            <form
              action="#"
              method="post"
              className="flex flex-row gap-3 xl:flex-col"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 rounded-md border border-solid border-slate-200 bg-white px-4 py-2 outline-transparent placeholder:text-slate-400"
              />
              <Button type="submit" className="w-fit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Separator />

      <div className="flex items-center justify-center py-5">
        <p className="text-slate-500">
          &copy; 2024 Greatware. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
