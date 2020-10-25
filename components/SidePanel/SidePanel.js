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
import Achievement from '../Achievement/Achievement';
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
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
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

  //APIデータ:CSVデータ
  // const url2 = 'https://docs.google.com/spreadsheets/d/1TP8egieQMDbOFAOo-s6hmP7n-OhiKq1QsKWnCeosQ3Q/edit#gid=0';
  // // const API_KEY2 = 'AIzaSyDlyJ3biGjglA8NFjvDYoZNsiV0FKr8CMc';
  // const { rows2, isFetching2 } = useGoogleSpreadsheet(url2, API_KEY);
  // console.log('rows2',)

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
        <Tab label="概要" {...a11yProps(0)} />
        <Tab label="月別" {...a11yProps(1)} />
        <Tab label="全データ" {...a11yProps(2)} />
        <Tab label="ダウンロード" {...a11yProps(3)} />
        <Tab label="達成率" {...a11yProps(4)} />
        <Tab label="チャート" {...a11yProps(5)} />
        {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>

      {/* 概要 */}
      <TabPanel value={value} index={0}>
        <Layout>
          <About />
        </Layout>
      </TabPanel>

      {/* 月別 */}
      <TabPanel value={value} index={1}>
        <Layout>
          <Monthly rows={rows} isFetching={isFetching} />
        </Layout>
      </TabPanel>

      {/* 全データ */}
      <TabPanel value={value} index={2}>
        <Layout>
          <History rows={rows} isFetching={isFetching} />
        </Layout>
      </TabPanel>

      {/* ダウンロード */}
      <TabPanel value={value} index={3}>
        <Layout>
          <CSV rows={rows} />
        </Layout>
      </TabPanel>

      {/* 達成率確認 */}
      <TabPanel value={value} index={4}>
        <Layout>
          <Achievement />
        </Layout>
      </TabPanel>

      {/* <TabPanel value={value} index={5}>
        <Layout>
        </Layout>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Layout>
        </Layout>
      </TabPanel> */}
    </div>
  );
}