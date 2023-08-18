import { Paper } from "../../shared/ui";
import React from 'react'
import style from "./vaults-info.module.scss";
import strategy from "../../shared/images/strategy.png"
import { VaultsInfoPosition } from "./position";
import { VaultsInfoBreakdown } from "./breakdown";
import { ExchangeCoin } from "../exchange-coin";

export const VaultsInfo = () => {
  return (
    <section className={style.detail}>
      <div className={style.detail__info}>
        <div className={style.info__block}>
          <h4 className={style.info__title}>APY</h4>
          <p className={style.info__apy}>
            Last harvest APY
            <span>7%</span>
            <div className={style.divider}></div>
            Weeky
            <span>5%</span>
            <div className={style.divider}></div>
            Monthly
            <span>9%</span>
          </p>
        </div>
        <VaultsInfoPosition/>
        <VaultsInfoBreakdown/>
        <div className={style.info__block}>
          <div className={style.info__head}>
            <h4 className={style.info__title}>Strategy</h4>
            <div className={style.info__nav}>
              <p className={style.nav__item}>Strategy</p>
              <p className={style.nav__item}>Volts</p>
            </div>
          </div>
          <img src={strategy} alt="strategy" />
        </div>
      </div>
      <ExchangeCoin/>
    </section>
  )
}
