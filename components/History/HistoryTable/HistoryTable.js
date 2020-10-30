import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function HistoryTable(props) {
  const list = props.list
  let HistoryList = []
  let incomeList = []
  const tableData = () => {
    if (list.length > 1) {
      for (let i = 0; i < list.length; i++) {
        HistoryList.push(<TableBody>
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell align="right">{list[i]['売買']}</TableCell>
            <TableCell align="right">{list[i]['売買損益']}</TableCell>
            <TableCell align="right">{list[i]['新規決済']}</TableCell>
            <TableCell align="right">{list[i]['新規約定価格']}</TableCell>
            <TableCell align="right">{list[i]['注文数量']}</TableCell>
            <TableCell align="right">{list[i]['新規約定価格']}</TableCell>
            <TableCell align="right">{list[i]['約定日時']}</TableCell>
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
    <TableContainer className="wrap" component={Paper} >
      <Table className="wrap" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />{/* id */}
            <TableCell >売買</TableCell>
            <TableCell >売買損益</TableCell>
            <TableCell >新規決済</TableCell>
            <TableCell >新規約定価格</TableCell>
            <TableCell >注文数量</TableCell>
            <TableCell >新規約定価格</TableCell>
            <TableCell >約定日時</TableCell>
          </TableRow>
        </TableHead>
        {tableData()}
      </Table>
    </TableContainer>
  );
}
