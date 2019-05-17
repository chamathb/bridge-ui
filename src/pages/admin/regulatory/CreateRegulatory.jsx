import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import AppHeader from '../../../component/AppHeader/AppHeader';
import MenuDrawer from "../../../component/MenuDrawer/MenuDrawer";
//import CreateClientForm from './forms/CreateClientForm';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';

import CreateRegulatoryForm from "./forms/CreateRegulatoryForm";

const styles = theme => ({
  root : {
    display : 'flex',
      
  },
  content : {
    flexGrow : 1,
    padding : theme.spacing.unit * 3 + 1,
    marginTop : theme.spacing.unit,
    maxWidth : "1024px",
    position : "relative",
    paddingBottom : '100px',
    display : 'flex',

  },
  body: {
    paddingTop : theme.spacing.unit * 6,
    display: 'flex',

  },

  saveButton : {
    marginLeft : '10px',
  },

  buttonContainer:{
    alignItems:'right',
    justifyContent:'flex-end',
    display: 'flex',

  },

  saveButton:{
    marginLeft : '10px',
  },

  buttonContainer: {
    alignItems: 'right',
    justifyContent : 'flex',
    display : 'flex',

  },

  cancelButton : {
    mariginLeft : '10px',

  },
  
  extendedIcon: {
    marginRight : theme.spacing.unit,
  },

  addAnotherClient: {
    marginTop: '8px',
  },
  button: {
    margin: theme.spacing.unit * 2,
  }
});

const valiadtionSchema = Yup.object({

  name:Yup.string("Authority Institution Name")
    .required("Authority Institution Name cannot be empty"),
  testName: Yup.string("Refernce Test Name")
    .required("Reference Test Name cannot be empty"),
  releaseTime: Yup.string("Release Time In Days")
    .required("This field cannot be empty"),
  requirement: Yup.string("Sample Requirement")
    .required("Sample Requiremnt cannot be empty"),
  averageRelease:Yup.string("Average Release Time")
    .required("Average release time cannot be empty"),
  stage:Yup.string("Approval Obtaining Stage")
    .required("Approval obtaing stage cannot be empty"),
  attachements:Yup.array()
    .of(
      Yup.object().shape({
        docName: Yup.string("Document Name")
          .required("Document name cannot be empty"),
        description: Yup.string("Description")
          .required("Description cannot be empty"),
        mandatory : Yup.string("Mandatory")
          .required("Mandatory field cannot be empty"),

      })
    )
});

class CreateRegulatory extends React.Component{
  constructor(props)
  {
    super(props);
    this.state= {
    };
  }

  componentDidMount(){

  }

  render(){
    const{classes}  = this.props;
    const initialValue = {
      name: '',
      testName: '',
      releaseTime: '',
      requirement: '',
      averageRelease: '',
      stage: '',
      attachments: [{
        docName: '',
        description: '',
        mandatory: '',
      }],
    };
    return(
      <div className= {classes.root}>
      <CssBaseline/>
      <AppHeader/>

      <div className = {classes.body}>
      <MenuDrawer />

      <div className = {classes.content}>
      <br/>
      <Grid container spacing = {24}>
        <Grid item xs = {12} md = {12}>
        <Typography variant = "h5">
        Attachements
        </Typography>
        </Grid>
        <Grid>
          <Formik 
            render = {props =>
            <CreateRegulatoryForm {...props} />}
            initialValues= {initialValue}
            validationSchema = {valiadtionSchema}/>
          </Grid>
          </Grid>  
          </div>
        </div>
      </div>
          

    );
  }
}

CreateRegulatory.propTypes = {
  classes: PropTypes.object.isRequired,

};

const mapStateToProps = ({Regulatory}) => {

};

const mapActionToProps = {

};

export default connect (mapStateToProps, mapActionToProps) (withStyles(styles)(CreateRegulatory));