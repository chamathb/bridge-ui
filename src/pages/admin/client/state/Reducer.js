/**
 * Created by chamathbogahawatta on 04/05/2019.
 */
import update from 'immutability-helper';
import { ClientEvents } from './Actions';

const INITIAL_STATE = {
  client: {
    name: '',
    brg: '',
    address: '',
    vat: '',
    tin: '',
    contacts: [{
      name: '',
      designation:'',
      mobile: '',
      email: '',
      details: '',
    }]
  },
};

export const ClientReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case ClientEvents.CLIENT_DATA_RECEIVED:
      return {
        ...state,
        client: payload
      };
    case ClientEvents.ADD_CLIENT_CONTACT:
      const client = state.client;
      return {
        ...state,
        client: update(client, {contacts: {$push: [{}]}})
      }
  }
  return state;
};

export default ClientReducer;