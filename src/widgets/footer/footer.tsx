import { Icon } from "../../shared/ui";
import React from 'react'
import { Link } from "react-router-dom";
import style from "./footer.module.scss";
import { Layout } from "../layout";

export const Footer = () => {
  return (
    <Layout>
      <footer className={style.footer}>
        <div className={style.footer__nav}>
          <Link to="/" className={style.nav__item}>Docs</Link>
          <Link to="/" className={style.nav__item}><Icon.Logo /></Link>
          <Link to="/" className={style.nav__item}>Audit</Link>
        </div>
        <a href="mailto:hi@bau.finance" className={style.footer__email}>hi@bau.finance</a>
        <nav className={style.footer__medias}>
          <a href="#" className={style.footer__media}>Twitter</a>
          <a href="#" className={style.footer__media}>Github</a>
          <a href="#" className={style.footer__media}>Telegram</a>
          <a href="#" className={style.footer__media}>Mirror</a>
          <a href="#" className={style.footer__media}>Discord</a>
        </nav>
        <p className={style.footer__bottom}>© | 2023 | Bau.Finance</p>
      </footer>
    </Layout>
  )
}
