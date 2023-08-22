import { Icon } from "../../shared/ui";
import React from 'react'
import { Layout } from "../layout/layout";
import style from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import HeaderProfile from "../../features/header-profile/header-profile";
import cx from "classnames";

const links = [
  {
    title: "Vaults",
    link: "/vaults",
  },
  {
    title: "Dashboard",
    link: "/",
    soon: true
  },
  {
    title: "Docs",
    link: "/docs",
    icon: <Icon.ArrowLong />
  },
]

export const Header = () => {
  const location = useLocation();
  return (
    <Layout>
      <header className={style.header}>
        <Link to={"/"}><Icon.Logo /></Link>
        <div className={style.header__centerBlock}>
          <ul className={style.header__nav}>
            {
              links.map((elem, index) => (
                <Link to={elem.link}>
                  <li className={cx(
                    style.nav__item,
                    elem.soon && style.header__top,
                    elem.link === location.pathname && style.active,
                    elem.icon && style.nav__item_icon,
                  )}>
                    {elem.title}
                    {elem.icon}
                  </li>
                </Link>
              ))
            }
          </ul>
        </div>
        <HeaderProfile />
      </header>
    </Layout>
  )
}

export default Header; 