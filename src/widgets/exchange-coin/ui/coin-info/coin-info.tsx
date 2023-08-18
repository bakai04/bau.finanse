import { Icon } from "../../../../shared/ui"
import React from 'react'
import style from "./coin-info.module.scss"

interface ICoinInfoProps {
  isChangable: boolean
}

export const CoinInfo = (props: ICoinInfoProps) => {
  return (
    <div className={style.coin_info}>
      <div className={style.head}>
        You sell
        <p className={style.balance}>
          Balance: 0.7412
          <span>MAX</span>
        </p>
      </div>
      <div className={style.body}>
        <p className={style.title}>
          <Icon.Curve/>
          DYDX-ETH
        </p>
        <span className={style.count}>1</span>
      </div>
      <div className={style.footer}>
        <span>Curve</span>
        <span>~$ 1. 849, 06</span>
      </div>
    </div>
  )
}
