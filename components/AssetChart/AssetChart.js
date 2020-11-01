import Chart from "react-google-charts";

const AssetChart = () => {

  return (
    <>
      <div>達成率</div>
      <Chart
        chartType="ScatterChart"
        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
        options={{
          hAxis: {
            format: 'short',
          },
          vAxis: {
            format: 'decimal',
            // format:'scientific'
            // format:'long'
            // format:'percent'
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </>
  )
}

export default AssetChart;
