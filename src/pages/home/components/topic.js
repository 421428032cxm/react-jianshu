import React, { Component } from 'react';
import { TopicWrap, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.topicList === this.props.list) {
            return false;
        }else{
            return true;
        }
    }
    render() {
        console.log("topic组件被渲染");
        return (
            <TopicWrap>
                {
                    this.props.list.map((item) => {
                        return (
                            // 这里这所以用get 是因为通过fromJS 拿到的topicList是一个immutable对象（不是普通的JS对象）
                            <TopicItem key={item.get('id')}>
                                <img className="topic-img" src={item.get('imgUrl')} alt="topic"/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrap>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.home.get('topicList')
})

export default connect(mapStateToProps, null)(Topic);