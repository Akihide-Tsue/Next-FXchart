import CircularProgress from '@material-ui/core/CircularProgress';
import MonthlyTable from './MonthlyTable/MonthlyTable'

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// react-hook-form
import { useForm, Controller } from 'react-hook-form'
import { MemoForm } from './MemoForm'
import axios from 'axios'

//css module
import styles from './Monthly.module.scss'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Monthly = (props) => {
  const { isFetching, rows } = props

  //年プルダウン
  const years = [2019, 2020, 2021];
  const presentYear = new Date().getFullYear()
  const [year, setYear] = React.useState(presentYear);
  const handleChangeYear = (event) => {
    setMemoData("")
    setYear(event.target.value);
  };
  //月プルダウン
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const presentMonth = new Date().getMonth()
  const [month, setMonth] = React.useState(presentMonth);
  const handleChangeMonth = (event) => {
    setMemoData("")
    setMonth(event.target.value);
  };
  //メモ
  const [memoData, setMemoData] = React.useState("");
  const handleChangeMemo = event => {
    setMemoData(event.target.value);
  };
  //登録
  const { register, handleSubmit, errors, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    submitFocusError: true, // エラーのある最初のフィールドがフォーカスされる
  })

  //登録アクション
  const submit = (value) => {
    // ReactHookFormは、handleSubmitに渡した関数に、
    // registerを利用して登録した各Inputの値をObjectとして渡されてくる。
    const GOOGLE_FORM_ACTION = MemoForm.action
    // CORS対策は必須
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    // PostのParm生成
    const submitParams = new FormData()
    submitParams.append(MemoForm.name1, value.name1)
    submitParams.append(MemoForm.name2, value.name2)
    submitParams.append(MemoForm.name3, value.name3)
    // 実行
    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
      .then(() => {
        console.log('送信成功', value) // 成功時
        setOpen(true);//登録完了メッセージ
        setTimeout(location.reload(), 6000);
      })
      .catch((error) => {
        console.log('登録失敗', error) // 失敗時
      })
  }
  const [open, setOpen] = React.useState(false);//snack bar
  return isFetching ? (
    <>
      <CircularProgress className={styles.spinner} size={100} />
    </>
  ) : rows ? (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open} >
        <Alert severity="success" > 登録完了！ </Alert >
      </Snackbar>

      <form noValidate onSubmit={handleSubmit(submit)}>
        {/* プルダウン年 */}
        <FormControl
          variant="outlined"
          className={styles.yearSelect}
        >
          <InputLabel>年</InputLabel>
          <Controller
            control={control}
            name="name1"
            defaultValue={year}
            as={
              <Select
                onChange={handleChangeYear}
                label="年"
                defaultValue={year}
                value={year}
              >
                {years.map(option => (
                  <MenuItem key={option} value={option}>{option}年</MenuItem>
                ))}
              </Select>}
          />
        </FormControl>
        {/* プルダウン月 */}
        <FormControl
          variant="outlined"
          className={styles.monthSelect}>
          <InputLabel>月</InputLabel>
          <Controller
            control={control}
            name="name2"
            defaultValue={month}
            as={
              <Select
                onChange={handleChangeMonth}
                label="月"
                defaultValue={month}
                value={month}
              >
                {months.map(option => (
                  <MenuItem key={option} value={option}>{option}月</MenuItem>
                ))}
              </Select>} />
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
          inputRef={register({ required: true, maxLength: 50 })}
        />
        {/* メモ送信 */}
        <Button
          variant="contained"
          color="primary"
          className={styles.addBtn}
          type="submit"
        >
            登録
      </Button >
          {errors.name3 && errors.name3.type === 'required' && <div className={styles.error}>入力して下さい</div>}
          {errors.name3 && errors.name3.type === 'maxLength' && <div className={styles.error}>50文字以下で登録して下さい</div>}
      </form>

      {/* テーブルコンポーネント */}
      <MonthlyTable className={styles.table} rows={rows} year={year} />
    </>
  ) :
      //取得できないorシートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default Monthly;
