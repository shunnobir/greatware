import { cn } from "@/lib/utils";
import React from "react";

const Circle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        className,
        "h-16 w-16 rounded-full bg-gradient-to-tr from-purple-700 to-pink-700",
      )}
      {...props}
    />
  );
};

export default Circle;
