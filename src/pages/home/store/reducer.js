// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    users: [],
    currentPage: 1,
    totalPage: null,
    showScroll: false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.INIT_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                users: fromJS(action.users)
            });
        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                currentPage: action.nextPage + 1
            });
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
} 
