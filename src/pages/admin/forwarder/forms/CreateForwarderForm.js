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




const CreateForwarderPaper = withStyles({
    root: {
      backgroundColor:'transparent',
      borderColor: 'red',
      border: '1',
    },
  })(Paper);


const CreateForwarderForm = props => {
    const {
        values : {
            vendor, typeofVendor, address, brg, tin, swiftAddress, contactInfo
        },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
    } = props;


    const change = (vendor, e) => {
        e.persist();
    handleChange(e);
    setFieldTouched(vendor, true, false);
    };

    const newContact = {name: "", designation: "", contactNum: "", email: "", details: "", company: "", access: "", userName: "", types: ""};
    return(
        <form onSubmit = {handleSubmit}>
         <Grid container spacing = {24}>
          <Grid item xs = {6} md = {6}>
            <Field id = "vendor"
                    name = "vendor"
                    helperText={touched.vendor ? errors.vendor : ""}
                    error = {touched.vendor && Boolean(errors.vendor)}
                    vlaue = {vendor}
                    onChange = {change.bind(null, "vendor")}
                    label = "Vendor Name"
                    fullWidth
                    component = {TextField}
                    variant = "outlined"/>
         </Grid> 
         <Grid item xs ={6} md ={6}>
            <Field id = "typeofVendor"
                name = "typeofVendor"
                value = {typeofVendor}
                helperText = {touched.typeofVendor ? errors.typeofVendor : ""}
                error = {touched.typeofVendor && Boolean(errors.typeofVendor)}
                onChange= {change.bind(null, "typeofVendor")}
                label = "Type of Vendor"
                fullWidth
                component = {TextField}
                variant = "outlined" />
         </Grid>

        <Grid item xs =  {6} md = {6}>
            <Field id = "address"
                name = "address"
                value = {address}
                helperText = {touched.address ? errors.address : ""}
                error={touched.address && Boolean(errors.address)}
                onChange= {change.bind(null, "address")}
                label= "Address"
                fullWidth
                component ={TextField}
                variant = "outlined"/>
        </Grid>

        <Grid item xs =  {6} md = {6}>
            <Field id = "brg"
                name = "brg"
                value = {brg}
                helperText = {touched.brg ? errors.brg : ""}
                error={touched.brg && Boolean(errors.brg)}
                onChangen= {change.bind(null, "brg")}
                label= "Buisness Registration"
                fullWidth
                component =  {TextField}
                variant = "outlined"/>
        </Grid>

        <Grid item xs = {6} md = {6} >
            <Field id = "tin"
                name =  "tin"
                value = {tin}
                helperText = {touched.tin ? errors.tin : ""}
                error = {touched.tin && Boolean(errors.tin)}
             
                onChange = {change.bind(null, "tin")}
                label= "TIN"
                fullWidth
                component = {TextField}
                variant = "outlined"/>
         </Grid>

         <Grid item xs = {6} md = {6}>
            <Field id = "swiftAddress"
                name =  "swiftAddress"
                value =  {swiftAddress}
                helperText = {touched.swiftAddress ? errors.swiftAddress: ""}
                error = {touched.swiftAddress && Boolean(errors.swiftAddress)}
                onChange = {change.bind(null, "swiftAddress")}
                label = "Swift Address"
                fullWidth
                component = {TextField}
                variant ="outlined" />

         </Grid>
         </Grid>
        
        

         <br/>
         <br/>

         <Divider variant = "middle" />
         <br/>

         <FieldArray
            name = "contactInfo"
            render = {arrayHelpers => (
                <div>
                <Grid container direction = "row" justify = "space-between" alignItems = "baseline" >
                    <Grid item >
                        <Typography variant =  "sub-title">
                        Contact Details
                        </Typography>

                    </Grid>

                    <Grid item>
                        <Button color = "primary"
                            onClick= {() => { arrayHelpers.push(newContact) }}>
                            {contactInfo && contactInfo.length > 0 ? "Add Another Contact Details" : "Add Contact"}
                        </Button>
                    </Grid>
                    </Grid>

                    <br/>

                    {
                        contactInfo.map((newContact, index) =>(
                            <CreateForwarderPaper elevation = {0}>
                                {index > 0 ? <React.Fragment>
                                    <br/>
                                    <Divider variant = "middle"/>
                                    <br/>
                                </React.Fragment> : ""}
                            
                            <Grid container direction = "row" spacing = {0} justify = "space-between" alignItems = "center">
                                <Grid item xs = {11}>
                                    <Grid container direction  = "row" spacing  = {8} justify = "space-between">
                                        <Grid item xs = {4}>
                                            <Field name = {`newContact.${index}.name`}
                                                label = "Name"
                                                fullWidth
                                                component= {TextField}
                                                variant = "outlined"/>
                                    </Grid>

                                    <Grid item xs = {3}>
                                        <Field name = { `newContact.${index}.designation`}
                                            label = "Designation"
                                            fullWidth
                                            component={TextField}
                                            variant= "outlined"/>
                                        </Grid>

                                        
                                    
                                    <Grid item xs = {3}>
                                        <Field name =  { `newContact.${index}.contactNum`}
                                            label = "Contact No"
                                            fullWidth
                                            component={TextField}
                                            variant = "outlined"/>
                                        </Grid>
                                   
                                   <Grid item xs = {3}>
                                    <Field name = {`newContact.${index}.email`}
                                        label = "Email"
                                        fullWidth
                                        component = {TextField}
                                        variant = "outlined" />
                                    </Grid>

                                    <Grid item xs = {3}>
                                    <Field name = {`newContact.${index}.details`}
                                        label = "Other Contact Details"
                                        fullWidth
                                        component=  {TextField}
                                        variant= "outlined" />
                                    </Grid>

                                    <Grid   item xs = {3}>
                                    <Field name = {`newContact.${index}.company`}
                                        label = "Company Name"
                                        fullWidth
                                        component = {TextField}
                                        variant = "outlined" />
                                    </Grid>

                                    <Grid  item xs = {4}>
                                    <Field name = {`newContact.${index}.access`}
                                        label = "System Access"
                                        fullWidth
                                        component = {TextField}
                                        variant = "outlined" />
                                    </Grid>

                                    <Grid item xs = {4}>
                                    <Field name = {`newContact.${index}.username`}
                                        label = "System User name" 
                                        fullWidth
                                        component ={TextField}
                                        variant = "outlined" />
                                    </Grid>

                                    <Grid item xs= {4}>
                                    <Field name = {`newContact.${index}.types`}
                                        label = "Access Type"
                                        fullWidth
                                        component = {TextField}
                                        variant= "outlined"/>
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
                    
                    </CreateForwarderPaper>

                ))
                    
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
                )} />   
        </form>
    );
};

export default CreateForwarderForm;
