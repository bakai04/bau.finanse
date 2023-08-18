import cx from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import style from "./drop-down-item.module.scss";

interface IDropDownItem {
  children: ReactNode;
  prefix?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  suffix?: ReactNode;
  style?: CSSProperties;
  className?: string;
  active?: boolean;
  onMouseEnter?: () => void;
}

export const DropDownItem = (props: IDropDownItem) => {
  return (
    <li
      style={props.style}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      aria-hidden={props.disabled}
      tabIndex={-1}
      className={cx(style.drop_down_item, props.className, props.danger && style.danger, props.active && style.active)}
    >
      <div className={style.prefix}>
        {props.prefix}
        <p className={style.name}>{props.children}</p>
      </div>
      {props.suffix && <div className={style.suffix}>{props.suffix}</div>}
    </li>
  );
};

DropDownItem.defaultProps = {};
