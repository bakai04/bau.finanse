import React from 'react'
import style from "./vaults-info-breakdown.module.scss"

export const VaultsInfoBreakdown = () => {
  return (
    <div className={style.info__block}>
      <h4 className={style.info__title}>LP Breakdown</h4>
      <ul className={style.info__list}>
        <li className={style.info__earned}>
          <span className={style.info__description}>Price per 1LP</span>
          <span className={style.info__coin}>$ 568</span>
          <span className={style.info__percent}></span>
        </li>
        <li className={style.info__earned}>
          <span className={style.info__description}>Tokens per 1 LP</span>
          <span className={style.info__coin}>3 DYDX</span>
          <span className={style.info__percent}>0.001 ETH</span>
        </li>
        <li className={style.info__earned}>
          <span className={style.info__description}>Total pool TVL</span>
          <span className={style.info__coin}>$ 20 M.</span>
          <span className={style.info__percent}></span>
        </li>
      </ul>
    </div>
  )
}
