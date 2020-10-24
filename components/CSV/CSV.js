import CsvDownload from 'react-json-to-csv'

const CSV = (props) => {
  const rows = props.rows
  return (rows ? (<>
    <div>APIで取得しているCSVデータをダウンロード</div>
    <CsvDownload data={rows} />
  </>
  ) :
    //CSVが取得できなかった場合
    (<span>データを取得できませんでした</span >))
}

export default CSV;
