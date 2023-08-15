import { Icon } from "../../shared/ui"
import React from 'react'
import style from "./header-profile.module.scss"

const HeaderProfile = () => {
  return (
    <div className={style.header_profile}>
      <Icon.BlueLogo />
      <div className={style.header_profile}>
        <Icon.Profile />
        ox1gtasdq...123
        <Icon.Arrow />
      </div>
    </div>
  )
}

export default HeaderProfile