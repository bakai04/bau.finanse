import React from 'react'
import { Tooltip as TooltipUI, } from 'react-tooltip'
import style from "./tooltip.module.scss";

interface ITooltip {
  tooltipId: string
  children: React.ReactNode
  className?: string
  place?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
}

export const Tooltip = (props: ITooltip) => {
  return (
    <TooltipUI
      delayHide={3000}
      className={style.wrapper}
      id={props.tooltipId}
      place={props.place}
      classNameArrow={style.arrow}
    >
      {props.children}
    </TooltipUI>
  )
}
