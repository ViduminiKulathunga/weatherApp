import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";

const inistialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  data: dataReducer,
  UI: uiReducer,
});

// const store = createStore(
//   reducers,
//   inistialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(reducers, inistialState, applyMiddleware(thunk));


export default store;
