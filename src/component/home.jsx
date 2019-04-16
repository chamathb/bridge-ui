/**
 * Created by chamathbogahawatta on 14/04/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({

});

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>home</div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);