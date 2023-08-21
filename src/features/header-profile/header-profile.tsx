import { Icon } from "../../shared/ui"
import React from 'react'
import style from "./header-profile.module.scss"
import { Modals } from "../../shared/lib";
import { ConnectWallet } from "../connect-wallet";

const HeaderProfile = () => {
  const isAuth = true;
 
  const onAddModal = () => {
    Modals.open(ConnectWallet, {})
  }

  return (
    <div className={style.header_profile}>
      <Icon.BlueLogo />
      {
        isAuth ?
          <div className={style.header_profile}>
            <div className={style.profile_marker}></div>
            <Icon.Profile className={style.profile_active}/>
            ox1gtasdq...123
            <Icon.Arrow />
          </div>
          :
          <p className={style.connect_wallet} onClick={onAddModal}>Connect wallet</p>
      }
    </div>
  )
}

export default HeaderProfile