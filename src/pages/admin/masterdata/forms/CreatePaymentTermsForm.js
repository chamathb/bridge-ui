import React from 'react';
import { FieldArray, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';

import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


const CreatePaymentPaper = withStyles ({
  root : {
    backgroundColor : 'transparent',
    borderColor : 'red',
    border :'1',
  }
}) (Paper);

const CreatePaymentTermsForm = props => {
  const {
    values : {

      paymentTerms
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;





  const newTerms  = {payment : "", due : "" , calDate : "", pstatus : ""};
  return (


    <form onSubmit = {handleSubmit}>
        <Grid container spacing = {24}>
        </Grid>

         
        <Divider variant = "middle" />
         <br/>

         <FieldArray
          name = "paymentTerms"
          render = {arrayHelpers => (

              <div>
              <Grid container direction = "row" justify = "space-between" alignItems = "baseline" >
                     <Grid item >
                        <Typography variant =  "sub-title">
                        Payment Terms
                        </Typography>

                    </Grid>

                    <Grid item>
                        <Button color = "primary"
                            onClick= {() => { arrayHelpers.push(newTerms) }}>
                            {paymentTerms && paymentTerms.length > 0 ? "Add Another paymentTerms" : "payment Terms"}
                        </Button>
                    </Grid>
                    </Grid>

                    <br />


                    {
                      paymentTerms.map((newTerms, index) => (
                        <CreatePaymentPaper elevation = {0}>
                            {
                              index > 0 ? <React.Fragment>
                                <br />
                                <Divider variant = "middle" />
                                <br />
                              </React.Fragment> : ""
                            }

                              <Grid container direction = "row" spacing = {0} justify = "space-between" alignItems = "center">
                                <Grid item xs = {10}>
                                    <Grid container direction  = "row" spacing  = {8} justify = "space-between">
                                      <Grid item xs = {3}>
                                              <Field name = {`newTerms.${index}.payment`}
                                                  label = "Payment Term"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newTerms.${index}.due`}
                                                  label = "Due"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newTerms.${index}.cDate`}
                                                  label = "Due Calculation Date"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newTerms.${index}.pstatus`}
                                                  label = "Status"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>

                                                                          
                                      
                                      </Grid>


                                    </Grid>
                                </Grid>

                                              <Grid Item>
                                                <IconButton aria-label = "Delete"
                                                   onClick = {()=> arrayHelpers.remove(index)}>
                                                     <DeleteIcon/>
                                                </IconButton>   
                                              </Grid>

                              </Grid>

                        </CreatePaymentPaper>
                      )
                      )
                    }   
                        <br />
                            <Divider variant ="fullWidth" />
                        <br /> 

                        
                <Grid container
                    spacing = {8}
                    direction= "row-reverse"
                    justify = "flex-start"
                    alignItems= "flex-start">
                    
                    <Grid item>
                        <Button type = "submit" variant = "contained" color = "primary" disabled = {!isValid}>
                            Save
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button variant = "outlined">
                        Cancel
                        </Button>

                    </Grid>
                    </Grid>
                    </div>              
        ) 
                  } />
    </form>


);
};
export default CreatePaymentTermsForm;





