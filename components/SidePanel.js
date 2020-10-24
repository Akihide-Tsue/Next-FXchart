import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

//各タブ
import Monthly from './Monthly';
import About from './About';
import CSV from './CSV';
import Achievement from './Achievement';
import useGoogleSpreadsheet from 'use-google-spreadsheet';//API

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
        <Box p={3}>
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='root'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical"
        className='tabs'
        textColor="primary"
        indicatorColor="primary"
        selectionFollowsFocus={true}
      >
        <Tab label="概要" {...a11yProps(0)} />
        <Tab label="月別" {...a11yProps(1)} />
        <Tab label="全データ" {...a11yProps(2)} />
        <Tab label="ダウンロード" {...a11yProps(3)} />
        <Tab label="達成率確認" {...a11yProps(4)} />
        {/* <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0} className="TabPanel">
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Monthly rows={rows} isFetching={isFetching} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CSV rows={rows} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Achievement />
      </TabPanel>
      {/* <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}

      <style jsx>{`
        .root {
          flex-grow: 1;
          // background-color: #eeee;//indexjsのみで
          display: flex;
          height: 100vh;
          margin-top:80px; //header高さ
        },
        `}</style>
    </div>
  );
}