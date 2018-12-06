import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
    render() {
        const { loginState } = this.props;
        if (loginState) {
            return(
                <h2>写文章页面</h2>
            )
        } else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginState: state.login.get('login')
})

export default connect(mapStateToProps, null)(Write);