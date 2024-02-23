import {
    logout as logOut,
    login as logIn,
    datauser as dataUser
} from '../reducers/loginReducer';
import { setCookie, removeCookie } from '../utils/cookie';

import http from "../server/configAxios"
import { Navigate } from '../server/navigator';

export const Login = (email, password) => async(dispatch) => {
    var dataLogin = {
        email: email,
        password: password
    }

    try {
        await http.post(`login`, dataLogin)
        .then((res) => {
            if (res.data.status == 'success') {
                setCookie("token",res.data.data.token)
                dispatch(logIn({
                    'token' : res.data.data.token
                }))
                Navigate('/home')
            }
        })
        .catch((err) => {
            console.log(err);
        })
    } catch (err) {
        return Promise.reject(err)
    }
}

export const getUser = () => async(dispatch) => {
    try {
        await http.get(`getuser`)
        .then((res) => {
            dispatch(dataUser(res.data.data))
        })
        .catch((err) => {
            Promise.reject(err)
        })
    } catch (err) {
        return Promise.reject(err)
    }
}

export const Logout = () => {
    return (dispatch) => {
        removeCookie('token');
        dispatch(logOut())
    }
}
