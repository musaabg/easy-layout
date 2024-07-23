import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./imposter.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  margin?: string;
  fixed?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Imposter = polyRef<"div", Props>(
  (
    { as: As = "div", margin, fixed = false, className, children, ...props },
    ref
  ) => {
    const styleVariants = {
      "--imposter-margin": margin,
      "--imposter-position": fixed && "fixed",
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.imposter, className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
