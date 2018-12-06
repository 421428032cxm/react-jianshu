import React, { Component } from 'react';
import { WriterWrap } from '../style';
class Writer extends Component {
    render() {
        console.log("writer组件被渲染");
        return (
            <WriterWrap></WriterWrap>
        )
    }
}

export default Writer;