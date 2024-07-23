import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./icon.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  space?: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Icon = polyRef<"svg", Props>(
  ({ as: As = "svg", space, label, className, children, ...props }, ref) => {
    const styleVariants = {
      "--icon-space": space,
    } as React.CSSProperties;

    return (
      <As
        alt={label}
        style={styleVariants}
        className={cn(styles["with-icon"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
