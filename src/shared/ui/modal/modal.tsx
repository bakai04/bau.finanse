import { KeyName, useKeyDown } from "../../../shared/lib";
import React, { CSSProperties, useRef } from 'react'
import style from "./modal.module.scss";
import cx from "classnames";
import { Icon } from "..";
import { useOnClickOutside } from "../../../shared/lib/use-outside-click";

export interface IModal {
  children?: React.ReactNode;
  onClose: () => void;
  className?: string;
  style?: CSSProperties;
  htmlId?: string;
  width?: number;
}

export const Modal = (props: IModal) => {
  const ref = useRef(null);
  useKeyDown(KeyName.ESC, props.onClose);
  useOnClickOutside(ref, () => props.onClose());
  return (
    <div className={cx(style.modal, props.className)} style={props.style} id={props.htmlId} onClick={props.onClose}>
      <div ref={ref} className={style.wrapper} style={{ width: props.width }} onClick={(e) => e.stopPropagation()}>
        <Icon.Cross className={style.close_btn} onClick={props.onClose}/>
        {props.children}
      </div>
    </div>
  )
}
