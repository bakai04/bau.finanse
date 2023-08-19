import { Icon } from "../../../../shared/ui"
import React, { useState } from 'react'
import style from "./coin-info.module.scss"
import cx from "classnames"
import { SelectToken } from "../../../../features"

interface ICoinInfoProps {
  isChangable: boolean
}

export const CoinInfo = (props: ICoinInfoProps) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleClick = () => {
    if (props.isChangable) {
      setSearchIsOpen(true);
    }
  }

  return (
    <>
      <div className={style.coin_info}>
        <div className={style.head}>
          You sell
          <p className={style.balance}>
            Balance: 0.7412
            <span>MAX</span>
          </p>
        </div>
        <div className={style.body}>
          <p
            onClick={handleClick}
            className={
              cx(
                style.title,
                props.isChangable && style.pointer
              )}>
            <Icon.Curve />
            DYDX-ETH
            {props.isChangable && <Icon.Arrow />}
          </p>
          <span className={style.count}>1</span>
        </div>
        <div className={style.footer}>
          <span>Curve</span>
          <span>~$ 1. 849, 06</span>
        </div>
      </div>
      {searchIsOpen && <SelectToken setIsOpen={setSearchIsOpen} />}
    </>
  )
}
