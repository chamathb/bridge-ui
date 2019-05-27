import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import AppHeader from '../../../component/AppHeader/AppHeader';
import MenuDrawer from "../../../component/MenuDrawer/MenuDrawer";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { render } from 'react-dom';
import CreatePaymentTermsForm from './forms/CreatePaymentTermsForm';


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

  saveButton: {
    marginLeft: '10px',
  },

  buttonContainer: {
    alignItems: 'right',
    justifyContent: 'flex',
    display: 'flex',

  },

  cancelButton: {
    mariginLeft: '10px',

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


  paymentTerms : Yup.array()
      .of(
        Yup.object().shape({
          payementTerm: Yup.string("Payment Term")
          .required("Payment Term cannot be empty"),
          due: Yup.string("Due")
          .required("Due cannot be empty"),
          cDate: Yup.string("Due Calculation Date")
          .required("Due calculation date cannot be empty"),
          pstatus: Yup.string("Status")
          .required("Status cannot be empty"),

        })
      )
})


class CreatePayment extends React.Component {
  constructor(props) {
    super(props);
    this.state={
  

    };
  }
  componentDidMount() {

  }

  render() {

    const {classes} = this.props;
    const initialPayment = {
     
      paymentTerms:[{}],
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
                  Payment Term
                </Typography>
              </Grid>
              <Grid item xs = {12} md ={12}>
                <Formik
                  render={props =>
                    <CreatePaymentTermsForm {...props} />}
                  initialValues={initialPayment}  ///regulatory need to be rename
                  validationSchema={validationSchema} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>


    );
  }

}


CreatePayment.propTypes = {
  classes: PropTypes.object.isRequired,

};

const mapStateToProps = ({MasterPayment}) => {

};

const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CreatePayment));




