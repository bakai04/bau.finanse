import { Icon } from "../../../../shared/ui";
import React, { useState } from 'react'
import style from "./coin-info-route.module.scss";

export const CoinInfoRoute = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.popover__trigger} onClick={() => setActive(!active)}>
        <span>Route</span>
        <Icon.Arrow className={active ? style.popover__trigger_active : ""} />
      </div>
      {
        active &&
        <ul className={style.list}>
          <li className={style.price}>
            <span>1. INCH price</span>
            <span className={style.warning}>Price is unknown</span>
          </li>
          <li className={style.price}>
            <span>1. INCH price</span>
            <span className={style.coin}>~$ 1. 849, 06 <span>2.828418 1INCH</span></span>
          </li>  
          <li className={style.price}>
            <span>1. INCH price</span>
            <span>Price is unknown</span>
          </li>
        </ul>
      }
    </div>
  )
}
