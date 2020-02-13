import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loansReducer from "./loans";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    loans: loansReducer
  });
