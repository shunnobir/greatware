import React from "react";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import Image from "next/image";
import Circle from "@/components/Circle";

const Hire = () => {
  return (
    <section
      id="hire"
      className="relative flex flex-col gap-4 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto flex max-w-[1220px] flex-col gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <SectionTitle align="left">
            <h1 className="text-4xl leading-normal">
              Looking to build a world-class development team?
              <br />
              <strong>Hire experts from Our Team</strong>
            </h1>
          </SectionTitle>
          <p className="text-lg leading-relaxed text-slate-600">
            From startups to global enterprises, companies across industries
            partner with Greatware for reliable and scalable software solutions.
          </p>

          <Button className="w-fit px-10">Hire now</Button>
        </div>
        <Image
          src="/images/wbs2.png"
          width={400}
          height={270}
          className="h-auto w-full flex-1"
          alt="People working"
        />
        <Circle className="absolute bottom-10 right-[20%] -z-10" />
      </div>
    </section>
  );
};

export default Hire;
