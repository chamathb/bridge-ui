import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ClientRelationForm from './ClientRelationForm';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CreateVendorForm = ({classes, id, name, address, vat, tin, businessRegNo, conatcts, handleSelectChange}) => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Supplier Management
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={6} md={6}>
          <TextField required id="supplierName" label="Supplier Name" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField id="supplierWeb" label="Web Site" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="supplierAddress" label="Address" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="seaPort" label="Sea Port" fullWidth variant="outlined"
                     helperText="nearest sea port" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="airPort" label="Air Port" fullWidth variant="outlined"
                     helperText="nearest air port"/>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="seaTransitTime" label="Sea Freight Transit Time" fullWidth variant="outlined"
                     InputProps={{ endAdornment: <InputAdornment position="start">Hour(s)</InputAdornment>, }}/>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="airTransitTime" label="Air Freight Transit Time" fullWidth variant="outlined"
                     InputProps={{ endAdornment: <InputAdornment position="start">Hour(s)</InputAdornment>, }}/>
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider variant="middle" />
      <br />

      <ClientRelationForm />
      <Grid item xs={12} md={12}>
        <Grid container direction="row" justify="flex-end" alignItems="flex-start" >
          <Grid item >
            <Button color="primary" className={classes.addAnotherClient}>
              Add Client
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Divider variant="fullWidth" />
    </React.Fragment>
  );
};

export default CreateVendorForm;