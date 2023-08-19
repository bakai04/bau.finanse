import { Icon } from "../../../../shared/ui";
import React, { useState } from 'react'
import style from "./token-tabs.module.scss";
import cx from "classnames";

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

export const TokenTabs = () => {
  const [activeToken, setActiveToken] = useState(0);

  const handleClick = (id: number) => {
    setActiveToken(id)
  }

  return (
    <div className={style.wrapper}>
      {
        tokens.map((elem, index) => (
          <div
            onClick={() => handleClick(index)}
            className={
              cx(
                style.token,
                activeToken === index && style.token_active
              )}
          >
            {elem.icon}
            <span>{elem.name}</span>
          </div>
        ))
      }
    </div>
  )
}
