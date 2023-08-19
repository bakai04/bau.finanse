import { Layout, VaultsInfo, VaultsInfoPreview } from "../../widgets";
import React from 'react'
import style from "./vaults-info.module.scss";
import { Toast } from "../../shared/ui";

export const VaultsInfoPage = () => {
  return (
    <Layout>
      <VaultsInfoPreview/>
      <Toast message="This vault has not been activated yet, make a deposit to this vault to activate it" variant="warning"/>
      <VaultsInfo/>
    </Layout>
  )
}
