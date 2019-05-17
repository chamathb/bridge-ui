import React from 'react';
import { FieldArray, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const RegulatoryAttachPaper = withStyles({
  root: {
    backgroundColor:'transparent',
    borderColor: 'red',
    border: '1',
  },
})(Paper);

const CreateRegulatoryForm = props => {
  const {
    values: {
      name, testName, releaseTime, requirement, averageRelease, stage,
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const regulatoryAttch = { name : "", testName : "", releaseTime : "", requirement : "", averageRelease : "", stage : ""};
  return(
    <form onSubmit = {handleSubmit}>
    <Grid  container spacing = {24}>
        <Grid item xs = {6} md = {6}>
        <Field id = "name"
          name = "name"
          helperText = {touched.name ? errors.name : ""}
          error = { touched.name && Boolean(errors.name)}
          value = {name}
          onChange = {change.bind(null, "name")}
          label = "Authority / Institute Name"
          fullWidth
          component = {TextField}
          variant = "outlined" />
          </Grid>

          <Grid item xs = {6} md= {6}>
            <Field id = "testName"
                  name =  "testName"
                  value = {testName}
                  helperText = {touched.testName ? errors.testName : ""}
                  error = {touched.testName && Boolean(errors.testName)}
                  onChange = {change.bind(null, "testName")}
                  label = "Reference Test Name"
                  fullWidth
                  component= {TextField}
                  variant = "outlined" />
          </Grid>

          <Grid item xs = {6} md= {6}>
            <Field id = "releaseTime"
                  name =  "releaseTime"
                  value = {releaseTime}
                  helperText = {touched.releaseTime ? errors.releaseTime : ""}
                  error = {touched.releaseTime && Boolean(errors.releaseTime)}
                  onChange = {change.bind(null, "releaseTime")}
                  label = "Release Time In Date"
                  fullWidth
                  component= {TextField}
                  variant = "outlined" />
          </Grid>

          <Grid item xs = {6} md= {6}>
            <Field id = "requirement"
                  name =  "requirement"
                  value = {requirement}
                  helperText = {touched.requirement ? errors.requirement : ""}
                  error = {touched.requirement && Boolean(errors.requirement)}
                  onChange = {change.bind(null, "requirement")}
                  label = "Sample Requirement"
                  fullWidth
                  component= {TextField}
                  variant = "outlined" />
          </Grid>

          <Grid item xs = {6} md= {6}>
            <Field id = "averageRelease"
                  name =  "averageRelease"
                  value = {averageRelease}
                  helperText = {touched.averageRelease ? errors.averageRelease : ""}
                  error = {touched.averageRelease && Boolean(errors.averageRelease)}
                  onChange = {change.bind(null, "averageRelease")}
                  label = "Average Release Time"
                  fullWidth
                  component= {TextField}
                  variant = "outlined" />
          </Grid>

          <Grid item xs = {6} md= {6}>
            <Field id = "stage"
                  name =  "stage"
                  value = {stage}
                  helperText = {touched.stage ? errors.stage : ""}
                  error = {touched.stage && Boolean(errors.stage)}
                  onChange = {change.bind(null, "stage")}
                  label = "Approval Obtaning Stage"
                  fullWidth
                  component= {TextField}
                  variant = "outlined" />
          </Grid>
     </Grid>
              <br />
              <br />

              <Divider variant = "middle" />
              <br />
              <FieldArray
                name = "attachments"
                render= {arrayaHlpers => (
                  <div>
                    <Grid container direction = "row" justify = "space-between" alignItems = "baseline" >
                      <Grid item>
                        <Typography variant = "sub-title">
                        Attachements
                        </Typography>
                      </Grid>
                      <Grid item >
                        <Button color = "primary"
                            onClick = {() => {arrayaHlpers.push(regulatoryAttch)}}>
                              {contacts && contacts.length >0 ? "Add Another Contact" : "Add Contact"}

                        </Button>
                      </Grid>
                    </Grid>
                    <br />


                    {
                      contacts.map ((contact, index) => 
                      (
                        <RegulatoryAttachPaper elevation= {0}>
                          {index > 0 ? <React.Fragment>
                            <br/>
                            <Divider variant = "middle" />
                            <br/>
                            </React.Fragment> : ""}
                            
                            <Grid container direction = "row" spacing = {0} justify = "space-between" alignItems= "center">
                              <Grid item xs={11}>
                               <Grid container direction="row" spacing={8} justify="space-between">
                   
                                <Grid item xs ={4}>
                                  <Field name ={`contacts.${index}.name`}
                                      label  = "Document Name"
                                      fullWidth
                                      component = {TextField}
                                      variant = "outlined"/>
                               </Grid> 
                               <Grid item xs = {3}>
                                 <Field name = {`contacts.${index}.description`}
                                      label = "Description"
                                      fullWidth
                                      component =  {TextField}
                                      variant = "outlined"/>

                            </Grid>

                            <Grid item xs= {3}>
                              <Field name ={`contacts.${index}.mandatory`}
                                label = "Mandatory"
                                fullWidth
                                component = {TextField}
                                variant = "outlined"/>
                            </Grid>
                            
                          <Grid item>
                              <IconButton aria-label = "Delete"
                                onClick = {() => arrayaHlpers.remove(index)}>
                                  <DeleteIcon/>
                              </IconButton>
                          </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                      </RegulatoryAttachPaper> ))
                    }
                    <br/>
                    <Divider variant = "fullWidth"/>
                    <br/>

                    <Grid container
                          spacing ={8}
                          direction = "row-reverse"
                          justify = "flex-start"
                          alignItems = "flex-start">
                    <Grid item>
                      <Button type = "submit" variant = "contained" color= "primary" disabled = {!isValid}>
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
               
               )} />
    </form>
  );

};

export default CreateRegulatoryForm;