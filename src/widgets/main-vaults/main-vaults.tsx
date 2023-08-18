import { Vaults, VaultsFilter } from "../../features"
import React from 'react'
import style from "./main-vaults.module.scss"
import { Button, Icon } from "../../shared/ui"


export const MainVaults = () => {
  return (
    <section className={style.main_vaults}>
      <h2 className={style.main_vaults__title}>
        Other portocols charge you 
        <span> 5-30%</span> performance fee
      </h2>
      <p className={style.main_vaults__description}>See how fees can impact ROI for yield farmers</p>
      <div>
        <VaultsFilter/>
        <Vaults/>
        <Button className={style.main_vaults__button} size="large" suffix={<Icon.ArrowLong/>}>More vaults</Button>
      </div>
    </section>
  )
}
