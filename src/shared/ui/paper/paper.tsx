import React, { CSSProperties } from 'react'
import cx from "classnames"
import style from "./paper.module.scss"

interface PaperProps {
  className?: string
  style?: CSSProperties
  children: React.ReactNode 
}

export const Paper = (props: PaperProps) => {
  return (
    <div className={cx(
      style.paper,
      props.className
    )} style={props.style}>
      {props.children}
    </div>
  )
}
