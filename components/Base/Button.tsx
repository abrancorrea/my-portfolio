import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import { getColorClasses } from "./utils";
import { colorTypesEnum } from "./types";

export type ButtonProps = ButtonHTMLAttributes<any> &
  AnchorHTMLAttributes<any> & {
    link?: string;
    className?: string;
    color?: colorTypesEnum;
  };

export const Button = ({
  link,
  color,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const isLink = !!link;
  const classes = getColorClasses(color);

  if (isLink)
    return (
      <a href={link} className={`${classes} ${className || ""}`} {...props}>
        {children}
      </a>
    );
  return (
    <button className={`${classes} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};
