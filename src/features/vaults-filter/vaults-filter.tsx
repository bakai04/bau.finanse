import React, { ChangeEvent, useState } from 'react'
import style from "./vaults-filter.module.scss"
import cx from "classnames";
import { DropDown, Icon } from "../../shared/ui";

export const VaultsFilter = () => {
  const [activeYear, setActiveYear] = useState("1 year");
  const [activeComission, setActiveComission] = useState("5%");
  const [value, setValue] = useState("1000$");
  const years = ["1 year", "5 years", "10 years"]
  const comissions = ["5%", "10%", "20%", "30%", "40%"]

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className={style.vaults_filter}>
      <div className={style.vaults_filter__deposit}>
        <label className={style.vaults_filter__title}>Your deposit</label>
        <input value={value} onChange={handleChange} className={style.vaults__deposit}/>
      </div>
      <div>
        <label className={style.vaults_filter__title}>Years</label>
        <div className={style.vaults_filter__years}>
          {
            years.map(elem => (
              <button
                onClick={() => setActiveYear(elem)}
                className={
                  cx(
                    style.vaults_filter__year,
                    activeYear === elem && style.active_year
                  )
                } key={elem}>{elem}</button>
            ))
          }
        </div>
      </div>
      <div>
        <label className={style.vaults_filter__title}>Commission</label>
        <DropDown
          defaultSelected={2}
          positions={["bottom", "left", "top", "right"]}
          triggerButton={
            <button className={style.vaults_filter__comission}>
              {activeComission}
              <Icon.Arrow />
            </button>
          }
        >
          {
            comissions.map(elem => (
              <DropDown.Item selected={elem === activeComission} key={elem} onClick={() => setActiveComission(elem)}>{elem}</DropDown.Item>
            ))
          }
        </DropDown>
      </div>
    </div>
  )
}
