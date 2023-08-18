import React from 'react'
import style from "./vaults-header.module.scss";

export const VaultsHeader = () => {
  return (
    <thead className={style.wrapper}>
      <tr className={style.column_title}>
        <th>Name</th>
      </tr>
      <tr className={style.column_title}>
        <th>APY</th>
      </tr>
      <tr className={style.column_title}>
        <th><span>BAU</span> Total Yield</th>
      </tr>
      <tr className={style.column_title}>
        <th>Total Yield Other</th>
      </tr>
      <tr className={style.column_title}>
        <th><span>BAU</span> FEES</th>
      </tr>
      <tr className={style.column_title}>
        <th>Other FEES</th>
      </tr>
    </thead>
  )
}
