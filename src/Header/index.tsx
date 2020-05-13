import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LoginDataAction } from '../Actions/index';

const HeaderBar = styled.div`
    top:0;
    height:10vh;
    background: #FFFFFF;
    display:flex;
    align-items:center;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
`

const username = styled.span`
    marginTop: '6px',
    position:'absolute'
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    marginTop: 6px;
    position:absolute;
    cursor:pointer;
`

const Title = styled.div`
    display:flex:
    align-items:center;
    font-size:20px;
    margin-left:10px;
    font-family: PingFangSC-Medium;
    color: #531DAB;
`

const Username = styled.div`
    right:25%;
    position:absolute;
    font-family: PingFangSC-Medium;
`

const mapStateToProps = (state: any) => {
    return {
        loginState: state.LoginData,
        userName: state.userName
    }
}

type props = {
    loginState: any,
    userName: any,
    dispatch: any
}

const imageStyle = {
    width: '40px',
    height: '40px',
    marginTop: '6px'
}

class Header extends Component<props> {

    static defaultProps = {
        loginState: {
            loginCompleted: false
        }
    }

    doLogout = () => {
        this.props.dispatch(LoginDataAction(undefined, 'LOGIN_OUT'))
    }

    render() {

        const { loginState } = this.props;

        return (
            <>
                <HeaderBar>
                    <Title>{'Kudos'}</Title>
                    {
                        loginState.loginCompleted &&
                        <>
                            <Image style={{ 'right': '40%' }} src={require(`../images/profile1.png`)}></Image>
                            <Username>{'Rajesh Ramaiah'}</Username>
                            <Image style={{ 'right': '18%', 'position': 'absolute' }} src={require(`../images/signout.png`)} onClick={this.doLogout}></Image>
                            <Username style={{ 'right': '9%', 'cursor': 'pointer' }} onClick={this.doLogout}>{'Sign Out'}</Username>
                        </>
                    }
                </HeaderBar>
            </>
        );
    }
}

export default connect(mapStateToProps)(Header);