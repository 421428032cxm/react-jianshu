import Axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title: title,
    content: content
})

export const getDetailData = (id) => {
    return (dispatch) => {
        Axios.get('http://localhost:3000/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
        })
    }
}