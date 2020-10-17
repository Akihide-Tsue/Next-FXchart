import useGoogleSpreadsheet from 'use-google-spreadsheet';
import Spinner from 'react-spinner-material';
import CsvDownload from 'react-json-to-csv'

const CSV = () => {
  const API_KEY = 'AIzaSyDlyJ3biGjglA8NFjvDYoZNsiV0FKr8CMc';
  const shareUrl = 'https://docs.google.com/spreadsheets/d/13HnYM4pzctjnXAruWXo6aG732X05ga3vGhFgRT7T8Os/edit?usp=sharing';

  const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY);

  return isFetching ? (
    <>
      <Spinner radius={120} color={"#3F52B5"} stroke={8} visible={true} />
    </>
  ) : rows ? (
    <>
      <CsvDownload data={rows} />

      {/* {rows[13]['売買']} */}
      {/* {rows.map((row, i) => {
        if (i > 12 && 15 > i) {
          return (
            <span key={i}>
              {Object.keys(row).map((key, i) => (
                <span key={i}>
                  {key}: {row[key]}
                  <br />
                </span>
              ))}
            </span>
          );
        }
      })} */}

    </>
  ) :
      //シートが空白の場合
      (<span>No Data</span >);
};

export default CSV;
