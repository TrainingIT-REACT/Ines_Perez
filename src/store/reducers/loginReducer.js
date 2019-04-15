import loginTypes from "../types/loginType";
import {USER_STORAGE_KEY} from "../../services/userService";

let user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
const initialState = user ? { loggedIn: true, user } : {};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case loginTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case loginTypes.LOGIN_FAILURE:
            return {
                error: {
                    message: 'Bad credentials'
                }
            };
        case loginTypes.LOGOUT:
            return {};
        default:
            return state
    }
};

export default loginReducer;