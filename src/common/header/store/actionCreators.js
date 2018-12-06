/*
    actionCreators.js用来统一创建管理action
*/
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import Axios from 'axios';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page: page
})

const changeHeaderList = (data) => ({
    type: actionTypes.CHANGE_HEADER_LIST,
    /*
        由于reducer里 defaultState 初始时是 immutable 对象，而 state.set('list', action.data) 中的 action.data 是后台返回到普通JS对象，
        数据格式不统一， 因此当拿到后台返回的数据时，要先把它转换为 immutable 对象
    */
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

/* 通常情况下函数里 return 返回的是一个对象 但当使用 redux-thunk 时  return 可以返回一个函数 */
export const getListData = () => {
    return (dispatch) => {
        Axios.get('api/headerList.json').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(changeHeaderList(data.data))
        }).catch(() => {
            console.log('error');
        })
    }
}