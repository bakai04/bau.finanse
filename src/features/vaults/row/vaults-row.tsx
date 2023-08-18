import { Icon, Paper } from "../../../shared/ui"
import React from 'react'
import style from "./vaults-row.module.scss";

export const VaultsRow = () => {
  return (
    <Paper>
      <tr className={style.table__row}>
        <td className={style.table__cell}><Icon.Curve />DYDX-ETH</td>
        <td className={style.table__cell}>10%</td>
        <td className={style.table__cell}><span>$ 1 100 </span></td>
        <td className={style.table__cell}>$ 1 050</td>
        <td className={style.table__cell}><span>$ 0.5</span></td>
        <td className={style.table__cell}>$ 50</td>
      </tr>
    </Paper>
  )
}
