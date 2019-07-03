import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../../../component/AppHeader/AppHeader';
import MenuDrawer from "../../../component/MenuDrawer/MenuDrawer";
import CreateVendorForm from './forms/CreateVendorForm';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3 + 1,
    marginTop: theme.spacing.unit,
    maxWidth: "1024px",
    position: "relative",
    paddingBottom: '100px',
    display: 'flex',
  },
  body: {
    paddingTop: theme.spacing.unit * 6,
    display: 'flex',
  },
  saveButton: {
    marginLeft: '10px',
  },
  buttonContainer: {
    alignItems: 'right',
    justifyContent: 'flex-end',
    display: 'flex',
  },
  cancelButton: {
    marginLeft: '10px',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  addAnotherClient: {
    marginTop: '8px',
  },
});
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class CreateVendor extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  handleSelectChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render(){
    const {classes} = this.props;
    const createClientFormProps = {classes, handleSelectChange: this.handleSelectChange };
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader />
        <div className={classes.body}>
          <MenuDrawer />
          <div className={classes.content}>
            <br />
            <form className={classes.container} noValidate autoComplete="off">
              <CreateVendorForm {...createClientFormProps} />
              <br />
              <Grid container
                    direction="row-reverse"
                    justify="flex-start"
                    alignItems="flex-start">
                <Grid item>
                  <Button variant="contained" color="primary" className={classes.saveButton}>
                      Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.cancelButton}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateVendor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateVendor);