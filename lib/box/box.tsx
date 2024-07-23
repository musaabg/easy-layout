import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./box.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  layout?: "container" | "grid" | "section" | "article";
  padding?: string;
  borderWidth?: string;
  colors?: [textColor?: string, backgroundColor?: string, borderColor?: string];
  invert?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Box = polyRef<"div", Props>(
  (
    {
      as: As = "div",
      layout,
      padding,
      borderWidth,
      colors,
      invert = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styleVariants = {
      "--box-padding": padding,
      "--box-border-width": borderWidth,
      "--box-color": colors && colors[0],
      "--box-background-color": colors && colors[1],
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(
          layout && styles[layout],
          styles.box,
          invert && styles.invert,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
