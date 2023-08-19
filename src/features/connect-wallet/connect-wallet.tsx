import { UseModalProps } from "@/shared/lib"
import { Icon, Modal } from "../../shared/ui"
import React from 'react'
import style from "./connect-wallet.module.scss"

interface IConnectWallet extends UseModalProps {

}

const wallets = [
  {
    icon: <Icon.Curve/>,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve/>,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve/>,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve/>,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve />,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve />,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve />,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve />,
    name: "Metamask",
  },
  {
    icon: <Icon.Curve />,
    name: "Metamask",
  }
]

export const ConnectWallet = (props: IConnectWallet) => {
  return (
    <Modal onClose={props.close} width={1000} className={style.modal}>
      <div className={style.wrapper}>
        <div className={style.preview}>
          <Icon.Logo />
        </div>
        <div className={style.wallet_list}>
          <div className={style.head}>
            <h4 className={style.wallet_list__title}>Available Wallets</h4>
            <Icon.Cross onClick={props.close} className={style.closs_btn} />
          </div>
          <ul className={style.list}>
            {
              wallets.map((elem, key) => (
                <li key={key} className={style.wallet}>
                  <div className={style.wallet__logo}>
                    {elem.icon}
                  </div>
                  <span>{elem.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Modal>
  )
}
