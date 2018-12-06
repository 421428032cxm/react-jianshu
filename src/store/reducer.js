/*
    当项目数据量比较庞大时，所有的reducer相关的逻辑全部放在该文件下会难以阅读和维护，这里将不同的组件的reducer单独拆分开，
    然后在此文件里通过redux的combineReducers方法对所有的reducer进行整合并导出
*/
import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
import loginReducer from '../pages/login/store/reducer';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer;