/**
 * Created by chamathbogahawatta on 14/04/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import MenuDrawer from "../../component/MenuDrawer/MenuDrawer";

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class AdminHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    const {classes} = this.props;
    return (
      <div>
        <MenuDrawer />
        <div className={classes.content}>
          <div>Admin Home</div>
        </div>
      </div>

    );
  }
}

AdminHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminHome);