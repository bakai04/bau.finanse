import React from 'react'
import style from "./main-preview.module.scss"
import { Button } from "../../shared/ui"
import { Modals } from "../../shared/lib"
import { ConnectWallet } from "../../features"


export const MainPreview = () => {
  const onAddModal = () => {
    Modals.open(ConnectWallet, {})
  }
  return (
    <div className={style.main}>
      <div className={style.main__inner}>
        <h2 className={style.main__title}>
          <span>0%</span>
          Performance fees
        </h2>
        <p className={style.main__description}>Low-cost yield aggregator. Lower commissions, higher profits. Zap from any token.</p>
        <Button type="primary" className={style.main_button} size="large" onClick={onAddModal} >Get started</Button>
      </div>
    </div>
  )
}
