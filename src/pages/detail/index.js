import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
    withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。 
    将组件包一层withRouter，就可以拿到需要的路由信息。
*/
import { withRouter } from 'react-router-dom';
import { DetailrWraper, Header, Content } from './style';
import * as actionCreators from './store/actionCreators'

class Detail extends Component {
    render() {
        return (
            <DetailrWraper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailrWraper>
        )
    }
    componentDidMount() {
        // 通过动态路由跳转所携带的参数(如 id)，可在跳转后的组件里通过this.props.match.params字段来获取
        console.log(this.props.match.params.id);
        this.props.getDetailData(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.detail.get('title'),
    content: state.detail.get('content')
})

const mapDispatchToProps = (dispatch) => ({
    getDetailData(id) {
        dispatch(actionCreators.getDetailData(id));
    }
})
// 在APP.js里，引入Detail组件时，直接加载的时loadable.js，导致在 detail 组件的 index.js 文件里无法直接获取到路由里的内容，
// 而 'react-router-dom' 里的 withRouter 方法可以 Detail 组件有能力获取到 router 里的所有的参数和内容，从而可以获取路由里的参数 id
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));