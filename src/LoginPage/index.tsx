import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { asyncReducer } from '../Middleware/index';

const Form = styled.form`
    margin-top:10px;
`
const LoginBox = styled.div`
    left: 38%;
    width: 40vh;
    top: 33%;
    position: absolute;
    height: 40vh;
`
const SignIn = styled.div`
    font-family: PingFangSC-Medium;
    font-size:1.2em;
    color: #000000;
    opacity:0.85;
`
const InputBox = styled.input`
    font-family: PingFangSC-Medium;
    font-size:1em;
    color: #000000;
    width:98%;
    opacity:0.85;
    margin-bottom:10px;
`
const Button = styled(InputBox)`
    background-color:#1890FF;
    color:white;
    border-radius:4px;
    height:37px;
    width:100%;
    margin-top:10px;
`
const TextInfo = styled.span`
    font-family: PingFangSC-Medium;
    font-size:0.7em;
    color: #000000;
    opacity:0.85;
    margin-top:10px;
`
const mapStateToProps = (state: any) => {
    return {
        loginState: state.LoginData
    }
}

type State = {
    uName: string;
    pass: string;
}

type Props = {
    loginState: any;
    dispatch: any;
}

class LoginPage extends Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            uName: '',
            pass: ''
        }
    }

    componentDidMount() {
        console.log(' [ LoginPage - componentDidMount] ', this.props);
    }

    onchangetext = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.type) {
            case 'text':
                this.setState({ uName: e.target.value });
                break;
            case 'password':
                this.setState({ pass: e.target.value });
                break;
        }

    }

    onsubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        this.props.dispatch(asyncReducer(undefined, "GET", "LOGIN", (this.state.uName+'~'+this.state.pass)));
        e.preventDefault();
    }

    render() {
        return (
            (this.props.loginState.loginCompleted ? null : (
                <LoginBox>
                    <SignIn>{'Sign In'}</SignIn>
                    <Form onSubmit={this.onsubmit.bind(this)}>
                        <TextInfo>{'Username'}</TextInfo>
                        <InputBox type='text' value={this.state.uName} onChange={this.onchangetext.bind(this)}></InputBox>
                        <TextInfo>{'Password'}</TextInfo>
                        <InputBox type='password' value={this.state.pass} onChange={this.onchangetext.bind(this)}></InputBox>
                        <Button type='submit' value={'Sign In'}></Button>
                    </Form>
                </LoginBox>
            ))
        );
    }
}

export default connect(mapStateToProps)(LoginPage);