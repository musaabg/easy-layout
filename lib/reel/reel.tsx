import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./reel.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  itemWidth?: string;
  space?: string;
  height?: string;
  noBar?: boolean;
  colors?: [trackColor: string, thumbColor: string];
  smoothScrollSupport?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Reel = polyRef<"div", Props>(
  (
    {
      as: As = "div",
      itemWidth,
      space,
      height,
      noBar = false,
      colors,
      smoothScrollSupport = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styleVariants = {
      "--reel-width": itemWidth,
      "--reel-space": space,
      "--reel-height": height,
      "--reel-track": !noBar && colors && colors[0],
      "--reel-thumb": !noBar && colors && colors[1],
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(
          styles.reel,
          !noBar && styles.bar,
          smoothScrollSupport && "data-lenis-prevent",
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
