import CircularProgress from '@material-ui/core/CircularProgress';
import HistoryTable from './HistoryTable/HistoryTable'
//css module
// import styles from './History.module.scss'

const History = (props) => {
  const isFetching = props.isFetching2
  const rows = props.rows2
  return isFetching ? (
    <>
      <CircularProgress className={styles.spinner} size={100} />
    </>
  ) : rows ? (
      <>
      <HistoryTable rows={rows} className={styles.table} />
    </>
  ) :
      //取得できない/シートが空白の場合
      <span>データを取得できませんでした</span >;
};

export default History;
