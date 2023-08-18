import React from 'react'
import style from "./main-preview.module.scss"
import BG_Image1 from "../../shared/images/Group 585.png"
import BG_Image2 from "../../shared/images/Group 586.png"
import { Button } from "../../shared/ui"


export const MainPreview = () => {
  return (
    <div className={style.main}>
      {/* <img className={style.bg_image} src={BG_Image2} alt="bg" /> */}
      <div className={style.main__inner}>
        <h2 className={style.main__title}>
          <span>0%</span>
          Performance fees
        </h2>
        <p className={style.main__description}>Low-cost yield aggregator. Lower commissions, higher profits. Zap from any token.</p>
        <Button type="primary" className={style.main_button} size="large" >Get started</Button>
      </div>
      {/* <img className={style.bg_image} src={BG_Image1} alt="bg" /> */}
    </div>
  )
}
