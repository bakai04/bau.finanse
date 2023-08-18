import React, { CSSProperties } from "react";
import style from "./divider.module.scss";
import cx from "classnames";

interface IDropDownDivider {
  className?: string;
  style?: CSSProperties;
}

export const DropDownDivider = (props: IDropDownDivider) => {
  return <div className={cx(style.divider, props.className)} style={props.style}></div>;
};

DropDownDivider.defaultProps = {};
