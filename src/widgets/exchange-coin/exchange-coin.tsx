import React, { useState } from 'react'
import style from "./exchange-coin.module.scss";
import cx from "classnames"
import { ExchangeCoinTabs } from "./ui/tabs";
import { Button, Icon } from "../../shared/ui";
import { CoinInfo } from "./ui/coin-info";
import { CoinInfoRoute } from "./ui/route";
import { Modals } from "../../shared/lib";
import { TransactionSubmited } from "../../features";

export const ExchangeCoin = () => {

  const onAddModal = () => {
    Modals.open(TransactionSubmited, {})
  }

  return (
    <div className={style.wrapper}>
      <ExchangeCoinTabs />
      <div className={style.coins}>
        <CoinInfo isChangable />
        <Icon.ArrowDown className={style.arrow} />
        <CoinInfo isChangable={false} />
      </div>
      <CoinInfoRoute/>
      <Button size="medium" onClick={onAddModal} className={style.button}>Approve</Button>
    </div>
  )
}
