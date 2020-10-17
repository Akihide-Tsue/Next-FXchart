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
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

//https://qiita.com/sand/items/d4b6f39b5fe6027064b4

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
  state = { mobileOpen: false, };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    console.log(JSON.stringify(styles(theme)))  // ** (1)
    console.log(theme.breakpoints.up('sm'))     // ** (2)

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'その２', 'その３', 'その４'].map((text, index) => (
            <ListItem button key={index}>
              {/* サイドバーのアイコン設定 */}
              <ListItemIcon>
                {text == 'Inbox' ? <InboxIcon /> : ''}
                {text == 'その２' ? <MailIcon /> : ''}
                {text == 'その３' ? <MailIcon /> : ''}
                {text == 'その４' ? <MailIcon /> : ''}

              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
              classes={{
                paper: classes.drawerPaper,
              }}
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
        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
          </Typography>
        </main> */}
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