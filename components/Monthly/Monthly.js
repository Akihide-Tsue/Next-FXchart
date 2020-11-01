import CircularProgress from '@material-ui/core/CircularProgress';
import MonthlyTable from './MonthlyTable/MonthlyTable'
import MemoForm from './MemoForm/MemoForm'

//css module
import styles from './Monthly.module.scss'

const Monthly = (props) => {
  const { isFetching, rows } = props

  const presentYear = new Date().getFullYear()
  const [year, setYear] = React.useState(presentYear);
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  return isFetching ? (
    <>
      <CircularProgress className={styles.spinner} size={100} />
    </>
  ) : rows ? (
    <>
      {/* memo登録欄 */}
        <MemoForm onChangeYear={handleChangeYear} year={year}/>
      {/* 月別一覧表 */}
      <MonthlyTable className={styles.table} rows={rows} year={year} />
    </>
  ) :
      //取得できないorシートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default Monthly;
