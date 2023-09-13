import { Icon, Tooltip } from "../../../../shared/ui"
import React, { useId } from 'react'
import style from "./vaults-name.module.scss";
import { Link } from "react-router-dom";

export const VaultsName = () => {
  const id = useId();

  return (
    <div className={style.vaults_name}>
      <Icon.VaultsOn data-tooltip-id={id} className={style.tooltip_triger} />
      <Tooltip tooltipId={id} place={"bottom-start"}>
        <p className={style.tooltip__content}>
          Active vault. Read more in
          <Link to={"/docs"}> documentation.</Link>
        </p>
      </Tooltip>
      <Icon.Curve /> DYDX-ETH
    </div>
  )
}
