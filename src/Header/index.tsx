import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const HeaderBar = styled.div`
    top:0;
    height:10vh;
    background: #FFFFFF;
    display:flex;
    align-items:center;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
`
const Title = styled.div`
    display:flex:
    align-items:center;
    font-size:20px;
    margin-left:10px;
    font-family: PingFangSC-Medium;
    color: #531DAB;
`
const UserName = styled.div`
    width:'50vh';
    height:'30vh;
`
const mapStateToProps = (state: any) => {
    return {
        loginState: state.loginState,
        userName: state.userName
    }
}

type props = {
    loginState: any,
    userName: any
}

class Header extends Component<props> {

    render() {

        const { userName } = this.props;

        return (
            <>
                <HeaderBar>
                    <Title>{'Kudos'}</Title>
                </HeaderBar>
            </>
        );
    }
}

export default connect(mapStateToProps)(Header);