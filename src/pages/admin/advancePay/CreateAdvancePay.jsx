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
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import CreateAdvancePayForm from './forms/CreateAdvancePayForm';


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
  supplier : Yup.string("Supplier")
    .required("supplier cannot be empty"),
    supplierPiNum : Yup.string("Supplier PI Number")
    .required(),
    amount : Yup.string("Amount")
    .required("Amount cannot be empty"),
    remittingB :Yup.string("Remitting Bank (Local)")
    .required("Remiting Bank field cannot be empty"),
    bank: Yup.string ("Bank Name")
    .required("Bank Name cannot be empty"),
    address : Yup.string("Bank Address"),
    date: Yup.string("Payment Date")
    .required("Payment Date cannot be empty"),
    reference : Yup.string("Remittence Reference")
    .required("Remitted Reference field cannot be empty"),

    purchase : Yup.array()
    .of(
      Yup.object().shape({
        orderNum : Yup.string("Client Purchase Order Number")
        .required("Client Purchase Order Number cannot be empty"),
        order : Yup.string ("Purchase Order")
        .required("Purchase Order cannot be empty"),
        line : Yup.string ("Line No")
        .required("Line No cannot be empty"),
        item : Yup.string ("Item")
        .required("Item cannot be empty"),
        quantity :Yup.string ("Line Quantity")
        .required("Line Quantity cannot be empty"),
        amount :Yup.string ("Amount")
        .required("Amount cannot be empty"),
        received : Yup.string ("Received Ammount")
        .required("Received Ammount cannot be empty"),
        remaining : Yup.string("Remaining Amount")
        .required("Remaining Ammount cannot be empty"),
        incoterm : Yup.string("Incoterm")
        .required("Incoterm cannot be empty"),
        
      })
    )

});

class CreateAdvancePay extends React.Component {
  constructor(props){
    super(props);
    this.state={

    };
  }

  componentDidMount(){

  }

  render(){
    const {classes} = this.props;
    const initailAdvancePay = {
      supplier: "",
      supplierPiNum: "",
      amount:"",
      remittingB:"",
      bank :"",
      address :"",
      date : "",
      reference :"",
        purchase :[{}]

    };

    return (
      <div className = {classes.root}>
        <CssBaseline />
        <AppHeader />

        <div className = {classes.body}>
          <MenuDrawer/>
          <div className = {classes.content}>
            <br />
            <Grid container spacing = {24}>
              <Grid item xs ={12} md = {12}>
                <Typography variant = "h5">
                  Advance Payment
                </Typography>
              </Grid>

              <Grid item xs = {12} md = {12}>
                <Formik render = {props =>
                    <CreateAdvancePayForm {...props} />}
                    initialValues = {initailAdvancePay}
                    validationSchema  = {validationSchema} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

CreateAdvancePay.propTypes = {
  classes :PropTypes.object.isRequired,
};

const mapStateToProps = ({AdvancePay}) => {
};

const mapActionToProps  = {

};

export default connect(mapStateToProps,mapActionToProps) (withStyles(styles)(CreateAdvancePay));
