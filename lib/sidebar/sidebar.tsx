import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";

import { cn } from "../_classes";
import styles from "./sidebar.module.css";

const polyRef = forwardRef as PolyRefFunction;

type Props = {
  side?: "left" | "right";
  sideWidth?: string;
  contentMin?: string;
  space?: string;
  noStretch?: boolean;
  wrapReverse?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Sidebar = polyRef<"div", Props>(
  (
    {
      as: As = "div",
      side = "left",
      sideWidth,
      contentMin,
      space,
      noStretch = false,
      wrapReverse = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styleVariants = {
      "--sidebar-width": sideWidth,
      "--sidebar-content-min": contentMin,
      "--sidebar-space": space,
      "--sidebar-align-items": noStretch && "flex-start",
      "--sidebar-wrap": wrapReverse && "wrap-reverse",
    } as React.CSSProperties;

    return (
      <As
        style={styleVariants}
        className={cn(styles.sidebar, styles[side], className)}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  }
);
