import useGoogleSpreadsheet from 'use-google-spreadsheet';
import Spinner from 'react-spinner-material';

const DashBoard = ({ }) => {
  const API_KEY = 'AIzaSyDlyJ3biGjglA8NFjvDYoZNsiV0FKr8CMc';
  // const shareUrl = 'https://docs.google.com/spreadsheets/d/13HnYM4pzctjnXAruWXo6aG732X05ga3vGhFgRT7T8Os/edit?usp=sharing';
  const shareUrl = 'https://docs.google.com/spreadsheets/d/13HnYM4pzctjnXAruWXo6aG732X05ga3vGhFgRT7T8Os/edit#gid=1853289082&range=A1:E13'; //範囲限定

  const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY);
  console.log(rows, isFetching)

  return isFetching ? (
    <Spinner radius={120} color={"#2A8948"} stroke={3} visible={true} />
  ) : rows ? (
    <ul>
      {rows.map((row, i) => {
        if (i < 12) {
          return (
            <li key={i}>
              {Object.keys(row).map((key, i) => (
                <span key={i}>
                  {key}: {row[key]}
                  <br />
                </span>
              ))}
            </li>
          );
        }
      })}
    </ul>
  ) : (
        <span>No Data</span >
      );
};

export default DashBoard;
