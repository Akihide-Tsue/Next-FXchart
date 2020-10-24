import Spinner from 'react-spinner-material';
import BasicTable from './BasicTable/BasicTable'
import Layout from './layout'

const Monthly = (props) => {
  const isFetching = props.isFetching
  const rows = props.rows
  console.log(rows)

  return isFetching ? (
    <Layout>
      <Spinner radius={120} color={"#2A8948"} stroke={8} visible={true} />
    </Layout>
  ) : rows ? (
      <Layout>

      {/* {console.log('', rows[0])}
      {rows[0].Month}:{rows[0].Balance} */}
        <BasicTable rows={rows}/>

      </Layout>
  ) :
      //シートが空白の場合
      (
        <span>No Data</span >
      );
};

export default Monthly;
