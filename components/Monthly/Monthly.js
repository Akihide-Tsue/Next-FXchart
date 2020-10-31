import CircularProgress from '@material-ui/core/CircularProgress';
import MonthlyTable from './MonthlyTable/MonthlyTable'

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

// react-hook-form
import { useForm } from 'react-hook-form'
import { MemoForm } from './MemoForm'
import axios from 'axios'

//css module
import styles from './Monthly.module.scss'

const Monthly = (props) => {
  const { isFetching, rows } = props

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
  //メモ
  const [memoData, setMemoData] = React.useState("");
  const handleChangeMemo = event => {
    setMemoData(event.target.value);
  };
  //登録
  const { register, handleSubmit } = useForm({
    mode: 'onClick',
  })

  //登録アクション
  const submit = (year, month, memoData) => {
    // ReactHookFormは、handleSubmitに渡した関数に、
    // registerを利用して登録した各Inputの値をObjectとして渡されてくる。

    const GOOGLE_FORM_ACTION = MemoForm.action
    // CORS対策は必須
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    // PostのParm生成
    const submitParams = new FormData()
    submitParams.append(MemoForm.name1, year)
    submitParams.append(MemoForm.name2, month)
    submitParams.append(MemoForm.name3, memoData)
    // 実行
    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
      .then(() => {
        // console.log('送信内容', submitParams) // 成功時

      })
      .catch((error) => {
        // console.log('登録失敗', error) // 失敗時
      })
  }
  const postMemo = () => {
    // location.reload(true);
    // TODO? 月別データタブをクリック
  }

  return isFetching ? (
    <>
      <CircularProgress className={styles.spinner} size={100} />
    </>
  ) : rows ? (
    <>
      <form noValidate onSubmit={handleSubmit(submit(year, month, memoData))}>
        {/* プルダウン年 */}
        <FormControl
          variant="outlined"
          className={styles.yearSelect}
        >
          <InputLabel>年</InputLabel>
          <Select
            value={year}
            onChange={handleChangeYear}
            label="年"
            name='name1'
            ref={register(year)}
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
            name='name2'
            ref={register()}
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
          value={memoData}
          onChange={handleChangeMemo}
          name='name3'
          ref={register()}
        />
        {/* メモ送信 */}
        <Button
          variant="contained"
          color="primary"
          className={styles.addBtn}
          onClick={postMemo()}
        // onClick={submit(year, month, memoData)}
        >
          登録
      </Button >
      </form>

      {/* テーブルコンポーネント */}
      <MonthlyTable className={styles.table} rows={rows} year={year} />
    </>
  ) :
      //取得できないorシートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default Monthly;
