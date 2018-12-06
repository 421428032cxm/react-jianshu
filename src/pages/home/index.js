import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrap, HomeLeft, HomeRight, BackTop } from './style';
import List from './components/list';
import Recommend from './components/recommend';
import Topic from './components/topic';
import Writer from './components/writer';
import * as actionCreators from './store/actionCreators'

class Home extends Component {

    componentDidMount() {
        this.props.initHomeData();
        this.bindEvents();
    }

    handleBackTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    // 组件即将被销毁时自动执行
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    render() {
        console.log("HOME主组件被渲染");
        const { showScroll } = this.props;
        return (
            <HomeWrap>
              <HomeLeft>
                <img className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4500/e20f8255334b480222e199011779eb8d0cdabd0e.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner"/>
                <Topic />  
                <List />
              </HomeLeft>
              <HomeRight>
                <Recommend />
                <Writer />
              </HomeRight>
              {
                  showScroll ? <BackTop onClick={this.handleBackTop}>Top</BackTop>: null
              }
            </HomeWrap>
        )
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.home.get('showScroll')
})
const mapDispatchToProps = (dispatch) => ({
    initHomeData() {
        dispatch(actionCreators.gethomeData());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 300) {
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);   