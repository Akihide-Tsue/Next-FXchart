import CircularProgress from '@material-ui/core/CircularProgress';
import MonthlyTable from './MonthlyTable/MonthlyTable'

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

//css module
import styles from './Monthly.module.scss'

const Monthly = (props) => {
  const isFetching = props.isFetching
  const rows = props.rows

  //年プルダウン
  const years = [2019, 2020, 2021, 2022];
  const presentYear = new Date().getFullYear()
  const [year, setYear] = React.useState(presentYear);
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  //月プルダウン
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const presentMonth = new Date().getMonth()
  const [month, setMonth] = React.useState(presentMonth);
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  return isFetching ? (
    <>
      <CircularProgress className={styles.spinner} size={100} />
    </>
  ) : rows ? (
    <>
      {/* プルダウン年 */}
      <FormControl
        variant="outlined" c
        className={styles.yearSelect}>
        <InputLabel>年</InputLabel>
        <Select
          value={year}
          onChange={handleChangeYear}
          label="年"
        >
          {years.map(option => (
            <MenuItem key={option} value={option}>{option}年</MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* プルダウン月 */}
      <FormControl
        variant="outlined"
        className={styles.monthSelect}>
        <InputLabel>月</InputLabel>
        <Select
          value={month}
          onChange={handleChangeMonth}
          label="月"
        >
          {months.map(option => (
            <MenuItem key={option} value={option}>{option}月</MenuItem>
          ))}
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

      {/* テーブルコンポーネント */}
      <MonthlyTable className={styles.table} rows={rows} year={year} />
    </>
  ) :
      //取得できないorシートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default Monthly;
