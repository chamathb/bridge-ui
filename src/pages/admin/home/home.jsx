import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../../../component/AppHeader/AppHeader';
import MenuDrawer from "../../../component/MenuDrawer/MenuDrawer";

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3 + 1,
    marginTop: theme.spacing.unit,
  },
  body: {
    paddingTop: theme.spacing.unit * 6,
    display: 'flex',
  }
});

class AdminHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppHeader />
        <div className={classes.body}>
          <MenuDrawer />
          <div className={classes.content}>
            adasdda sad as dasd sd asdasd adsa
          </div>
        </div>
      </div>
    );
  }
}

AdminHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminHome);