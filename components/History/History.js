import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,//SliceでのAction
  selectCount,
  selectList,//SliceからのinitialState
} from '../../app/historySlice';

import CircularProgress from '@material-ui/core/CircularProgress';
import HistoryTable from './HistoryTable/HistoryTable'
import useGoogleSpreadsheet from 'use-google-spreadsheet';
//css module
import styles from './History.module.scss'

function getStaticProps() {
  const url = 'https://docs.google.com/spreadsheets/d/1TP8egieQMDbOFAOo-s6hmP7n-OhiKq1QsKWnCeosQ3Q/edit#gid=0';
  const API_KEY = 'AIzaSyDlyJ3biGjglA8NFjvDYoZNsiV0FKr8CMc';
  const { rows, isFetching } = useGoogleSpreadsheet(url, API_KEY);
  console.log('', rows)
  // const AllData = rows.map()
  // return AllData;
  return rows
}

const History = (props) => {
  const { isFetching, rows } = props

  const count = useSelector(selectCount);
  let list = useSelector(selectList);
  list = getStaticProps()
  // console.log('', list)
  const dispatch = useDispatch();

  return !list ? (
    <>
      <CircularProgress className={styles.spinner} size={100} />
    </>
  ) : list ? (
    <>
      {/* TODO:redux 後で削除 */}
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
        </button>
      <div className="value">{count}</div>
      <div >redux確認用</div>

      {/* <div>{list[0]['通貨ペア']}</div> */}
      <HistoryTable list={list} className={styles.table} />
    </>
  ) :
      //取得できない/シートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default History;
