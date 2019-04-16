/**
 * Created by chamathbogahawatta on 14/04/2019.
 */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./combineReducers";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;