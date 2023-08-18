import React from 'react';
import { VaultsHeader } from "./header";
import style from "./vaults.module.scss";
import { VaultsRow } from "./row";

export const Vaults = () => {
  return (
    <table className={style.table}>
      <VaultsHeader />
      <tbody className={style.table__body}>
        <VaultsRow/>
        <VaultsRow/>
        <VaultsRow/>
        <VaultsRow/>
        <VaultsRow/>
      </tbody>
    </table>
  )
}
