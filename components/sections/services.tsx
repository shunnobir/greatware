import React from "react";
import SectionTitle from "@/components/SectionTitle";
import {
  Cloud,
  Code,
  Component,
  TabletSmartphone,
  UsersRound,
} from "lucide-react";
import ServiceCard from "../ServiceCard";
import Circle from "@/components/Circle";

const Services = () => {
  const services = [
    {
      Icon: (props: React.SVGAttributes<HTMLOrSVGElement>) => (
        <Code {...props} />
      ),
      title: "Custom Software Development ",
      description:
        "We specialize in creating software tailored to your business needs, whether it's a mobile app, web platform, or enterprise solution. From ideation to deployment, our expert developers build software that is secure, scalable, and user-friendly.",
    },
    {
      Icon: (props: React.SVGAttributes<HTMLOrSVGElement>) => (
        <UsersRound {...props} />
      ),
      title: "Dedicated Development Teams",
      description:
        "Greatware provides dedicated development teams, carefully selected from a global talent pool. These teams work exclusively on your project, offering full transparency and collaboration while being managed by our team for optimal results.",
    },
    {
      Icon: (props: React.SVGAttributes<HTMLOrSVGElement>) => (
        <TabletSmartphone {...props} />
      ),
      title: "Mobile App Development",
      description:
        "We design and develop mobile applications for iOS and Android, focusing on creating engaging and functional apps. Our mobile development process includes UX/UI design, API integration, and continuous support for app updates and maintenance.",
    },
    {
      Icon: (props: React.SVGAttributes<HTMLOrSVGElement>) => (
        <Cloud {...props} />
      ),
      title: "Cloud Solutions & DevOps Services",
      description:
        "We help businesses leverage the power of cloud computing by offering cloud architecture, migration, and DevOps services. Whether you need to scale your infrastructure or automate your workflows, Greatware ensures that your cloud environment is optimized for performance and cost-efficiency.",
    },
    {
      Icon: (props: React.SVGAttributes<HTMLOrSVGElement>) => (
        <Component {...props} />
      ),
      title: "Product Design & UI/UX Development",
      description:
        "Our design team specializes in crafting intuitive and visually compelling user interfaces that enhance user experience. We create wireframes, prototypes, and final designs with a focus on usability and customer engagement.",
    },
  ];
  return (
    <section
      id="services"
      className="relative flex flex-col gap-4 bg-slate-50 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto flex max-w-[1220px] flex-col gap-5">
        <SectionTitle>
          <h1 className="text-4xl font-bold">Services</h1>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <Circle className="absolute -bottom-9 left-[20%] -z-10" />
      </div>
    </section>
  );
};

export default Services;
