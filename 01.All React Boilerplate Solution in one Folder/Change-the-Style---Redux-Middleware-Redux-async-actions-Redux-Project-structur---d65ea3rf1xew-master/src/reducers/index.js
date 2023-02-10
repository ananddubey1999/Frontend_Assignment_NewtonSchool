
import colorReducer from "./colors.js"
import styleReducer from "./styles.js"
import {combineReducers} from "redux";
const rootReducer=combineReducers({
  colorReducer,styleReducer
});
export default rootReducer;