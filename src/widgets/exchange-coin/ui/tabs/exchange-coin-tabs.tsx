import React, { useState } from 'react'
import style from "./exchange-coin-tabs.module.scss";
import cx from "classnames"

export const ExchangeCoinTabs = () => {
  const [isDeposit, setIsDeposit] = useState(true)

  return (
    <div className={style.tabs}>
      <p
        onClick={() => setIsDeposit(true)}
        className={
          cx(
            style.tab,
            isDeposit && style.active_tab
          )
        }>Deposit</p>
      <p
        onClick={() => setIsDeposit(false)}
        className={
          cx(
            style.tab,
            !isDeposit && style.active_tab
          )
        }>Withdraw</p>
    </div>
  )
}
