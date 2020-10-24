import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function HistoryTable(props) {
  const rows = props.rows
  let MonthlyList = []//TODO
  const tableData = () => {
    if (rows.length > 1) {
      for (let i = 0; i < 13; i++) {
        MonthlyList.push(<TableBody>
          <TableRow key={rows[i].id}>
            <TableCell>{rows[i].Month}</TableCell>
            <TableCell align="right">{rows[i].Balance}</TableCell>
            <TableCell align="right">{rows[i].Long}</TableCell>
            <TableCell align="right">{rows[i].Short}</TableCell>
            <TableCell align="right">{rows[i].Swap}</TableCell>
          </TableRow>
        </TableBody>)
      }
    }
    return MonthlyList;
  }

  return (
    <TableContainer className="wrap" component={Paper} >
      <Table className="wrap" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />{/* 月 */}
            <TableCell >Balance</TableCell>
            <TableCell >Long</TableCell>
            <TableCell >Short</TableCell>
            <TableCell >Swap</TableCell>
          </TableRow>
        </TableHead>
        {tableData()}
      </Table>
    </TableContainer>
  );
}
