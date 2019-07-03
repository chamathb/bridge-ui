import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import AppHeader from '../../../component/AppHeader/AppHeader';
import MenuDrawer from "../../../component/MenuDrawer/MenuDrawer";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import { getClient, addContact } from './state/Actions';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import CreateForwarderForm from './forms/CreateForwarderForm';

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
  vendor: Yup.string("Vendor Name")
    .required("Name cannot be empty"),
    typeofVendor: Yup.string("type")
    .required("Please select type"),
    address: Yup.string("Address")
    .required("Address cannot be empty"),
    brg: Yup.string()
    .required("Business registration number cannot be empty"),
    tin: Yup.string("TIN")
    .required("TIN cannot be empty"),
    swiftAddress: Yup.string("swiftAddress")
    .required("Swift address cannot be empty"),
  
  
    contactInfo: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string("Name")
          .required("Contact name cannot be empty"),
        designation: Yup.string("desg")
          .required("Designation cannot be empty"),
        contactNum: Yup.string("contact")
          .required("Contact number cannot be empty"),
        email: Yup.string("email")
          .required("email cannot be empty"),
        details: Yup.string("details")
          .required("Contact details cannot be empty"),
        company: Yup.string("company")
          .required("Company name cannot be empty"),
        access: Yup.string ("access")
          .required("Cannot be empty"),
        userName: Yup.string ("userName")
          .required("System user name cannot be empty"),
        types: Yup.string ("type")
          .required("Access Type cannot be empty"),
      })
    )

});

class CreateForwarder extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
     
    };
  }

componentDidMount() {

  }

  render(){
    const {classes} = this.props; //{classes, forwarder}
    //const initialValue = this.state.forwarder;
    const initialForwarder = {
      vendor :"",
      typeofVendor :"",
      address :"",
      brg :"",
      tin :"",
      swiftAddress :"",
      contactInfo:[{}],   
    };


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
                  Forwarder
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Formik
                  render={ props =>
                    <CreateForwarderForm {...props} /> }
                  initialValues={initialForwarder}
                  validationSchema={validationSchema} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

CreateForwarder.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({Forwarder}) => {
};

const mapActionToProps = {
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CreateForwarder));