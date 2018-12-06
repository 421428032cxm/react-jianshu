import React, { Component } from 'react';
import { connect } from 'react-redux';
import {RecommendWrap, RecommendItem} from '../style';

class Recommend extends Component {
    render() {
        console.log("Recommend组件被渲染");
        return (
            <RecommendWrap>
                {
                    this.props.list.map((item) => {
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                    })
                }      
            </RecommendWrap>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.home.get('recommendList')
})

export default connect(mapStateToProps, null)(Recommend);