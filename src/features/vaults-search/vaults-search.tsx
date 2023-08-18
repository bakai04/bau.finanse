import { Icon } from "../../shared/ui"
import React, { ChangeEvent, useState } from 'react'
import style from "./vaults-search.module.scss"

export const VaultSearch = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <div className={style.search}>
        <Icon.Search className={style.search__svg} />
        <input
          value={value}
          onChange={handleChange}
          className={style.search__input}
          placeholder="Vault name / Token name / Pool name / Volt address / Token address" />
        {value.length > 0 && <Icon.Cross className={style.search__cross} onClick={() => setValue("")} />}
      </div>
      <div className={style.radio}>
        <label className={style.radio_label}>
          <input type="radio" defaultChecked name="custom-radio" className={style.radio_input}/>
          <span className={style.checkmark}>All Vaults(214)</span>
        </label>

        <label className={style.radio_label}>
          <input type="radio" name="custom-radio" className={style.radio_input}/>
          <span className={style.checkmark}>My Vaults</span>
        </label>
      </div>
    </div>
  )
}
