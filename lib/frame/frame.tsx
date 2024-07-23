import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./frame.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  ratio?: [numerator: number, denominator: number];
  className?: string;
  children?: React.ReactNode;
};

export const Frame = polyRef<"div", Props>(
  ({ as: As = "div", ratio, className, children, ...props }, ref) => {
    const styleVariants = {
      "--n": ratio && ratio[0],
      "--d": ratio && ratio[1],
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.frame, className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
