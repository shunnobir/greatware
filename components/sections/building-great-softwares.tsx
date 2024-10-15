import React from "react";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Circle from "@/components/Circle";

type BGSSubctionType = {
  img: string;
  title: string;
  description: string;
  highlight: string;
  testimonial: {
    text: string;
    author: string;
    authorPosition: string;
    authorImage: string;
  };
};

const BuildingGreatSoftwares = () => {
  const subsections: BGSSubctionType[] = [
    {
      img: "/images/wbs1.png",
      title: "Foster Collaboration & Innovation",
      description:
        "Successful software development is about more than just technical skills—it's about fostering a collaborative environment where innovation thrives. At Greatware, we build teams that don’t just deliver code but bring fresh ideas and problem-solving approaches to your projects.",
      highlight:
        "Our collaboration model ensures seamless communication and shared ownership across the development process.",
      testimonial: {
        text: "Greatware's team helped us think outside the box and achieve breakthroughs in both design and functionality.",
        author: "Sarah Jameson",
        authorPosition: "CTO",
        authorImage: "/images/wbs11.jpg",
      },
    },
    {
      img: "/images/wbs2.png",
      title: "Streamlined Development Processes",
      description:
        "Efficient software development requires structured processes. We implement streamlined workflows that reduce bottlenecks, optimize task management, and ensure that your project is delivered on time without compromising quality.",
      highlight:
        "Our Agile methodology enables regular updates, feedback loops, and quick adaptability to changing requirements.",
      testimonial: {
        text: "Their process allowed us to quickly iterate on new features while keeping our core project goals intact.",
        author: "Jonathan Doe",
        authorPosition: "Product Manager",
        authorImage: "/images/wbs22.jpg",
      },
    },
    {
      img: "/images/wbs3.png",
      title: "Focused on Long-Term Support & Maintenance",
      description:
        "Building great software doesn't end with deployment. Our teams provide long-term support, ensuring your system remains updated, secure, and scalable as your business grows. From minor tweaks to major upgrades, we’ve got you covered.",
      highlight:
        "Greatware's support team proactively monitors performance and handles maintenance to keep your software running smoothly.",
      testimonial: {
        text: "Their ongoing support has been invaluable in ensuring that our platform stays up to date and secure.",
        author: "David Thompson",
        authorPosition: "Operations Director",
        authorImage: "/images/wbs33.jpg",
      },
    },
  ];
  return (
    <section className="relative flex flex-col gap-4 px-6 py-16 sm:px-10">
      <Circle className="absolute -top-40 left-[60%] -z-10" />
      <div className="mx-auto flex max-w-[1220px] flex-col gap-10">
        <SectionTitle>
          <h1 className="text-center text-4xl leading-relaxed">
            Ways of building <br />
            <strong>Great Software</strong>
          </h1>
        </SectionTitle>

        <div className="flex flex-col gap-16">
          {subsections.map((subsection, index) => (
            <BGSSubctions
              subsection={subsection}
              index={index + 1}
              key={subsection.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BGSSubctions = ({
  subsection,
  index,
}: {
  subsection: BGSSubctionType;
  index: number;
}) => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:even:flex-row-reverse">
      <div className="flex flex-1 basis-1/2 flex-col gap-6">
        <h4 className="text-2xl font-bold">
          <span className="bg-gradient-to-tr from-purple-700 to-pink-700 bg-clip-text text-transparent">
            #{index}
          </span>{" "}
          {subsection.title}
        </h4>
        <Image
          src={subsection.img}
          width={400}
          height={270}
          alt={subsection.img}
          className="h-auto w-full flex-1 shrink basis-1/2 lg:hidden"
        />
        <p className="text-lg leading-normal text-slate-600">
          {subsection.description}
        </p>
        <p className="text-lg leading-normal text-slate-600">
          {subsection.highlight}
        </p>
        <Quote quote={subsection.testimonial.text} />
        <div className="flex flex-row items-center gap-3">
          <Avatar>
            <AvatarFallback>
              {subsection.testimonial.author.slice(0, 2).toUpperCase()}
            </AvatarFallback>
            <AvatarImage
              src={subsection.testimonial.authorImage}
              className="object-cover"
            />
          </Avatar>
          <div className="flex flex-col">
            <h5>{subsection.testimonial.author}</h5>
            <h6 className="text-xs text-slate-500">
              {subsection.testimonial.authorPosition}
            </h6>
          </div>
        </div>
      </div>

      <Image
        src={subsection.img}
        width={450}
        height={370}
        alt={subsection.img}
        className="hidden h-auto w-full flex-1 shrink basis-1/2 lg:inline-block"
      />
    </div>
  );
};

const Quote = ({ quote }: { quote: string }) => {
  return (
    <div className="grid grid-cols-[32px_1fr] items-center">
      <div className="min-h-full w-1.5 bg-gradient-to-tr from-purple-700 to-pink-700" />
      <em>
        <blockquote className="inline-flex max-w-[400px] gap-1 bg-gradient-to-tr from-purple-700 to-pink-700 bg-clip-text text-transparent">
          <QuoteIcon
            size={16}
            strokeWidth={1.5}
            className="shrink-0 rotate-180 text-purple-700"
          />{" "}
          {quote}
        </blockquote>
      </em>
    </div>
  );
};

export default BuildingGreatSoftwares;
