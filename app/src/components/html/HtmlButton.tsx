import React from "react";

type HtmlButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
//* Deyirik ki, "button" bizim verdiklerimizden elave olaraq, "button"-in oz "onClick" ve ya diger
//* kimi attributlarini gotursun, hemichinin de deyirik ki, "children" yalniz "string" tipinde
//* olmalidir.

const HtmlButton = ({ variant, children, ...rest }: HtmlButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default HtmlButton;
