import { Button } from "../../shared/ui";
import React, { useState } from 'react'
import style from "./how-it-works.module.scss";
import cx from "classnames";
import { Progress } from "../../shared/ui/progress";

const tabs = [
  {
    title: "1 year"
  },
  {
    title: "20 years"
  },
  {
    title: "30 years"
  }
]

export const HowItWorks2 = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>HOW IT WORKS</h2>
      <div className={style.wrapper__inner}>
        <h2 className={style.sub_title}>See for yourself how much you <span>pay</span> as fees</h2>
        <p className={style.description}>Compare Bau with typical industry commissions</p>
        <div className={style.tabs}>
          {
            tabs.map((elem, index) => (
              <span onClick={() => setActiveTab(index)} className={cx(index === activeTab && style.active)}>{elem.title}</span>
            ))
          }
        </div>
        <div className={style.progress}>
          <div className={style.progress__item}>
            <span>Other venues</span>
            <Progress value={0} className={style.progress__bar} />
            <span>$ 155.95</span>
          </div>
          <div className={style.progress__item}>
            <span className={style.green}>-98.89 %</span>
            <Progress value={10} className={style.progress__bar}/>
            <span className={style.white}>$ 10</span>
          </div>
        </div>
        <div>
          <div className={style.paymant}>
            <Button size="medium">$ 1.000</Button>
            <Button size="medium" type="secondary">$ 50.000</Button>
            <Button size="medium" type="secondary">$ 1.000.000</Button>
          </div>
          <Button disabled size="large" type="secondary">Your amount</Button>
        </div>
      </div>
    </section>
  )
}
