import { Icon } from "../../../../shared/ui";
import React from 'react'
import style from "./token-list.module.scss";

const tokens = [
  {
    icon: <Icon.Curve />,
    name: "ETH",
  },
  {
    icon: <Icon.Curve />,
    name: "ETH",
  },
  {
    icon: <Icon.Curve />,
    name: "ETH",
  },
  {
    icon: <Icon.Curve />,
    name: "ETH",
  },
  {
    icon: <Icon.Curve />,
    name: "ETH",
  },
  {
    icon: <Icon.Curve />,
    name: "ETH",
  },
]

export const TokenList = () => {
  return (
    <ul className={style.list}>
      {
        tokens.map((elem) => (
          <li className={style.token}>
            <div className={style.token__logo}>
              {elem.icon}
              <div className={style.title}>
                <span>{elem.name}</span>
                <span>1.358</span>
              </div>
            </div>
            <span className={style.price}>$ 284.789, 52</span>
          </li>
        ))
      }
    </ul>
  )
}
