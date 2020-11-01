import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//css module
import styles from './HistoryTable.module.scss'

export default function HistoryTable(props) {
  const { list } = props
  let HistoryList = []
  let incomeList = []
  const tableData = () => {
    if (list.length > 1) {
      for (let i = 0; i < list.length; i++) {
        HistoryList.push(<TableBody className={styles.body}>
          <TableRow key={i}>
            <TableCell align="center">{i + 1}</TableCell>
            <TableCell align="center" className={styles.row}>{list[i]['売買']}</TableCell>
            <TableCell align="right" className={styles.row}>{"¥ " + Number(list[i]['売買損益']).toLocaleString()}</TableCell>
            <TableCell align="right" className={styles.row}>{list[i]['新規決済']}</TableCell>
            <TableCell align="right" className={styles.row}>{list[i]['新規約定価格']}</TableCell>
            <TableCell align="right" className={styles.row}>{list[i]['注文数量'] / 100000}</TableCell>
            <TableCell align="right" className={styles.row}>{list[i]['新規約定価格']}</TableCell>
            <TableCell align="right" className={styles.row}>{list[i]['約定日時']}</TableCell>
          </TableRow>
        </TableBody>)
        incomeList.push(list[i]['売買損益'])
      }
    }
    const incomeListWithOutNull = incomeList.filter(v => v)
    const incomeListWithNum = incomeListWithOutNull.map(Number)
    const profit = '¥ ' + incomeListWithNum.map(Number)
      .reduce(function (a, x) { return a + ((x || 0) - 0); }, 0).toLocaleString();
    return HistoryList;
  }

  return (
    <TableContainer className="wrap" component={Paper} className={styles.wrap}>
      <Table className="wrap" aria-label="simple table">
        <TableHead className={styles.head}>
          <TableRow>
            <TableCell align="center" className={styles.cell} >No.</TableCell>
            <TableCell align="center" className={styles.cell} >売買</TableCell>
            <TableCell align="center" className={styles.cell} >売買損益</TableCell>
            <TableCell align="center" className={styles.cell} >新規決済</TableCell>
            <TableCell align="center" className={styles.cell} >新規約定価格</TableCell>
            <TableCell align="center" className={styles.cell} >注文数量</TableCell>
            <TableCell align="center" className={styles.cell} >新規約定価格</TableCell>
            <TableCell align="center" className={styles.cell} >約定日時</TableCell>
          </TableRow>
        </TableHead>
        {tableData()}
      </Table>
    </TableContainer>
  );
}
