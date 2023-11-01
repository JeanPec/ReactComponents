import React, { AllHTMLAttributes } from "react";
import cn from 'classnames';

import styles from "./Main.module.css";

interface MainProps extends AllHTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

export const Main = React.forwardRef(
  (
    { centered, ...props }: MainProps,
    ref?: React.LegacyRef<HTMLDivElement> | undefined
  ) => (
    <div
      ref={ref}
      className={
        cn(styles.mainElement,
          {
            [styles.centered]: centered
          })
      }
      {...props}
    />
  )
);
