import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for extencion browser
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));
export default store;