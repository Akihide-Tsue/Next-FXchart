import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



// const useStyles = makeStyles({
//   table: {
//     // minWidth: 650,
//     // marginTop: 100,
//   },
// });

function createData(name, Balance, Long, Short, Swap) {
  return { name, Balance, Long, Short, Swap };
}



export default function BasicTable(props) {
  // const classes = useStyles();
  const rows = props.rows

  const tableData = () => {
    let list = []
    if (rows) {
      for (let i = 0; rows.length < 11; i++) {
        list.concat(createData[props.rows[i].Month, props.rows[i].Balance, 6.0, 24, 4.0])
      }
      console.log('list', rows.length,list);
      return list
    }
  }

  // const list = () => {
  //   for (let i = 0; props.rows.length < 11; i++) {
  //     console.log('', props.rows[i].Month, list);
  //     return rows.push(createData(props.rows[i].Month, props.rows[i].Long, props.rows[i].Short, props.rows[i].Swap))
  //   }
  // }

  console.log('', tableData());
  return (
    <TableContainer className="wrap" component={Paper} >
      <Table className="wrap"  aria-label="simple table">
        {/* <Table className='table' aria-label="simple table"> */}
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Long</TableCell>
            <TableCell align="right">Short</TableCell>
            <TableCell align="right">Swap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData().map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Balance}</TableCell>
              <TableCell align="right">{row.Long}</TableCell>
              <TableCell align="right">{row.Short}</TableCell>
              <TableCell align="right">{row.Swap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
