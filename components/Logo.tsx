import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({
  long = false,
  className,
}: {
  long?: boolean;
  className?: string;
}) => {
  return (
    <span className={cn("text-2xl font-black sm:text-3xl", className)}>
      <span className="bg-gradient-to-tr from-purple-700 to-pink-700 bg-clip-text text-transparent">
        G
      </span>
      {long ? "reatware" : null}
    </span>
  );
};

export default Logo;
