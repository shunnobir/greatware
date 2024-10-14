import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({
  children,
  align = "center",
}: {
  children?: React.ReactNode;
  align?: string;
}) => {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center",
        align === "left" && "items-start",
        align === "right" && "items-end",
      )}
    >
      <div className="h-1.5 w-20 bg-gradient-to-tr from-purple-700 to-pink-700" />
      {children}
    </header>
  );
};

export default SectionTitle;
