import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./cluster.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  justify?: string;
  align?: string;
  space?: string;
  recursive?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Cluster = polyRef<"div", Props>(
  (
    {
      as: As = "div",
      justify,
      align,
      space,
      recursive,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styleVariants = {
      "--cluster-justify": justify,
      "--cluster-align": align,
      "--cluster-space": space,
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.cluster, recursive && styles.recursive, className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
