import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/index';
import Header from './common/header';
import Home from './pages/home/index'; 
// Detail组件使用了 react-loadable 来实现异步加载 引入detail组件时，要引入的是detail目录下的 loadable.js，而不是 index.js
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';
import Write from './pages/write/loadable';
import GlobalStyle from './style';
import GlobalIconFont from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <GlobalStyle />
              <GlobalIconFont />
              <Header />
              <Route path='/' exact component={Home}></Route>
              {/* 通过动态路由，跳转到detail组件时，传递了一个参数id，由于引入Detail，加载的是loadable.js，而不是index.js，因
                此，在detail组件的index.js里，无法直接获取路由里的内容 */}
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
