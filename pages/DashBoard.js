import useGoogleSpreadsheet from 'use-google-spreadsheet';
import Spinner from 'react-spinner-material';

const DashBoard = ({ }) => {
  const API_KEY = 'AIzaSyDlyJ3biGjglA8NFjvDYoZNsiV0FKr8CMc';
  const shareUrl = 'https://docs.google.com/spreadsheets/d/13HnYM4pzctjnXAruWXo6aG732X05ga3vGhFgRT7T8Os/edit?usp=sharing';

  const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY);
  // console.log(rows)

  return isFetching ? (
    <>
      {/* ローディング中 stroke=太さ */}
      <Spinner radius={120} color={"#2A8948"} stroke={8} visible={true} />
    </>
  ) : rows ? (
    <>

      {console.log('', rows[0])}
      {rows[0].Month}:{rows[0].Balance}

    </>
  ) :
      //シートが空白の場合
      (<span>No Data</span >);
};

export default DashBoard;
