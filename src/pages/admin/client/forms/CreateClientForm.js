import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ClientContact from './ClientContact';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CreateClientForm = ({id, name, address, vat, tin, businessRegNo, conatcts}) => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Client Management
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={6} md={6}>
          <TextField required id="clientName" label="Client Name" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="clientName" label="Business Registration Number" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="clientAddress" label="Client Address" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="vat" label="VAT" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="tin" label="TIN" fullWidth variant="outlined" />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider variant="middle" />
      <br />
      <ClientContact />

      <br />
    </React.Fragment>
  );
};

export default CreateClientForm;