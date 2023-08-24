import { VaultsTable } from "../../features"
import React from 'react'
import { HowItWorks, Layout, MainPreview, MainVaults } from "../../widgets"
import { Icon } from "../../shared/ui"
import { HowItWorks2 } from "../../widgets/how-it-work-2"

const columns = [
  {
    header: "Name",
    accessor: "name"
  },
  {
    header: "Bau, APY",
    accessor: "apy"
  },
  {
    header: "Conventional protocol, APY",
    accessor: "deposited"
  }
]

const data = [
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    deposited: "100 LP Tokens",
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    deposited: "100 LP Tokens",
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    deposited: "100 LP Tokens",
  },
  {
    name: <><Icon.Curve/>"DYDX-ETH"</>,
    apy: "6.53%",
    deposited: "100 LP Tokens",
  } 
]


export const MainVPage = () => {
  return (
    <Layout>
      <MainPreview />
      <VaultsTable columns={columns} data={data}/>
      <HowItWorks2 />
    </Layout>
  )
}
