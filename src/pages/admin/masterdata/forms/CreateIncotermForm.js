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


const CreateIncotermPaper = withStyles ({
  root : {
    backgroundColor : 'transparent',
    borderColor : 'red',
    border :'1',
  }
}) (Paper);
  

const CreateIncotermForm = props => {
  const {
    values : {

      incoterms
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;


  const newIncoterm  = {incotermCol : "", description : "" , instatus : ""};
  return (

    <form onSubmit1 = {handleSubmit}>
        <Grid container spacing = {24}>
        </Grid>

         
        <Divider variant = "middle" />
         <br/>

         <FieldArray
          name = "incoterms"
          render = {arrayHelpers => (

              <div>
              <Grid container direction = "row" justify = "space-between" alignItems = "baseline" >
                     <Grid item >
                        <Typography variant =  "sub-title">
                        Incoterms
                        </Typography>

                    </Grid>

                    <Grid item>
                        <Button color = "primary"
                            onClick= {() => { arrayHelpers.push(newIncoterm) }}>
                            {incoterms && incoterms.length > 0 ? "Add Another paymentTerms" : "payment Terms"}
                        </Button>
                    </Grid>
                    </Grid>

                    <br />


                    {
                      incoterms.map((newIncoterm, index) => (
                        <CreateIncotermPaper elevation = {0}>
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
                                              <Field name = {`newIncoterm.${index}.incotermCol`}
                                                  label = "Incoterm"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newIncoterm.${index}.description`}
                                                  label = "Description"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newIncoterm.${index}.instatus`}
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

                        </CreateIncotermPaper>
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


  export default CreateIncotermForm;
