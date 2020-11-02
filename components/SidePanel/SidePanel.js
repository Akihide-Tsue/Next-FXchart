import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
//各タブ
import Monthly from '../Monthly/Monthly';
import About from '../About/About';
import CSV from '../CSV/CSV';
import AssetChart from '../AssetChart/AssetChart';
import History from '../History/History';
//API
import useGoogleSpreadsheet from 'use-google-spreadsheet';
//css module
import Layout from '../layout/layout'
import styles from './SidePanel.module.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      className={styles.label}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function SidePanel() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //APIデータ:12ヶ月分
  const shareUrl = 'https://docs.google.com/spreadsheets/d/13HnYM4pzctjnXAruWXo6aG732X05ga3vGhFgRT7T8Os/edit?usp=sharing';
  const API_KEY = 'AIzaSyDlyJ3biGjglA8NFjvDYoZNsiV0FKr8CMc';
  const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY);
  console.log('rows', rows)

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical"
        className={styles.SidePanel}
        textColor="primary"
        indicatorColor="primary"
        selectionFollowsFocus={true}
      >
        <Tab label="概要" className={styles.label} {...a11yProps(0)} />
        <Tab label="月別データ" className={styles.label} {...a11yProps(1)} />
        <Tab label="全データ" className={styles.label} {...a11yProps(2)} />
        <Tab label="ダウンロード" className={styles.label} {...a11yProps(3)} />
        <Tab label="資産推移" className={styles.label} {...a11yProps(4)} />
        <Tab label="取引分析" className={styles.label} {...a11yProps(5)} />
        <Tab label="証拠金維持率" className={styles.label} {...a11yProps(6)} />
      </Tabs>

      {/* 概要 */}
      <TabPanel value={value} index={0} className={styles.panel}>
        <Layout>
          <About />
        </Layout>
      </TabPanel>

      {/* 月別 */}
      <TabPanel value={value} index={1} className={styles.panel}>
        <Layout>
          <Monthly rows={rows} isFetching={isFetching} />
        </Layout>
      </TabPanel>

      {/* 全データ */}
      <TabPanel value={value} index={2} className={styles.panel}>
        <Layout>
          <History rows={rows} isFetching={isFetching} />
        </Layout>
      </TabPanel>

      {/* ダウンロード */}
      <TabPanel value={value} index={3} className={styles.panel}>
        <Layout>
          <CSV rows={rows} />
        </Layout>
      </TabPanel>

      {/* 資産推移 */}
      <TabPanel value={value} index={4} className={styles.panel}>
        <Layout>
          <AssetChart />
        </Layout>
      </TabPanel>

      {/* 取引分析 */}
      <TabPanel value={value} index={5} className={styles.panel}>
        <Layout>
          <div>実装予定</div>
          <div>SL別　取引枚数をチャート化</div>
          <div>SL別　取れたpipをチャート化</div>
          <div>SL別　保持日数と平均線をチャート化</div>
        </Layout>
      </TabPanel>

      {/* 証拠金維持率　*/}
      <TabPanel value={value} index={6} className={styles.panel}>
        <Layout>
          <div>実装予定</div>
          <div>1枚あたりの比率、最適取引数量計算</div>
          <div>現在のZarレートを表示（取得API検討）</div>
        </Layout>
      </TabPanel>
    </div>
  );
}
