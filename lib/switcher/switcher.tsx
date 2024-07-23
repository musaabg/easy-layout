import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./switcher.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  threshold?: string;
  space?: string;
  limit?: number;
  className?: string;
  children?: React.ReactNode;
};

export const Switcher = polyRef<"div", Props>(
  (
    { as: As = "div", threshold, space, limit, className, children, ...props },
    ref
  ) => {
    const styleVariants = {
      "--switcher-threshold": threshold,
      "--switcher-space": space,
      "--switcher-limit": limit,
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.switcher, className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
