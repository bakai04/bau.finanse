import React, { CSSProperties } from "react";
import style from "./section.module.scss";
import cx from "classnames";

interface ISection {
  title?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const DropDownSection = (props: ISection) => {
  return (
    <div className={cx(style.section, props.className)} style={props.style}>
      {props.title}
    </div>
  );
};

DropDownSection.defaultProps = {};
