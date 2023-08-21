import { Icon } from "../../shared/ui"
import React, { useState } from 'react'
import style from "./header-profile.module.scss"
import { Modals } from "../../shared/lib";
import { ConnectWallet } from "../connect-wallet";
import { HeaderProfilePopup } from "./popup";

const HeaderProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <Icon.Profile className={style.profile_active} />
            <span onClick={()=>setIsOpen(!isOpen)}>ox1gtasdq...123</span>
            <Icon.Arrow />
            {isOpen && <HeaderProfilePopup setIsOpen={setIsOpen}/>}
          </div>
          :
          <p className={style.connect_wallet} onClick={onAddModal}>Connect wallet</p>
      }
    </div>
  )
}

export default HeaderProfile