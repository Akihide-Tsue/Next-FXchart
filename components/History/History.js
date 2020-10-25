import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // decrement,
  increment,
  // incrementByAmount,
  // incrementAsync,
  selectCount,
} from '../../app/historySlice';

import CircularProgress from '@material-ui/core/CircularProgress';
import HistoryTable from './HistoryTable/HistoryTable'
//css module
// import styles from './History.module.scss'

const History = (props) => {
  const isFetching = props.isFetching
  const rows = props.rows

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  return isFetching ? (
    <>
      <CircularProgress className="spinner" size={100} />
    </>
  ) : rows ? (
    <>
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
        </button>
      <span className="value">{count}</span>
    </>
  ) :
      //取得できない/シートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default History;
