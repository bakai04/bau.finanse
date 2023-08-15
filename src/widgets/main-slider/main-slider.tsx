import { Icon } from "../../shared/ui"
import React from 'react'
import style from "./main-slider.module.scss";

export const MainSlider = () => {
  return (
    <div className={style.main}>
      <button className={style.prev_button}>
        <Icon.Arrow className={style.prev_arrow} />
        Back
      </button>

      <div className={style.content}>
        <div className={style.bg_light}>
          <Icon.BG_Light />
        </div>
        <Icon.RealisticLogo className={style.logo}/>
        <h2 className={style.content__title}>DYDX-ETH</h2>
        <a href="https://www.youtube.com/" className={style.content__link}>
          <span>
            Curve COILFRAX-f
          </span>
          <Icon.ArrowLong />
        </a>
      </div>

      <div className={style.slide__info}>
        <p className={style.info}>
          Vault TVL:
          <span>$ 20, 000</span>
        </p>
        <p className={style.info}>
          Last harvest:
          <span>2 hours ago</span>
        </p>
      </div>
    </div>
  )
}
