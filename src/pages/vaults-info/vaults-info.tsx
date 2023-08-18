import { Layout, VaultsInfo, VaultsInfoPreview } from "../../widgets";
import React from 'react'
import style from "./vaults-info.module.scss";

export const VaultsInfoPage = () => {
  return (
    <Layout>
      <VaultsInfoPreview/>
      <VaultsInfo/>
    </Layout>
  )
}
