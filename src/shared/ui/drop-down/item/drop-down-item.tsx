import cx from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import style from "./drop-down-item.module.scss";

interface IDropDownItem {
  children: ReactNode;
  prefix?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  danger?: boolean;
  suffix?: ReactNode;
  handleClick?: () => void
  style?: CSSProperties;
  className?: string;
  active?: boolean;
  onMouseEnter?: () => void;
}

export const DropDownItem = (props: IDropDownItem) => {
  const onClick = () => {
    if(props.handleClick) props?.handleClick();
    if(props.onClick) props?.onClick();
  }

  return (
    <li
      style={props.style}
      onClick={onClick}
      aria-hidden={props.disabled}
      tabIndex={-1}
      className={cx(style.drop_down_item, props.className, props.danger && style.danger, props.active && style.active, props.selected && style.selected)}
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
