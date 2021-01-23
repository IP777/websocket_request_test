import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./appReducer";
import thunk from "./middleware/thunk";

const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
