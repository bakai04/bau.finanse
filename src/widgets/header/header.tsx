import { Icon } from "../../shared/ui";
import React from 'react'
import { Layout } from "../layout/layout";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import HeaderProfile from "../../features/header-profile/header-profile";

export const Header = () => {
  return (
    <Layout>
      <header className={style.header}>
        <Icon.Logo />
        <div className={style.header__centerBlock}>
          <p className={style.header__top}>Soon</p>
          <ul className={style.header__nav}>
            <Link to={"/vaults"}>
              <li className={style.nav__item}>Vaults</li>
            </Link>
            <Link to={"/"}>
              <li className={style.nav__item}>Dashboard</li>
            </Link>
            <Link to={"/"}>
              <li className={style.nav__item}>
                Docs
                <Icon.ArrowLong />
              </li>
            </Link>
          </ul>
        </div>
        <HeaderProfile />
      </header>
    </Layout>
  )
}

export default Header; 