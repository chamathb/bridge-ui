import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ClientContactForm from './ClientContactForm';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const renderContactRows = (client) => {
  if(client && client.contacts) {
    return client.contacts.map((contact, index) => {
      const clientFormProps = {contact}
      return <ClientContactForm {...clientFormProps}/>
    });
  } else {
    return <ClientContactForm />
  }
};

const CreateClientForm = ({classes, client = {}, addClient }) => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Client Management
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={6} md={6}>
          <TextField required id="clientName" value={client && client.name ? client.name : ''} label="Client Name" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="clientBrg" value={client && client.brg ? client.brg : ''} label="Business Registration Number" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="clientAddress" value={client && client.address ? client.address : ''} label="Client Address" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="clientVat" value={client && client.vat ? client.vat : ''} label="VAT" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField required id="clientTin" value={client && client.tin ? client.tin : ''} label="TIN" fullWidth variant="outlined" />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider variant="middle" />
      <br />
      {
          renderContactRows(client)
      }
      <Grid item xs={12} md={12}>
        <Grid container direction="row" justify="flex-end" alignItems="flex-start" >
          <Grid item >
            <Button color="primary" className={classes.addAnotherClient}>
              Add Another Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Divider variant="fullWidth" />
    </React.Fragment>
  );
};

export default CreateClientForm;