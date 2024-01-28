import { combineReducers } from "redux";
import counter from "./counters";
import todos from './todos'

const rootReducer = combineReducers({
  todos,
  counter
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>