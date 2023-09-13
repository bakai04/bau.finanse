import React, { CSSProperties } from 'react'
import style from "./speed-dial.module.scss";
import cx from "classnames";

interface ISpeedDial {
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}

export const SpeedDial = (props: ISpeedDial) => {
  return (
    <div className={cx(style.speedDial, props.className)} style={props.style}>
      {props.children}
    </div>
  )
}
