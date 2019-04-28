/**
 * Created by chamathbogahawatta on 14/04/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../../component/AppHeader/AppHeader';
import MenuDrawer from "../../component/MenuDrawer/MenuDrawer";

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
  },
});

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppHeader />
        <MenuDrawer />
        <main className={classes.content}>
          <div className={classes.content}>
            adasdda sad as dasd sd asdasd adsa
          </div>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);