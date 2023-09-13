import { VaultsTable, VaultsFilter } from "../../features"
import React from 'react'
import style from "./main-vaults.module.scss"
import { Button, Icon } from "../../shared/ui"
import { useNavigate } from "react-router-dom"

const columns = [
  {
    header: "Name",
    accessor: "name"
  },
  {
    header: <span>APY</span>,
    accessor: "apy"
  },
  {
    header: <>APY, <span>7 Days</span></>,
    accessor: "apyPerWeek"
  },
  {
    header: "Deposited",
    accessor: "deposited"
  },
  {
    header: "TVL",
    accessor: "tvl"
  }
]

const data = [
  {
    name: <><Icon.Curve />"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve />"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve />"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve />"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve />"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve />"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
]

export const MainVaults2 = () => {
  const navigate = useNavigate();

  const onClickMore = () => {
    navigate("/vaults")
  }
  return (
    <section className={style.main_vaults}>
      <div className={style.main_vaults__header}>
        <span className={style.main_vaults__description}>Compare Bau with other protocols</span>
        <h2 className={style.main_vaults__title}>
          See for yourself how much you <span>pay</span> as fees
        </h2>
      </div>
      <div>
        <VaultsFilter />
        <VaultsTable columns={columns} data={data} />
        <Button onClick={onClickMore} className={style.main_vaults__button} size="large" suffix={<Icon.ArrowLong />}>More vaults</Button>
      </div>
    </section >
  )
}
