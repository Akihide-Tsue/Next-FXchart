import CsvDownload from 'react-json-to-csv'
import styles from './CSV.module.scss'

const CSV = (props) => {
  const { rows } = props

  return (rows ? (<>
    <div className={styles.title}>APIで取得しているCSVデータをダウンロード</div>
    <CsvDownload data={rows} className={styles.download} />
  </>
  ) :
    //CSVが取得できなかった場合
    (<span>データを取得できませんでした</span >))
}

export default CSV;
