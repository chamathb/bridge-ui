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


const CreateBltypePaper = withStyles ({
  root : {
    backgroundColor : 'transparent',
    borderColor : 'red',
    border :'1',
  }
}) (Paper);

const CreateBlTypesForm = props => {
  const {
    values : {

      bltypes
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const newbl  = {bltype : "", strategy : "" , blDescription : "", blStatus : ""};
  return (


    <form onSubmit = {handleSubmit}>
        <Grid container spacing = {24}>
        </Grid>

         
        <Divider variant = "middle" />
         <br/>

         <FieldArray
          name = "bltypes"
          render = {arrayHelpers => (

              <div>
              <Grid container direction = "row" justify = "space-between" alignItems = "baseline" >
                     <Grid item >
                        <Typography variant =  "sub-title">
                        B/l type
                        </Typography>

                    </Grid>

                    <Grid item>
                        <Button color = "primary"
                            onClick= {() => { arrayHelpers.push(newbl)}}>
                             {bltypes && bltypes.length > 0 ? "Add Another B/L Terms" : "bl Terms"}
                        </Button>
                    </Grid>
                    </Grid>

                    <br />


                    {
                      bltypes.map((newbl, index) => (
                        <CreateBltypePaper elevation = {0}>
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
                                              <Field name = {`newbl.${index}.bltype`}
                                                  label = "B/l Types"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newbl.${index}.strategy`}
                                                  label = "Release Strategy"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newbl.${index}.blDescription`}
                                                  label = "Description"
                                                  fullWidth
                                                  component= {TextField}
                                                  variant = "outlined"/>
                                      </Grid>

                                      <Grid item xs = {3}>
                                              <Field name = {`newbl.${index}.blStatus`}
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

                        </CreateBltypePaper>
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
export default CreateBlTypesForm;





