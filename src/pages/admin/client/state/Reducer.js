/**
 * Created by chamathbogahawatta on 04/05/2019.
 */
import { ClientEvents } from './Actions';

const INITIAL_STATE = {
  client: null,
};

export const ClientReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ClientEvents.CLIENT_DATA_RECEIVED:
      return {
        ...state,
        client: payload
      };
  }
  return state;
};

export default ClientReducer;