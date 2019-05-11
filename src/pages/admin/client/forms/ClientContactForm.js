import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ClientContactForm = ({contact = {}}) => {
  console.log(contact);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contacts
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={3} sm={2}>
          <TextField required id="contactName" value={contact && contact.name ? contact.name : ''} label="Contact Name" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} sm={2}>
          <TextField id="contactDesignation" value={contact && contact.designation ? contact.designation : ''} label="Designation" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} md={2}>
          <TextField required id="contactNumber" value={contact && contact.mobile ? contact.mobile : ''} label="Contact Number" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField required id="contactEmail" value={contact && contact.email ? contact.email : ''} label="Email" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField id="contactDetails" value={contact && contact.details ? contact.details : ''} label="Details" fullWidth variant="outlined" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ClientContactForm;
