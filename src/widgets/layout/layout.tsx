import React from 'react'
import { CSSProperties } from "react"
import style from "./layout.module.scss";
import cx from "classnames";

interface ILayoutProps {
  children: React.ReactNode,
  className?: string,
  style?: CSSProperties
}

export const Layout = (props: ILayoutProps) => {
  return (
    <div
      className={cx(
        style.container,
        props.className
      )}
      style={props?.style}>
      {props.children}
    </div>
  )
}
