import React from 'react'
import style from "./main-preview.module.scss"
import { Button } from "../../shared/ui"


export const MainPreview = () => {
  return (
    <div className={style.main}>
      <div className={style.main__inner}>
        <h2 className={style.main__title}>
          <span>0%</span>
          Performance fees
        </h2>
        <p className={style.main__description}>Low-cost yield aggregator. Lower commissions, higher profits. Zap from any token.</p>
        <Button type="primary" className={style.main_button} size="large" >Get started</Button>
      </div>
    </div>
  )
}
