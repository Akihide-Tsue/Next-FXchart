import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from './MonthlyTable.module.scss'

export default function MonthlyTable(props) {
  const { rows, year } = props
  let MonthlyList = []
  //TODO:年で表示データを変更する

  const tableData = () => {
    if (rows.length > 1) {
      for (let i = 0; i < 13; i++) {
        MonthlyList.push(<TableBody className={styles.body}>
          <TableRow key={rows[i].id} >
            <TableCell align="center" className={styles.row}>{rows[i].月}</TableCell>
            <TableCell align="right" className={styles.row}>{rows[i].取引損益}</TableCell>
            <TableCell align="right" className={styles.row}>{rows[i].スワップ}</TableCell>
            <TableCell align="right" className={styles.row}>{rows[i].合計}</TableCell>
            <TableCell align="right" className={styles.row}>{rows[i].月末資産額}</TableCell>
            <TableCell align="right" className={styles.row}>{rows[i].対資産伸率}</TableCell>
            <TableCell className={styles.row}>{rows[i].Memo}</TableCell>
          </TableRow>
        </TableBody>)
      }
    }
    return MonthlyList;
  }

  return (
    <div className={styles.MonthlyWrap}>
      <TableContainer className={styles.wrap} component={Paper} >
        <Table aria-label="simple table">
          <TableHead className={styles.head}>
            <TableRow >
              <TableCell align="center" className={styles.cell} />{/* 月 */}
              <TableCell align="center" className={styles.cell} >取引損益</TableCell>
              <TableCell align="center" className={styles.cell} >スワップ</TableCell>
              <TableCell align="center" className={styles.cell} >合計損益</TableCell>
              <TableCell align="center" className={styles.cell} >月末資産</TableCell>
              <TableCell align="center" className={styles.cell} >前月比</TableCell>
              <TableCell align="center" className={styles.cell} >Memo</TableCell>
            </TableRow>
          </TableHead>
          {tableData()}
        </Table>
      </TableContainer>
    </div>
  );
}
