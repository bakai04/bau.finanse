import React, { CSSProperties } from 'react';
import style from "./toast.module.scss";
import cx from "classnames";

interface IToastProps {
  message: string;
  variant?: "error" | "success" | "warning",
  style?: CSSProperties
  className?: string
}

export const Toast = (props: IToastProps) => {
  return (
    <div
      style={props.style}
      className={cx(
        style.toast,
        props.variant === "error" && style.error,
        props.variant === "warning" && style.warning,
      )}
    >
      <span>{props.message}</span>
    </div>
  )
}
