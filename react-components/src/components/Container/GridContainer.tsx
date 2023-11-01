import React, { AllHTMLAttributes, CSSProperties } from "react";
import cn from "classnames";

import styles from "./GridContainer.module.css";

interface GridContainerProps extends AllHTMLAttributes<any> {
  gridColumn?: CSSProperties["gridColumn"];
  gridTemplateColumns?: CSSProperties["gridTemplateColumns"];
  gridRow?: CSSProperties["gridRow"];
  gridTemplateRows?: CSSProperties["gridTemplateRows"];
  gap?: number;
  gutterBottom?: boolean;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export const GridContainer = React.forwardRef(
  (
    {
      align,
      gridColumn,
      gridTemplateColumns,
      gridRow,
      gridTemplateRows,
      className,
      fullWidth,
      fullHeight,
      gap = 8,
      gutterBottom,
      justify,
      style,
      ...props
    }: GridContainerProps,
    ref?: React.LegacyRef<HTMLDivElement> | undefined
  ) => (
    <div
      ref={ref}
      className={cn(
        styles.container,
        {
          [styles.gutterBottom]: gutterBottom,
          [styles.fullWidth]: fullWidth,
          [styles.fullHeight]: fullHeight,
        },
        className
      )}
      style={{ gap, gridColumn, gridTemplateColumns, gridRow, gridTemplateRows, alignItems: align, justifyContent: justify, ...style }}
      {...props}
    />
  )
);
