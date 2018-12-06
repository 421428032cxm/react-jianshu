import React from 'react';
import Loadable from 'react-loadable';

function LoadingComponent() {
    return <div>Loading...</div>;
}

const WriteLoadable = Loadable({
    loader: () => import('./index'),  // import导入的是需要异步加载执行的组件
    loading: LoadingComponent
});

export default () => <WriteLoadable/>;
