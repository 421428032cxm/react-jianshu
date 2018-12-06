import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrap, LoginBox, Input, Button } from './style';
import * as actionCreators from './store/actionCreators';

class Login extends Component {
    render() {
        const { loginState } = this.props;
        if (!loginState) {
            return(
                <LoginWrap>
                    <LoginBox>
                        <Input placeholder='username' ref={(input) => {this.account = input}}/>
                        <Input placeholder='password' type='password' ref={(input) => this.password = input}/>
                        <Button onClick={() => {this.props.login(this.account, this.password)}}>Login</Button>
                    </LoginBox>
                </LoginWrap>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginState: state.login.get('login')
})

const mapDispatchToProps = (dispatch) => {
    return {
        login(account, password) {
            dispatch(actionCreators.login(account, password));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);