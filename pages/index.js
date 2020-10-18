import React from 'react'
import SidePanel from '../components/SidePanel'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function index() {
  return (
    <>
      <AppBar className="header">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            FX chart with Google spreadsheet
          </Typography>
        </Toolbar>
      </AppBar >

      <SidePanel />

      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
