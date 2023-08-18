import React, { CSSProperties, LegacyRef, ReactNode } from "react";
import style from "./link.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

interface IDropDownLink {
  children: ReactNode;
  prefix?: ReactNode;
  onClick?: () => void;
  href: string;
  disabled?: boolean;
  danger?: boolean;
  suffix?: ReactNode;
  style?: CSSProperties;
  className?: string;
  active?: boolean;
  onMouseEnter?: () => void;
}

export const DropDownLink = (props: IDropDownLink) => {
  return (
    <li
      style={props.style}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      className={cx(style.drop_down_item, props.className, props.danger && style.danger, props.active && style.active)}
    >
      <Link to={props.href} aria-disabled={props.disabled} className={style.drop_link}>
        <div className={style.prefix}>
          {props.prefix}
          <p className={style.name}>{props.children}</p>
        </div>
        <div className={style.suffix}>{props.suffix}</div>
      </Link>
    </li>
  );
};

DropDownLink.defaultProps = {};
