import {getClientById} from '../../../../repositories/ClientRepository';

export const ClientEvents = {
  CLIENT_DATA_RECEIVED: 'CLIENT_DATA_RECEIVED',
  ADD_CLIENT_CONTACT: 'ADD_CLIENT_CONTACT',
};

export const getClient = () => {
  //const client = await getClientById("dds");
  return (dispatch) => {
    setTimeout(()=>{
      dispatch({
        type: ClientEvents.CLIENT_DATA_RECEIVED,
        payload: {
          name: 'Nestle',
          brg: 'EC-23-RB-232',
          address: '59, Flower Road, Colombo 07',
          vat: 'E43w5w5wRR3',
          tin: 'WW88HUJ3',
          contacts: [{
            name: 'Dirk Werapermall',
            designation: 'Manager Operations',
            mobile: '+94714322344',
            email: 'dirkwera@nestle.com',
            details: 'Some details',
          }]
        },
      })
    }, 1000);
  };
};

export const addContact = () => {
  return (dispatch) => {
    dispatch({ type: ClientEvents.ADD_CLIENT_CONTACT})
  };
};




