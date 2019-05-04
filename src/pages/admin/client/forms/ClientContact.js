import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ClientContact = ({id, name, address, vat, tin, businessRegNo, conatcts}) => {
  return (
    <React.Fragment>
      <Typography variant="h8" gutterBottom>
        Contacts
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={3} sm={3}>
          <TextField required id="contactName" label="Contact Name" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} sm={2}>
          <TextField id="contactDesignation" label="Designation" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} md={2}>
          <TextField required id="contactNumber" label="Contact Number" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} md={2}>
          <TextField required id="contactEmail" label="Email" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField id="contactDetails" label="Details" fullWidth variant="outlined" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ClientContact;
