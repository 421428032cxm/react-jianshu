/*
    actionCreators.js用来统一创建管理action 处理异步请求
*/
import * as actionTypes from './actionTypes';
import Axios from 'axios';
import { fromJS } from 'immutable';

const homeDataAction = (result) => ({
    type: actionTypes.INIT_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,
    users: result.users
})

const addHomeList = (result, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(result),
    nextPage: nextPage
})

/* 通常情况下函数里 return 返回的是一个对象 但当使用 redux-thunk 时  return 可以返回一个函数 */
export const gethomeData = () => {
    return (dispatch) => {
        Axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(homeDataAction(result));
        })
    }
}

export const getMoreList = (currentPage) => {
    return (dispatch) => {
        Axios.get('/api/homeList.json?page=' + currentPage).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, currentPage + 1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    show: show
})