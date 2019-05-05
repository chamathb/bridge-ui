import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ClientRelationForm = ({id, clientName, incoterms, paymentTerms, tin, businessRegNo, conatcts}) => {
  incoterms = [{
    value: 'incotermId1',
    label: 'incoterm 1',
    },
    {
      value: 'incotermId2',
      label: 'incoterm 1',
    },
    {
      value: 'incotermId3',
      label: 'incoterm 1',
    },
    {
      value: 'incotermId4',
      label: 'some other incoterm',
    }];
  paymentTerms = [{
    value: 'payTermId1',
    label: 'payment term 1',
  },
    {
      value: 'payTermId2',
      label: 'payment term 1',
    },
    {
      value: 'payTermId3',
      label: 'payment term 1',
    },
    {
      value: 'payTermId4',
      label: 'payment term 1',
    }];
  const transportModes = ['FCL', 'LCL', 'AIR', 'COURIER', 'LOCAL'];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Client Associations
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={3} sm={3}>
          <TextField required id="contactName" label="Client Name" fullWidth variant="outlined"
                     helperText="Start typing to look up Client"/>
        </Grid>
        <Grid item xs={3} sm={2}>
          <TextField select id="clientIncoterm" label="Incoterm" fullWidth variant="outlined"
                     SelectProps={{
                       native: true,
                     }} >
            {incoterms.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3} md={2}>
          <TextField select id="clientPayTerm" label="Payment Term" fullWidth variant="outlined"
                     SelectProps={{
                       native: true,
                     }} >
            {paymentTerms.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField required id="contactEmail" label="Bank" disabled fullWidth variant="outlined"
                     helperText="Bank is a look up" />
        </Grid>
        <Grid item xs={3} md={2}>
          <TextField select id="clientTrMode" label="Transport Mode" fullWidth variant="outlined"
                     SelectProps={{
                       native: true,
                     }} >
            {transportModes.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ClientRelationForm;
