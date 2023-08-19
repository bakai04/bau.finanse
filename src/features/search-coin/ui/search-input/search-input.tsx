import { Icon } from "../../../../shared/ui";
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import style from "./search-input.module.scss";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    inputRef?.current?.focus();
  }, [])

  return (
    <div className={style.search}>
      <Icon.Search className={style.search__svg} />
      <input
        value={value}
        ref={inputRef}
        onChange={handleChange}
        className={style.search__input}
        placeholder="Name or address" />
      {value.length > 0 && <Icon.Cross className={style.search__cross} onClick={() => setValue("")} />}
    </div>
  )
}
