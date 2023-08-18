import React from 'react'
import style from "./vaults-info-position.module.scss"

export const VaultsInfoPosition = () => {
  return (
    <div className={style.info__block}>
      <h4 className={style.info__title}>Your position</h4>
      <ul className={style.info__list}>
        <li className={style.info__earned}>
          <span className={style.info__description}>Curve COILFRAX-f</span>
          <span className={style.info__coin}>12.865 LP</span>
          <span className={style.info__dollars}>$568</span>
          <span className={style.info__percent}>+5%</span>
        </li>
        <li className={style.info__earned}>
          <span className={style.info__description}>Curve COILFRAX-f</span>
          <span className={style.info__coin}>12.865 LP</span>
          <span className={style.info__dollars}>$568</span>
          <span className={style.info__percent}>+5%</span>
        </li>
        <li className={style.info__earned}>
          <span className={style.info__description}>Curve COILFRAX-f</span>
          <span className={style.info__coin}>12.865 LP</span>
          <span className={style.info__dollars}>$568</span>
          <span className={style.info__percent}>+5%</span>
        </li>
        <li className={style.info__earned}>
          <span className={style.info__description}>Curve COILFRAX-f</span>
          <span className={style.info__coin}>12.865 LP</span>
          <span className={style.info__dollars}>$568</span>
          <span className={style.info__percent}>+5%</span>
        </li>
      </ul>
    </div>
  )
}
