import { Button, Icon, Modal } from "../../shared/ui";
import React from 'react'
import style from "./transaction-submited.module.scss";
import { UseModalProps } from "../../shared/lib";
import { Link } from "react-router-dom";

interface ITransactionSubmited extends UseModalProps {

}

export const TransactionSubmited = (props:ITransactionSubmited) => {
  return (
    <Modal onClose={props.close} width={740}>
      <div className={style.wrapper}>
        <Icon.Clock className={style.clock}/>
        <h4 className={style.title}>Transaction submitted</h4>
        <p className={style.link}>View on <Link to={"/"}>Etherscan</Link></p>
        <Button onClick={props.close} className={style.close_btn} size="medium" type="secondary">Close</Button>
      </div>
    </Modal>
  )
}
