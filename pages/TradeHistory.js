import Spinner from 'react-spinner-material';

const DashBoard = (props) => {
  const isFetching = props.isFetching
  const rows = props.rows

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
