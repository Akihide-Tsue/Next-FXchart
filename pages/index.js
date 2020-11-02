import React from 'react'
import Head from '../components/Head';
import { Provider } from 'react-redux';
import store from '../app/store';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SidePanel from '../components/SidePanel/SidePanel'

export default function index() {
  return (
    <Provider store={store}>
      <Head
        title={'FX収支'}
        description={'YJFXの 約定履歴>CSVダウンロード からデータを取得し取引の傾向を分析するツール'}
        keyword={'FX,トレード分析'}
        image={'https://tsue-gatsby.web.app/static/headerIcon-08458926b8520975948d225126d4056b.png'}
        url={'https://fx-chart-next.web.app/'}
      />
      <AppBar className="header">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            FX chart with Google spreadsheet
          </Typography>
        </Toolbar>
      </AppBar >

      <SidePanel />

      {/* globalなcss:基本はcomponent/layout.module.scssに */}
      {/* _app.jsで読み込んでもOK */}
      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
          background-color:#eeee;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Provider>
  )
}
