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
import CreateIncotermForm from './forms/CreateIncotermForm';

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
})




const validationSchema = Yup.object({
  incoterm : Yup.array()
.of(
  Yup.object().shape({
    incotermCol:Yup.string("Incoterm")
    .required("Incoterm cannot be empty"),
    description : Yup.string("Description")
    .required("Description cannot be empty"),
    instatus:Yup.string("Status")
    .required("Status cannot be empty"),
  })
)
})



class CreateIncoterm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
  

    };
  }


  render() {

    const {classes} = this.props;
    const initialIncoterm = {
     
     
      incoterms : [{}],
    
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
                  Incoterm
                </Typography>
              </Grid>
              <Grid item xs = {12} md ={12}>
                <Formik
                  render={props =>
                    <CreateIncotermForm {...props} />}
                  initialValues={initialIncoterm}  ///regulatory need to be rename
                  validationSchema={validationSchema} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>


    );

}

    
    
  

}


CreateIncoterm.propTypes = {
  classes: PropTypes.object.isRequired,

};

const mapStateToProps = ({MasterIncoterm}) => {

};

const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CreateIncoterm));




