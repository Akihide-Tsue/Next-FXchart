import Spinner from 'react-spinner-material';
import BasicTable from '../components/BasicTable'


const Monthly = (props) => {
  const isFetching = props.isFetching
  const rows = props.rows
  console.log(rows)

  return isFetching ? (
    <>
      <Spinner radius={120} color={"#2A8948"} stroke={8} visible={true} />
    </>
  ) : rows ? (
    <>

      {/* {console.log('', rows[0])}
      {rows[0].Month}:{rows[0].Balance} */}
      <BasicTable />

    </>
  ) :
      //シートが空白の場合
      (
        <span>No Data</span >
      );
};

export default Monthly;
