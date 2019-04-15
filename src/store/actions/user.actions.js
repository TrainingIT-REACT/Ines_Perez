import loginTypes from "../types/loginType";
import {userService} from "../../services/userService";
import userTypes from "../types/userTypes";
import { history } from "../../_helpers/history"

function login(email, pass)
{
    function request(user) {
        return {
            type: loginTypes.LOGIN_REQUEST,
            user
        };
    }

    function success(user) {
        return {
            type: loginTypes.LOGIN_SUCCESS,
            user
        };
    }

    function fail(error) {
        return {
            type: loginTypes.LOGIN_FAILURE,
            error
        };
    }

    return function (dispatch) {
        dispatch(request({ email }));
        userService.login(email, pass).then(user => {
            history.push('/');
            dispatch(success(user));
        }, error => dispatch(fail(error)));
    };
}

function logout() {
    userService.logout();

    return {
        type: loginTypes.USER_LOGOUT
    }
}

function getUser() {

    function request(user) {
        return {
            type: userTypes.USER_REQUEST,
            user
        };
    }

    function success(user) {
        return {
            type: userTypes.USER_SUCCESS,
            user
        };
    }

    function fail(error) {
        return {
            type: userTypes.USER_FAILURE,
            error
        };
    }

    return function (dispatch) {
        dispatch(request());

        userService.getUser().then(user => dispatch(success(user)), error => dispatch(fail(error.message)));
    }
}

export const userActions = {
    login,
    logout,
    getUser
};