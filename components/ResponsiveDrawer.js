import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//Pages
import DashBoard from '../pages/DashBoard';
import CSV from '../pages/CSV';
import TradeHistory from '../pages/TradeHistory';

const drawerWidth = 200; //サイドバー幅

const styles = theme => ({
  root: { display: 'flex', },
  drawer: {
    // background: '#eee',  // 効果なし
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,  // この幅の横に、mainがレイアウトされる。
      flexShrink: 0,   // これが無いと main が Drawer の下に入り込んでしまう
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  InboxIcon: {
    width: 25,
    height: 25,
  },
  toolbar: theme.mixins.toolbar,
  // Override - Drawerの中で  classes={{ paper: classes.drawerPaper, }}
  drawerPaper: {
    width: drawerWidth,   // drawer.widthに合わせないと無駄な空白ができる
    background: '#eee', // 効果あり
  },
  content: {
    // marginLeftでappBarに合わせると画面幅を小さくすると無駄な空白ができる。
    // marginLeft: drawerWidth,  // drawer.flexShrink: 0 を使う
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});


class ResponsiveDrawer extends React.Component {
  state = { mobileOpen: false, menu: 1 };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  onClick = (id) => {
    this.setState(state => ({ menu: id }));

  }

  render() {
    const { classes, theme } = this.props;

    // console.log(JSON.stringify(styles(theme)))
    // console.log(theme.breakpoints.up('sm'))

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key={1} onClick={(e) => { this.onClick(1) }}>
            <ListItemIcon> <InboxIcon className={classes.InboxIcon} /> </ListItemIcon>
            <ListItemText primary={'月別'} />
          </ListItem>
          <Divider />
          <ListItem button key={2} onClick={(e) => { this.onClick(2) }}>
            <ListItemIcon> <InboxIcon className={classes.InboxIcon}/> </ListItemIcon>
            <ListItemText primary={'取引履歴'} />
          </ListItem>
          <Divider />
          <ListItem button key={3} onClick={(e) => { this.onClick(3) }}>
            <ListItemIcon> <InboxIcon className={classes.InboxIcon}/> </ListItemIcon>
            <ListItemText primary={'CSV データ'} />
          </ListItem>
          <Divider />
        </List>
        {/* <Divider />*/}
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              FX chart with Google spreadsheet
            </Typography>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{ paper: classes.drawerPaper, }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        {/* 選択したコンポーネントを表示 */}
        {this.state.menu == 1 && <DashBoard />}
        {this.state.menu == 2 && <TradeHistory />}
        {this.state.menu == 3 && <CSV />}
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);