import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./center.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  max?: string;
  andText?: boolean;
  gutters?: string;
  intrinsic?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Center = polyRef<"div", Props>(
  (
    {
      as: As = "div",
      max,
      andText = false,
      gutters,
      intrinsic = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styleVariants = {
      "--center-max": max,
      "--center-text-align": andText && "center",
      "--center-gutters": gutters,
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.center, intrinsic && styles.intrinsic, className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
