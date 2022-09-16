// importing required tools
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// importing all reducers
import { LoginReducer } from "./Auth/login/loginReducer";
import { SignupReducer } from "./Auth/signup/signUpReducer";
import { EventReducer } from "./Events/eventReducer";

// all root reducers
const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  event: EventReducer,
});

// applying middleware
const middlewareEnhancer = applyMiddleware(thunk);

// main redux store
export const store = createStore(rootReducer, middlewareEnhancer);
