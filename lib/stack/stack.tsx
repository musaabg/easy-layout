import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./stack.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  space?: string;
  recursive?: boolean;
  splitOnLast?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Stack = polyRef<"div", Props>(
  (
    {
      as: As = "div",
      space,
      recursive = false,
      splitOnLast = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styleVariants = {
      "--stack-space": space,
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(
          styles.stack,
          splitOnLast && styles.splitOnLast,
          recursive && styles.recursive,
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
