import React, { useState } from 'react';
import Chart from "react-google-charts";
import TextField from '@material-ui/core/TextField';

const AssetChart = () => {
  const amount2020 = 612252  // TODO:仮データ
  const [interest, setInterest] = useState(0);

  let [amount2021, setAmount2021] = useState(0);
  const { amount2022, amount2023, amount2024, amount2025 } = 0
  const handleChange2020 = (event) => {
    setInterest(event.target.value);
    amount2021 = amount2020 * (1 + interest / 100) * 1
    console.log('amount2021', amount2021)
  };

  // function return(<Chart>を返す　再レンダリング)

  return (
    <>
      <TextField
        // className={styles.textarea}
        label={'%'}
        placeholder=""
        variant="outlined"
        value={interest}
        onChange={handleChange2020}
      />
      {/* 元金 a，年利率 r，年数 n，元金+利回り b */}
      {/* b=a(1+r)n */}
      {/* 2021答 = 2020現在の額(1+value)*1 */}
      {/* 2022答 = 2021答(1+value)*2 */}
      {/* 2023答 = 2022答(1+value)*3 */}


      <Chart
        // width={'500px'}
        // height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Year', 'asset'],
          ['2020', amount2020,],
          ['2021', amount2021,],
          ['2022', amount2022,],
          ['2023', amount2023,],
          ['2024', amount2024,],
          ['2025', amount2025,],
        ]}
        options={{
          // Material design options
          chart: {
            // title: 'Company Performance',
            // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
        }}
      // For tests
      // rootProps={{ 'data-testid': '2' }}
      />
    </>
  )
}

export default AssetChart;
