import React from 'react'
import style from "./card.module.scss";

interface ICardProps {
  front: string;
  back: string;
}

export const Card = (props: ICardProps) => {
  return (
    <div className={style.card}>
      <div className={style.front}>
        <p>{props.front}</p>
      </div>
      <div className={style.back}>
        <p>{props.back}</p>
      </div>
    </div>
  )
}
