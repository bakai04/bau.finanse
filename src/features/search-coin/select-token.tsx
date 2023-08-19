import { Icon } from "../../shared/ui";
import React, { ChangeEvent, useRef, useState } from 'react'
import style from "./select-token.module.scss";
import { TokenTabs } from "./ui/token-tabs";
import { TokenList } from "./ui/token-list";
import { SearchInput } from "./ui/search-input";

interface ISelectToken {
  setIsOpen: (value: boolean | ((value: boolean) => boolean)) => void
}

export const SelectToken = ({ setIsOpen }: ISelectToken) => {
  
  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.head}>
          <h4 className={style.title}>Select Token</h4>
          <Icon.Cross className={style.closs_btn} onClick={onClose}/>
        </div>
        <SearchInput/>
        <TokenTabs />
        <div className={style.divider}></div>
        <TokenList />
      </div>
      <div className={style.bakground} onClick={onClose}></div>
    </>
  )
}
