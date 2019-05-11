import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppHeader from '../../../component/AppHeader/AppHeader';
import MenuDrawer from "../../../component/MenuDrawer/MenuDrawer";
import CreateClientForm from './forms/CreateClientForm';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { getClient, addContact } from './state/Actions';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ClientContactForm from './forms/ClientContactForm';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3 + 1,
    marginTop: theme.spacing.unit,
    maxWidth: "1024px",
    position: "relative",
    paddingBottom: '100px',
    display: 'flex',
  },
  body: {
    paddingTop: theme.spacing.unit * 6,
    display: 'flex',
  },
  saveButton: {
    marginLeft: '10px',
  },
  buttonContainer: {
    alignItems: 'right',
    justifyContent: 'flex-end',
    display: 'flex',
  },
  cancelButton: {
    marginLeft: '10px',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  addAnotherClient: {
    marginTop: '8px',
  },
});

const renderContactRows = (client) => {
  if(client && client.contacts) {
    return client.contacts.map((contact, index) => {
      const clientFormProps = {contact};
      return <ClientContactForm {...clientFormProps}/>
    });
  } else {
    return <ClientContactForm />
  }
};

class CreateClient extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      client: null,
    };
  }

  componentDidMount() {
    const {getClient} = this.props;
    getClient();
  }

  addContactRow() {
    const {addContact} = this.props;
    addContact();
  }

  render(){
    const {classes, client} = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader />
        <div className={classes.body}>
          <MenuDrawer />
          <div className={classes.content}>
            <br />
            <form className={classes.container} noValidate autoComplete="off" >
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
                    <Button color="primary" className={classes.addAnotherClient}
                            onClick={() => { this.addContactRow() }}>
                      Add Another Contact
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Divider variant="fullWidth" />
              <br />
              <Grid container
                    direction="row-reverse"
                    justify="flex-start"
                    alignItems="flex-start">
                <Grid item>
                  <Button variant="contained" color="primary" className={classes.saveButton}>
                      Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.cancelButton} >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateClient.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({Client}) => {
  const {client} = Client;
  return {client};
};

const mapActionsToProps = {
  getClient,
  addContact,
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(CreateClient));