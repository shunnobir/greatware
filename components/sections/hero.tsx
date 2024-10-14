import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import { Button as DefaultButton } from "@/components/ui/button";
import Circle from "@/components/Circle";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative mx-auto flex max-w-[1220px] flex-col gap-4 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-start">
        <h1 className="flex-1 text-4xl leading-[1.6] text-slate-900 sm:text-[45px] sm:leading-[72px]">
          Great{" "}
          <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text font-extrabold text-transparent">
            softwares
          </span>{" "}
          are <br />
          built by{" "}
          <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text font-extrabold text-transparent">
            great teams
          </span>
        </h1>
        <p className="max-w-96 text-lg font-light leading-relaxed text-slate-700">
          Empowering businesses with elite development teams. From start to
          scale, we build custom software solutions tailored to your needs.
        </p>
        <div className="flex flex-row gap-4">
          <Button>Get Started</Button>
          <DefaultButton variant="ghost" className="gap-1">
            Learn more <ArrowRight size={16} />
          </DefaultButton>
        </div>
      </div>
      <Image
        src="/images/Hero.png"
        width={550}
        height={360}
        alt="Hero Image"
        className="h-auto w-full flex-1"
      />
      <Circle className="absolute -bottom-9 left-[40%] -z-10" />
    </section>
  );
};

export default Hero;
