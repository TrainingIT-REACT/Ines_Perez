import { combineReducers } from 'redux';
import loginReducer from "./loginReducer";
const rootReducer = combineReducers({
    loginReducer,
    // userReducer,
});

export default rootReducer;