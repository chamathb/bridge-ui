/**
 * Created by chamathbogahawatta on 20/04/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MaterialIcon from '@material-ui/icons/AllInboxRounded';
import VendorIcon from '@material-ui/icons/AccountBalanceRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClientIcon from '@material-ui/icons/BusinessCenterRounded';
import Tooltip from '@material-ui/core/Tooltip';
import RegulatoryApprovalIcon from '@material-ui/icons/GavelRounded';
import {withRouter, Redirect } from 'react-router-dom';


const drawerWidth = 230;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 30,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 6 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 8 + 1,
    },
  },
  spacer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 2px',
    "min-height": "50px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit,
  },
  menuItem: {
    whiteSpace: "normal",
  },
  menuItemText: {
    color: "#424242",
    textOverflow: "ellipsis",
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  menuItemIcon: {
    "margin-left": "4px",
    "margin-right": "8px",
  },
});

class AppHeader extends React.Component {
  /*state = {
   open: false,
   };*/

  /*handleDrawerOpen = () => {
   this.setState({ open: true });
   };

   handleDrawerClose = () => {
   this.setState({ open: false });
   };*/
  constructor(props){
    super(props);
    this.state = { drawerOpened: false };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer = (prevState) => {
    this.setState(prevState=>({ drawerOpened: !prevState.drawerOpened }))
  };

  render() {
    const { classes, theme } = this.props;

    return (
        <AppBar
          position="fixed"
          className={classNames(classes.appBar)}
        >
          <Toolbar disableGutters={!this.state.drawerOpened}>
            <Typography variant="h6" color="inherit" noWrap>
              Bridge
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withRouter(AppHeader));