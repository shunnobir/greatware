import React from "react";

type ServiceCardProps = {
  Icon: (props: React.SVGAttributes<HTMLOrSVGElement>) => React.JSX.Element;
  title: string;
  description: string;
};

const ServiceCard = ({ Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-md bg-white p-8 shadow-md">
      <div className="flex flex-row items-start gap-6">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-solid border-slate-300 bg-white p-2">
          <Icon strokeWidth={1.5} className="h-5 w-5 text-purple-700" />
        </div>
        <h4 className="bg-gradient-to-tr from-purple-700 to-pink-700 bg-clip-text text-lg leading-[24px] text-transparent">
          {title}
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <p className="leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
