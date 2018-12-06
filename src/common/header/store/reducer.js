import * as actionTypes from './actionTypes';
/*
为什么使用immutable?
    如果使用原始的reducer的写法，自己手动的保证state不被直接修改，这样会存在风险
*/
import { fromJS } from 'immutable';  // immutable的fromJS方法可以将JS对象转化为immutable对象

/* 使用immutable库时 reducer的写法 */
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],  // 使用fromJS时 对于数组， 数组最外层和数组内包含的对象统统会被转化为immutable对象
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);  // immutable对象的set方法并没有直接修改原始的state，而是结合之前的immutable对象的值和设置的值，返回一个全新的对象
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_HEADER_LIST:
            // 当同时需要修改state中多个数据的内容时，可以使用merge方法
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
} 

/* 不使用immutable库时 reducer的写法 */
// const defaultState = {
//     focused: false
// }

// export default (state = defaultState, action) => {
//     if(action.type === actionTypes.SEARCH_FOCUS) {
//         return {
//             focused: true
//         }
//     }
//     if(action.type === actionTypes.SEARCH_BLUR) {
//         return {
//             focused: false
//         }
//     }
//     return state;
// } 