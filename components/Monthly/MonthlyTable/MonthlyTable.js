import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import styles from './MonthlyTable.module.scss'

export default function MonthlyTable(props) {
  const rows = props.rows
  let MonthlyList = []

  //年プルダウン
  const [year, setYear] = React.useState(2020);
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  //月プルダウン
  const [month, setMonth] = React.useState(1);
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

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
            <TableCell align="center" className={styles.row}>{rows[i].Memo}</TableCell>
          </TableRow>
        </TableBody>)
      }
    }
    return MonthlyList;
  }

  return (
    <div className={styles.MonthlyWrap}>
      {/* プルダウン年月を選択 */}
      <FormControl
        variant="outlined" c
        className={styles.yearSelect}>
        <InputLabel>年</InputLabel>
        <Select
          value={year}
          onChange={handleChangeYear}
          defaultValue={2020}
          label="年"
        >
          <MenuItem value={2020}>2020年</MenuItem>
          <MenuItem value={2021}>2021年</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        className={styles.monthSelect}>
        <InputLabel>月</InputLabel>
        <Select
          value={month}
          onChange={handleChangeMonth}
          defaultValue={1}
          label="月"
        >
          <MenuItem value={1}>1月</MenuItem>
          <MenuItem value={2}>2月</MenuItem>
        </Select>
      </FormControl>

      {/* メモ入力 */}
      <TextField
        className={styles.textarea}
        label={'Memo'}
        placeholder=""
        multiline
        variant="outlined"
      />
      {/* メモ送信 */}
      <Button
        variant="contained"
        color="primary"
        className={styles.addBtn}
      >
        登録
      </Button >
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
              <TableCell align="center" align="center" className={styles.cell} >Memo</TableCell>
            </TableRow>
          </TableHead>
          {tableData()}
        </Table>
      </TableContainer>
    </div>
  );
}
