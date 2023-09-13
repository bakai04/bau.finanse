import React from 'react';
import { VaultsHeader } from "./header";
import style from "./vaults-table.module.scss";
import { VaultsRow } from "./row";
import cx from "classnames"

export interface IColumn {
  header: React.ReactNode,
  suffix?: React.ReactNode,
  accessor: keyof ITableData
}

export interface ITableData {
  [value: string]: React.ReactNode,
}

interface IVaultsTableProps {
  columns: IColumn[]
  data: ITableData[]
  className?: string;
}

export const VaultsTable = (props: IVaultsTableProps) => {
  return (
    <div className={cx(style.table_container, props.className)}>
      <table className={style.table}>
        <VaultsHeader columns={props.columns} />
        <tbody className={style.table__body}>
          {props.data.map((elem, index) => (
            <VaultsRow key={index} data={elem} columns={props.columns} />
          ))}
        </tbody>
      </table>
    </div>

  )
}
