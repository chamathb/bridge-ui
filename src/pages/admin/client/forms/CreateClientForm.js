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

const ClientContactPaper = withStyles({
  root: {
    backgroundColor:'transparent',
    borderColor: 'red',
    border: '1',
  },
})(Paper);

const CreateClientForm = props => {
  const {
    values: {
      name, brg, address, vat, tin, contacts,
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
  const clientContact = {name: '', designation: '', mobile: '', email: '', details: ''};
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={6} md={6}>
          <Field id="name"
                 name="name"
                 helperText={touched.name ? errors.name : ""}
                 error={touched.name && Boolean(errors.name)}
                 value={name}
                 onChange={change.bind(null, "name")}
                 label="Client Name"
                 fullWidth
                 component={TextField}
                 variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <Field id="brg"
                 name="brg"
                 value={brg}
                 helperText={touched.brg ? errors.brg : ""}
                 error={touched.brg && Boolean(errors.brg)}
                 onChange={change.bind(null, "brg")}
                 label="Business Registration Number"
                 fullWidth
                 component={TextField}
                 variant="outlined" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Field id="address"
                 name="address"
                 value={address}
                 helperText={touched.address ? errors.address : ""}
                 error={touched.address && Boolean(errors.address)}
                 onChange={change.bind(null, "address")}
                 label="Client Address"
                 fullWidth
                 component={TextField}
                 variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <Field id="vat"
                 name="vat"
                 value={vat}
                 helperText={touched.vat ? errors.vat : ""}
                 error={touched.vat && Boolean(errors.vat)}
                 onChange={change.bind(null, "vat")}
                 label="VAT"
                 fullWidth
                 component={TextField}
                     variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
          <Field id="tin"
                 name="tin"
                 value={tin}
                 helperText={touched.tin ? errors.tin : ""}
                 error={touched.tin && Boolean(errors.tin)}
                 onChange={change.bind(null, "tin")}
                 label="TIN"
                 fullWidth
                 component={TextField}
                 variant="outlined" />
        </Grid>
      </Grid>
      <br />
      <br />
      <Divider variant="middle" />
      <br />
      <FieldArray
        name="contacts"
        render={arrayHelpers => (
          <div>
            <Grid container direction="row" justify="space-between" alignItems="baseline" >
              <Grid item >
                <Typography variant="sub-title">
                  Contacts
                </Typography>
              </Grid>
              <Grid item >
                <Button color="primary"
                        onClick={() => { arrayHelpers.push(clientContact) }}>
                  {contacts && contacts.length > 0 ? "Add Another Contact" : "Add Contact"}
                </Button>
              </Grid>
            </Grid>
            <br />
            {
              contacts.map((contact, index) => (
                <ClientContactPaper  elevation={0}>
                  { index > 0 ? <React.Fragment>
                      <br />
                      <Divider variant="middle" />
                      <br />
                    </React.Fragment> : ""}
                <Grid container direction="row" spacing={0} justify="space-between" alignItems="center">
                  <Grid item xs={11}>
                    <Grid container direction="row" spacing={8} justify="space-between">
                      <Grid item xs={4}>
                        <Field name={`contacts.${index}.name`}
                               label="Contact Name"
                               fullWidth
                               component={TextField}
                               variant="outlined" />
                      </Grid>
                      <Grid item xs={3}>
                        <Field name={`contacts.${index}.designation`}
                               label="Designation"
                               fullWidth
                               component={TextField}
                               variant="outlined" />
                      </Grid>
                      <Grid item xs={2}>
                        <Field name={`contacts.${index}.mobile`}
                               label="Contact Number"
                               fullWidth
                               component={TextField}
                               variant="outlined" />
                      </Grid>
                      <Grid item xs={3}>
                        <Field name={`contacts.${index}.email`}
                               label="Email"
                               fullWidth
                               component={TextField}
                               variant="outlined" />
                      </Grid>
                      <Grid item xs={12}>
                        <Field name={`contacts.${index}.details`}
                               value={contact.details}
                               label="Details"
                               fullWidth
                               component={TextField}
                               variant="outlined" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <IconButton aria-label="Delete"
                                onClick={() => arrayHelpers.remove(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>

                </ClientContactPaper>
              ))
            }

            <br />
            <Divider variant="fullWidth" />
            <br />
            <Grid container
                  spacing={8}
                  direction="row-reverse"
                  justify="flex-start"
                  alignItems="flex-start">
              <Grid item>
                <Button type="submit" variant="contained" color="primary" disabled={!isValid}>
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </div>
        )} />
    </form>
  );
};

export default CreateClientForm;