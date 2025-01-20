import React from "react";
import { ComponentPropsWithoutRef, ElementType } from "react";
import * as s from "./Typography.module.scss";
import { clsx } from "clsx";

type VariantType = "h1" | "h2" | "h3" | "pReg" | "pBold";

type TypographyProps<T extends ElementType = "p"> = {
  variant?: VariantType;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">(props: TypographyProps<T>) => {
  const { variant = "p", className, ...restProps } = props;
  const Component = variant && getComponent(variant as VariantType);

  return <Component className={clsx(s.span, s[variant], className)} {...restProps} />;
};

function getComponent(variant: VariantType) {
  switch (variant) {
    case "h1": {
      return "h1";
    }
    case "h2": {
      return "h2";
    }
    case "h3": {
      return "h3";
    }
    case "pReg":
    case "pBold": {
      return "p";
    }
    default: {
      return "span";
    }
  }
}
