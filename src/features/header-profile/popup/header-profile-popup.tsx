import React, { useRef, useState } from 'react'
import style from "./header-profile-popup.module.scss";
import cx from "classnames"
import { Icon } from "../../../shared/ui";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../../shared/lib/use-outside-click";
import { copyText } from "../../../shared/lib";

interface IProps {
  setIsOpen: (val: boolean) => void
}

export const HeaderProfilePopup = (props: IProps) => {
  const ref = useRef(null);
  const [copy, setCopy] = useState(false);
  useOnClickOutside(ref, () => props.setIsOpen(false));

  const handleClick = () => {
    copyText("ox1gt...a123").then(()=>{
      setCopy(true)
      setTimeout(()=>{
        setCopy(false)
      }, 2000)
    });
  }

  return (
    <div ref={ref} className={style.wrapper}>
      <div className={style.block}>
        <span className={style.block__title}>Profile</span>
        <p className={style.block__content}>
          ox1gt...a123
          {
            copy ?
            <Icon.Click onClick={handleClick} className={style.copy} /> :
            <Icon.Copy onClick={handleClick} className={style.copy} />
          }
        </p>
      </div>

      <div className={style.dbl__block}>
        <div className={style.block}>
          <span className={style.block__title}>Deposited</span>
          <span className={style.block__content}>$ 1, 200. 00</span>
        </div>
        <div className={style.block}>
          <span className={style.block__title}>Earnings</span>
          <span className={cx(style.block__content, style.success)}>+ $ 200. 00</span>
        </div>
      </div>

      <div className={style.block}>
        <span className={style.block__title}>Your transactions</span>
        <Link to="/" className={style.transaction}>DYDX-ETH<span className={style.success}>Success<Icon.ArrowLong /></span></Link>
        <Link to="/" className={style.transaction}>DYDX-ETH<span className={style.pending}>Pending<Icon.ArrowLong /></span></Link>
        <Link to="/" className={style.transaction}>DYDX-ETH<span className={style.error}>Error<Icon.ArrowLong /></span></Link>
      </div>
      <p className={style.disconnect}>Disconnect</p>
    </div>
  )
}
