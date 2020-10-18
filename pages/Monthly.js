import Spinner from 'react-spinner-material';
import BasicTable from '../components/BasicTable'
import Dashboard from './index2'

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
      <Dashboard >
        {/* {console.log('', rows[0])}
      {rows[0].Month}:{rows[0].Balance} */}
        <BasicTable />
      </Dashboard >
    </>
  ) :
      //シートが空白の場合
      (<Dashboard >
        <span>No Data</span >
      </Dashboard >);
};

export default Monthly;
