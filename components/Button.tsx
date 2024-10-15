import React from "react";
import { Button as DefaultButton, ButtonProps } from "@/components/ui/button";

const Button = ({
  children,
  variant,
  href,
  ...props
}: ButtonProps & { href?: string }) => {
  return (
    <DefaultButton
      variant={variant || "outline"}
      {...props}
      asChild={href !== undefined}
    >
      {href ? (
        <a href={href}>
          <span className="bg-gradient-to-tr from-purple-700 to-pink-700 bg-clip-text text-transparent">
            {children}
          </span>
        </a>
      ) : (
        <span className="bg-gradient-to-tr from-purple-700 to-pink-700 bg-clip-text text-transparent">
          {children}
        </span>
      )}
    </DefaultButton>
  );
};

export default Button;
