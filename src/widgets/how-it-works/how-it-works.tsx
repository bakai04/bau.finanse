import React from 'react'
import { Card } from "./card";
import style from "./how-it-works.module.scss";

const howItWorks = [
  {
    front: "Earn yield",
    back: "Bau is a DeFi yield aggregator that offers low fees and maximum possible yield. Our goal is to help users take full advantage of compounding yield."
  },
  {
    front: "Earn yield",
    back: "Bau is a DeFi yield aggregator that offers low fees and maximum possible yield. Our goal is to help users take full advantage of compounding yield."
  },
  {
    front: "Earn yield",
    back: "Bau is a DeFi yield aggregator that offers low fees and maximum possible yield. Our goal is to help users take full advantage of compounding yield."
  },
  {
    front: "Earn yield",
    back: "Bau is a DeFi yield aggregator that offers low fees and maximum possible yield. Our goal is to help users take full advantage of compounding yield."
  },
]

export const HowItWorks = () => {
  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>HOW IT WORKS</h2> 
      <div className={style.wrapper__inner}>
        {
          howItWorks.map((elem, index) => (
            <Card key={index} {...elem}/>
          ))
        }
      </div>
    </section>
  )
}
