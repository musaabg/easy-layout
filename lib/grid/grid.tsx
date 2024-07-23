import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./grid.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  min?: string;
  space?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Grid = polyRef<"div", Props>(
  ({ as: As = "div", min, space, className, children, ...props }, ref) => {
    const styleVariants = {
      "--grid-min": min,
      "--grid-space": space,
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.grid, className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
