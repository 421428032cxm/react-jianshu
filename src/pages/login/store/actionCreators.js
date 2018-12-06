import * as actionTypes from './actionTypes';
import Axios from 'axios';

const changeLogin = (result) => ({
    type: actionTypes.CHANGE_LOGIN,
    value: result
})

// 退出登陆操作
export const exit = () => ({
    type: actionTypes.EXIT,
    value: false
})

// 登陆操作
export const login = (account, password) => {
    return (dispatch) => {
        Axios.get('api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin(result))
            } else {
                console.log("登陆失败");
            }
        })
    }
}