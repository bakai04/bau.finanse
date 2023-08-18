import React, { useState } from 'react'
import style from "./exchange-coin.module.scss";
import cx from "classnames"
import { ExchangeCoinTabs } from "./ui/tabs";
import { Button, Icon } from "../../shared/ui";
import { CoinInfo } from "./ui/coin-info";
import { CoinInfoRoute } from "./ui/route";

export const ExchangeCoin = () => {
  return (
    <div className={style.wrapper}>
      <ExchangeCoinTabs />
      <div className={style.coins}>
        <CoinInfo isChangable />
        <Icon.ArrowDown className={style.arrow} />
        <CoinInfo isChangable={false} />
      </div>
      <CoinInfoRoute/>
      <Button size="medium" className={style.button}>Approve</Button>
    </div>
  )
}
