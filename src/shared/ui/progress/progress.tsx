import React from 'react'
import cx from "classnames";
import style from "./progress.module.scss";

interface IProgress {
  value: number,
  className?: string
}

export const Progress = (props: IProgress) => {
  return (
    <div className={cx(
      style.background,
      !props.value && style.empty,
      props.className,
    )}>
      <div className={style.content} style={{width: `${props.value}%`}}></div>
    </div>
  )
}
