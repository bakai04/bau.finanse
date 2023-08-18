import { Layout } from "../../widgets";
import React from 'react'
import style from "./vaults.module.scss";
import { VaultSearch } from "../../features";
import { Icon } from "../../shared/ui";
import { VaultsTable } from "../../features/vaults-table/vaults-table";

const columns = [
  {
    header: "Name",
    suffix: <Icon.TableHeader/>,
    accessor: "name"
  },
  {
    header: "APY",
    suffix: <Icon.TableHeader/>,
    accessor: "apy"
  },
  {
    header: "APY, 7 Days",
    suffix: <Icon.TableHeader/>,
    accessor: "apyPerWeek"
  },
  {
    header: "Deposited",
    suffix: <Icon.TableHeader/>,
    accessor: "deposited"
  },
  {
    header: "TVL",
    suffix: <Icon.TableHeader/>,
    accessor: "tvl"
  }
]

const data = [
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    apyPerWeek: "6.53%",
    deposited: "100 LP Tokens",
    tvl: "$ 420, 441"
  }, 
]

export const VaultsPage = () => {
  return (
    <Layout>
      <section className={style.vaults}>
        <h2 className={style.vaults__title}>Vaults</h2>
        <VaultSearch/>
        <VaultsTable columns={columns} data={data}/>
      </section>
    </Layout>
  )
}
