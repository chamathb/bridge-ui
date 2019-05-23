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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from 'react-router-dom';



const styles = theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'flex-start',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: theme.drawer.width,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: theme.drawer.width,
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
  menuItem: {
    whiteSpace: "normal",
  },
  toggleButton: {
    justifyContent: 'flex-end',
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

class MenuDrawer extends React.Component {
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

  toggleDrawer = () => {
    this.setState(prevState=>({ drawerOpened: !prevState.drawerOpened }))
  };

  isDrawerOpen = () => {
    return this.state.drawerOpened
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.drawerOpened,
            [classes.drawerClose]: !this.state.drawerOpened,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.drawerOpened,
              [classes.drawerClose]: !this.state.drawerOpened,
            }),
          }}
          open={this.state.drawerOpened}
        >

          <div className={classes.spacer}>
          </div>
          <Divider />

          <List>

            <Tooltip title={ !this.state.drawerOpened ? "Expand" : "Collapse" } >
              <ListItem button className={classes.toggleButton} onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    { !this.state.drawerOpened ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </ListItemIcon>
              </ListItem>
            </Tooltip>
            <Divider />
            <Tooltip title="Create Material" aria-label="Create Material">
              <ListItem classes={{root:classes.menuItem, selected: 'selected'}} button key="Create Material">
                <ListItemIcon className={classes.menuItemIcon}><MaterialIcon /></ListItemIcon>
                <ListItemText primary={
                  <Typography className={classes.menuItemText} >Create Material</Typography>
                } />
              </ListItem>
            </Tooltip>
            <Tooltip title="Create Client" aria-label="Create Client">
              <ListItem classes={{root:classes.menuItem, selected: 'selected'}} button key="Create Client" component={Link}
                        to='/admin/manage/add-client'
                        selected={this.props.location.pathname === '/admin/manage/add-client'} >
                <ListItemIcon className={classes.menuItemIcon}><ClientIcon /></ListItemIcon>
                <ListItemText primary={
                  <Typography className={classes.menuItemText} >Create Client</Typography>
                } />
              </ListItem>
            </Tooltip>
            <Tooltip title="Create Vendor" aria-label="Create Vendor">
              <ListItem  classes={{root:classes.menuItem, selected: 'selected'}} button key="Create Vendor" component={Link}
                         to='/admin/manage/add-vendor'
                         selected={this.props.location.pathname === '/admin/manage/add-vendor'} >
                <ListItemIcon className={classes.menuItemIcon}><VendorIcon /></ListItemIcon>
                <ListItemText primary={
                  <Typography className={classes.menuItemText} >Create Vendor</Typography>
                } />
              </ListItem>
            </Tooltip>
            <Tooltip title="Create Regulatory Approval" aria-label="Create Regulatory Approval">
              <ListItem  classes={{root:classes.menuItem, selected: 'selected'}} button key="Create Regulatory Approval" component={Link}
                        to='/admin/manage/add-regulatory'
                        selected = {this.props.location.pathname === '/admin/manage/add-regulatory'}>
                <ListItemIcon className={classes.menuItemIcon}><RegulatoryApprovalIcon /></ListItemIcon>
                <ListItemText primary={
                  <Typography className={classes.menuItemText} >Create Regulatory Approval</Typography>
                } />
                 </ListItem>
            </Tooltip>

            <Tooltip title="Create Forwarder" aria-label="Create Forwarder">
              <ListItem  classes={{root:classes.menuItem, selected: 'selected'}} button key="Create Vendor" component={Link}
                         to='/admin/manage/add-forwarder'
                         selected = {this.props.location.pathname === '/admin/manage/add-forwarder'}>
                  <ListItemIcon className={classes.menuItemIcon}><VendorIcon /></ListItemIcon>
                <ListItemText primary={
                  <Typography className={classes.menuItemText} >Create Forwarder</Typography>
                } />
              </ListItem>
            </Tooltip>

          </List>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withRouter(MenuDrawer));