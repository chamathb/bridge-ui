import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';

const CreateAdvancePayPaper = withStyles ({
    root: {
        backgroundColor : 'transparent',
        borderColor : 'red',
        border : '1', 
    },
})(Paper);

const CreateAdvancePayForm = props =>{
    const {
        values : {
            supplier, supplierPiNum, amount, remittingB, bank, address, date, reference ,purchase
        },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
    }=props;

    const change = (supplier, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(supplier, true, false);

    };


    const purchaseOrder = {orderNum :"", order:"", line:"",  item :"", quantity:"" ,amount:"", received:"", remaining:"", incoterm:""};
   return (
       <form onSubmit = {handleSubmit}>
           <Grid onSubmit = {handleSubmit} >
           <Grid container spacing = {24}>
               <Grid item xs = {6} md = {6}>
                   <Field id = "supplier"
                   name = "supplier"
                   helperText = {touched.supplier ? errors.supplier : ""}
                   error = {touched.vendor && Boolean(errors.supplier)}
                   value = {supplier}
                   onChange  = {change.bind(null,"supplier")}
                   label = "Supplier"
                   fullWidth
                   component  = {TextField}
                   variant = "outlined" />
               </Grid>
            

            <Grid item xs = {6} md = {6}>
                <Field id = "supplierPiNum"
                name = "supplierPiNum"
                helperText = {touched.supplierPiNum ? errors.supplierPiNum : ""}
                error  = {touched.supplierPiNum && Boolean(errors.supplierPiNum)}
                value = {supplierPiNum}
                onChange = {change.bind(null,"supplierPiNum")}
                label= "Supplier PI Number"
                fullWidth
                component = {TextField}
                variant = "outlined" />

            </Grid>

            <Grid item xs = {6} md = {6}>
                <Field id = "amount"
                name = "amount" 
                helperText = {touched.amount ? errors.amount : ""}
                error = {touched.amount && Boolean (errors.amount)}
                value = {amount}
                onChange = {change.bind(null,"amount")}
                label = "Amount"
                fullWidth
                component   = {TextField}
                variant = "outlined" />         
            </Grid>

            <Grid item xs = {6} md = {6}>
                <Field id= "remittingB"
                name = "remittingB" 
                helperText = {touched.remittingB ? errors.remittingB : ""}
                error = {touched.remittingB && Boolean (errors.remittingB)}
                value = {remittingB}
                onChange = {change.bind(null,"remittingB")}
                label = "Remitting Bank (Local)"
                fullWidth
                component = {TextField}
                variant = "outlined" />
            </Grid>

            <Grid item xs = {6} md ={6}>
                <Field id = "bank"
                name = "bank"
                helperText = {touched.bank && Boolean (errors.bank)}
                error = {touched.bank && Boolean(errors.bank)}
                value = {bank}
                onChange = {change.bind(null, "bank")}
                label = "Bank Name"
                fullWidth
                component  = {TextField}
                variant = "outlined" />
            </Grid>

            <Grid item xs = {6} md = {6}>
                <Field id = "address"
                name = "address"
                helperText =  {touched.address && Boolean(errors.address)}
                value = {address}
                onChange = {change.bind(null, "address")}
                label = "Bank Address"
                fullWidth
                component = {TextField}
                variant =  "outlined" />
            </Grid>

            <Grid item xs = {6} md = {6}>
                <Field id = "date"
                name = "date"
                helperText = {touched.date && Boolean (errors.date)}
                value = {date}
                onChange = {change.bind(null, "date")}
                label = "Payment Date"
                fullWidth
                component = {TextField}
                variant = "outlined" />
            </Grid>

            <Grid item xs = {6} md = {6}>
                <Field id = "reference"
                name = "reference"
                helperText =  {touched.reference && Boolean (errors.reference)}
                value = {reference}
                onChange =  {change.bind(null, "reference")}
                label =  "Remittence Reference"
                fullWidth
                component = {TextField}
                variant = "outlined" />
            </Grid>
        </Grid>

        <br/>
        <br/>

        <Divider variant = "middle"/>
        <br/>


        <FieldArray
            name = "purchase"
            render = {arrayHelpers => (
                <div>
                    <Grid container direction = "row" justify = "space-between" alignItems = "baseline">
                        <Grid item>
                            <Typography variant = "sub-title">
                                Purchase order
                            </Typography>
                    </Grid>

                    <Grid item>
                        <Button color = "primary"
                            onClick = {() => {arrayHelpers.push(purchaseOrder)}}>
                                {purchase && purchase.length > 0 ? "Add Another Purchase Order" : "Add Purchase"}
                        </Button>
                    </Grid>
                    </Grid>

                    <br/>

                    {
                        purchase.map((purchaseOrder, index) =>(
                            <CreateAdvancePayPaper elevation = {0}>
                                {index > 0 ? <React.Fragment>
                                    <br/>
                                    <Divider variant= "middle"/>
                                    <br/>
                                </React.Fragment> :""}

                            <Grid container = "row" spacing = {0} justify = "space-between" alignItems = "center">
                                <Grid item xs = {10}>
                                    <Grid container direction = "row" spacing  = {8} justify = "space-between">
                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.orderNum`}
                                        label= "Client Purchase Order Number"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.order`}
                                        label= "Purchase Order"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.line`}
                                        label= "Line No"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.item`}
                                        label= "Item"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.quantity`}
                                        label= "Line Quantity"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.amount`}
                                        label= "Amount"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.received`}
                                        label= "Received Amount"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.remaining`}
                                        label= "Remaining Amount"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>

                                        <Grid item xs = {4}>
                                        <Field name = {`purchaseOrder.${index}.incoterm`}
                                        label= "Incoterm"
                                        fullWidth
                                        component= {TextField}
                                        variant = "outlined"/>
                                        </Grid>
                                        </Grid>
                                        </Grid>
                                    
                            <Grid Item>
                                <IconButton aria-label= "Delete"
                                    onClick = {()=> arrayHelpers.remove(index)}>
                                        <DeleteIcon/>
                                   
                                </IconButton>
                            </Grid>
                        </Grid>

                        </CreateAdvancePayPaper>            
                        ))
                    }
                    <br/>
                    <Divider variant= "fullWidth"/>
                    <br/>

                    <Grid container
                        spacing = {8}
                        direction = "row-reverse"
                        justify = "flex-start"
                        alignItems = "flex-start">

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
            )}/>
            </Grid>
            </form>
        
   );

};

   export default CreateAdvancePayForm


               