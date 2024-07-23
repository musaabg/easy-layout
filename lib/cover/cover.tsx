import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./cover.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  space?: string;
  minHeight?: string;
  noPad?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Cover = polyRef<"div", Props>(
  (
    {
      as: As = "div",
      space,
      minHeight,
      noPad = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styleVariants = {
      "--cover-space": space,
      "--cover-min-height": minHeight,
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.cover, noPad && styles.noPad, className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
