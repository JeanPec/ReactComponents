import cn from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./Button.module.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  seeMore?: boolean;
  disableStyle?: boolean;
  disabled?: boolean;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  magic?: boolean;
}

/*
    Button:
        - close state to manage when used in the Modal
 */

export const Button = React.forwardRef(
  (
    {
      seeMore,
      className,
      disabled,
      disableStyle = false,
      iconAfter,
      iconBefore,
      magic,
      children,
      ...props
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      type="button"
      disabled={disabled}
      className={cn(className, { [styles.button]: !disableStyle, [styles.magic]: magic })}
      ref={ref}
      {...props}
    >
        {!!iconBefore && <>{iconBefore}&nbsp;</>}
        {children}
        {!!iconAfter && <>&nbsp;{iconAfter}</>}
    </button>
  )
);