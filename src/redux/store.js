import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import { sessionService } from "redux-react-session";

import rootReducer from "./reducers";

const initalState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// const validateSession = (session) => {
//     // check if your session is still valid
//     return true;
// }

// sessionService.initSessionService(store);

export default store;
