import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import AppHeader from '../../../component/AppHeader/AppHeader';
import MenuDrawer from "../../../component/MenuDrawer/MenuDrawer";
import CreateClientForm from './forms/CreateClientForm';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { getClient, addContact } from './state/Actions';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ClientContactForm from './forms/ClientContactForm';

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
  button: {
    margin: theme.spacing.unit * 2,
  }
});

const validationSchema = Yup.object({
  name: Yup.string("Name")
    .required("Name cannot be empty"),
  brg: Yup.string("Business Registration Number")
    .required("Business registration number cannot be empty"),
  address: Yup.string("Address")
    .required("Address cannot be empty"),
  vat: Yup.string("VAT")
    .required("VAT cannot be empty"),
  tin: Yup.string("TIN")
    .required("TIN cannot be empty"),
  contacts: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string("Name")
          .required("Contact name cannot be empty"),
        designation: Yup.string("Designation")
          .required("Designation cannot be empty"),
        mobile: Yup.string("mobile")
          .required("Contact number cannot be empty"),
        email: Yup.string("Name")
          .required("email cannot be empty"),
        details: Yup.string("Name"),
      })
    )

});

class CreateClient extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      client: {
        name: '',
        brg: '',
        address: '',
        vat: '',
        tin: '',
        contacts: [{
          name: '',
          designation:'',
          mobile: '',
          email: '',
          details: '',
        }]
      },
    };
  }

  componentDidMount() {

  }

  render(){
    const {classes, client} = this.props;
    const initialValue = this.state.client;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader />
        <div className={classes.body}>
          <MenuDrawer />
          <div className={classes.content}>
            <br />
            <Grid container spacing={24}>
              <Grid item xs={12} md={12}>
                <Typography variant="h5">
                  Client Management
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Formik
                  render={ props =>
                    <CreateClientForm {...props} /> }
                  initialValues={initialValue}
                  validationSchema={validationSchema} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

CreateClient.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({Client}) => {
};

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(CreateClient));