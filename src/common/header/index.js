import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import * as loginActionCreators from '../../pages/login/store/actionCreators';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrap, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style';
/*
  使用react-transition-group完成过渡动画：
      cnpm install react-transition-group --save  完成插件安装
      引入CSSTransition（CSSTransition实际上是一个组件）, 用它包裹需要设置动画的组件
      timeout属性为动画时长
      in属性为动画进出场的时机
      classNames：动画标识 通过设置的标识作为class前缀 来设置进出场动画不同阶段的css样式 
*/
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handelMouseEnter, handelMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();  // 拿到的list是immutable对象，不能直接通过下标来获取value值，需先转换成JS对象
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
            pageList.push(
              <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe679;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )  
    }else{
        return null
    }
  }

  render() {
    const { list } = this.props;
    return (
      <HeaderWrapper>
          <Link to='/'>
              <Logo />
          </Link>
          <Nav>
              <NavItem className="left active">首页</NavItem>
              <NavItem className="left">下载App</NavItem>
              {
                  this.props.login ? 
                      <NavItem className="right" onClick={this.props.exit}>退出</NavItem> : 
                      <Link to='/login'><NavItem className="right">登陆</NavItem></Link>   
              }
              <NavItem className="right">Aa</NavItem>
              <SearchWrap>
                  <CSSTransition timeout={200} in={this.props.focused} classNames="slider">
                      <NavSearch 
                        className={this.props.focused ? 'focused': ''} 
                        onFocus={() => this.props.handleInputFocus(list)} 
                        onBlur={this.props.handleInputBlur}></NavSearch>
                  </CSSTransition>
                  {this.getListArea()}
              </SearchWrap>
          </Nav>
          <Addition>
              <Link to='/write'><Button className="writting">写文章</Button></Link>
              <Button className="reg">注册</Button>
          </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        /* 由于把header组件的reducer单独拆分出来 state的数据结构发生了变化  多了一层header 因此要先通过.header 才能找到focused（此时为不使用immutable库时的写法）*/
        // focused: state.header.focused

        /* 使用 immutable库时的写法 */
        focused: state.header.get('focused'),
        mouseIn: state.header.get('mouseIn'),
        list: state.header.get('list'),
        page: state.header.get('page'),
        totalPage: state.header.get('totalPage'),
        login: state.login.get('login')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            console.log(list);
            // list初始时其size为0  这里是让ajax请求只执行一次
            if (list.size === 0) {
                dispatch(actionCreators.getListData());
            }
            dispatch(actionCreators.searchFocus());
        },
        
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handelMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handelMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            console.log(originAngle);
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        // 这里是header组件，而退出操作所派发的action应该放在login组件store目录下的actionCreators里，因此需要引入login组件的actionCreators
        exit() {
            dispatch(loginActionCreators.exit())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
