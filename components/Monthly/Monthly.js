import CircularProgress from '@material-ui/core/CircularProgress';
import MonthlyTable from './MonthlyTable/MonthlyTable'
//css module
import styles from './Monthly.module.scss'

const Monthly = (props) => {
  const isFetching = props.isFetching
  const rows = props.rows
  console.log('', props)
  return isFetching ? (
    <>
      <CircularProgress className={styles.spinner} size={100} />
    </>
  ) : rows ? (
    <>
        <MonthlyTable rows={rows} className={styles.table}/>
    </>
  ) :
      //取得できない/シートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default Monthly;
