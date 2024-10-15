import React from "react";
import SectionTitle from "@/components/SectionTitle";
import {
  Award,
  Bug,
  Handshake,
  LucideProps,
  SearchCode,
  Shield,
  UserRoundCheck,
} from "lucide-react";
import Circle from "@/components/Circle";

type ApproachType = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const DevelopmentApproach = () => {
  const approaches: ApproachType[] = [
    {
      title: "User-Centered Design",
      description:
        "We prioritize creating software that is intuitive and meets users' needs. Every design decision is made with the end-user in mind, ensuring the best user experience.",
      Icon: UserRoundCheck,
    },
    {
      title: "Collaborative Development Process",
      description:
        "We foster a shared understanding across teams. Designers, developers, and stakeholders work together throughout the development process to create cohesive solutions.",
      Icon: Handshake,
    },
    {
      title: "Experienced Team, Proven Results",
      description:
        "Our team brings years of industry experience, ensuring your project benefits from the best practices and innovative solutions proven to succeed.",
      Icon: Award,
    },
    {
      title: "Security & Intellectual Property Protection",
      description:
        "We take security seriously, ensuring your intellectual property and sensitive data are protected at all stages of development.",
      Icon: Shield,
    },
    {
      title: "Rigorous Code Reviews",
      description:
        "We conduct thorough code reviews to ensure that your software is robust, maintainable, and follows industry standards. This minimizes bugs and increases efficiency.",
      Icon: SearchCode,
    },
    {
      title: "Comprehensive Testing & Quality Assurance",
      description:
        "Our testing process ensures that every feature is thoroughly vetted, from functionality to performance, so you receive a high-quality, stable product.",
      Icon: Bug,
    },
  ];
  return (
    <section className="relative flex flex-col gap-4 bg-slate-50 px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-10">
        <SectionTitle>
          <h1 className="text-center text-4xl leading-relaxed">
            Our design and <br />
            <strong>Development Approach</strong>
          </h1>
        </SectionTitle>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {approaches.map((approach) => (
            <ApproachCard approach={approach} key={approach.title} />
          ))}
        </div>
      </div>
      <Circle className="absolute -bottom-8 left-[60%] z-10" />
    </section>
  );
};

const ApproachCard = ({ approach }: { approach: ApproachType }) => {
  return (
    <div className="flex h-full flex-row gap-6 rounded-md bg-white p-8 shadow-md">
      <div className="flex flex-row items-start gap-6">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-solid border-slate-300 bg-white p-2">
          <approach.Icon
            strokeWidth={1.5}
            className="h-5 w-5 text-purple-700"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="bg-gradient-to-tr from-purple-700 to-pink-700 bg-clip-text text-lg leading-[24px] text-transparent">
          {approach.title}
        </h4>
        <p className="leading-relaxed text-slate-600">{approach.description}</p>
      </div>
    </div>
  );
};

export default DevelopmentApproach;
