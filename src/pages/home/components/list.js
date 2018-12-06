import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        console.log('List组件被渲染')
        const { articleList, getMoreList, currentPage } = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => {
                        if (item.get('imgUrl') !== '') {
                            return (
                                <Link key={index} to={'/detail/' + item.get('id')}>
                                    <ListItem>
                                        <ListInfo>
                                            <h3>{item.get('title')}</h3>
                                            <p>{item.get('desc')}</p>
                                        </ListInfo>
                                        <img className="list-img" src={item.get('imgUrl')} alt="文章列表图片"/>
                                    </ListItem>
                                </Link>
                            )
                        }else{
                            return (
                                <Link key={index} to={'/detail/' + item.get('id')}>
                                    <ListItem>
                                        <ListInfo style={{width: '100%'}}>
                                            <h3>{item.get('title')}</h3>
                                            <p>{item.get('desc')}</p>
                                        </ListInfo>
                                    </ListItem>
                                </Link>
                            )
                        }
                    })
                }
                <LoadMore onClick={() => getMoreList(currentPage)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (sate) => ({
    articleList: sate.home.get('articleList'),
    articlePage: sate.home.get('articlePage')
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(currentPage) {
        dispatch(actionCreators.getMoreList(currentPage))
    }
})

// 这里只是单纯的从store里获取数据，并不需要改变数据，因此不需要mapDispatchToProps方法，connect方法的第二个参数传null即可

export default connect(mapStateToProps, mapDispatchToProps)(List);