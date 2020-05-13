import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { asyncReducer } from '../Middleware/index';
import { UserKudoInput } from './KudosUserInput';

const delicon = require('../images/deleteicon.png');
const handicon = require('../images/handicon.jpeg');

const KudoMargin = styled.div`
    height:90vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const KudoBox = styled.div`
    position:absolute;
    width:89vh;
    height:70%;
    top:40%;
    overflow:scroll;
`
const TextInfo = styled.span`
    font-family: PingFangSC-Medium;
    font-size:0.6em;
    color: #000000;
    opacity:0.45;
    position:absolute;
`
const ImageStyle = styled.img`
    width:25px;
    height:17px;
    top:58%;
    position:absolute;
`
const mapStateToProps = (state: any) => {
    return {
        kudosData: state.kudosData,
        loginState: state.LoginData
    }
}

type Props = {
    dispatch: any,
    loginState: any,
    kudosData: Array<any>
}

class KudosPage extends Component<Props> {

    state = {
        kudosData: [],
        loginState: {},
        initialFetch: true
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {

        if (nextProps.kudosData.tweetRemoved || nextProps.kudosData.tweetUpdated) {
            this.props.dispatch(asyncReducer());
            return false;
        }
        return true;
    }

    componentDidMount() {
        this.props.dispatch(asyncReducer());
    }

    postData = (_val: any) => {
        this.props.dispatch(asyncReducer(JSON.stringify({
            "message": _val,
            "likes": "0",
            "icon": "profile1",
            "likedby":[],
            "name": "Rajesh Ramaiah",
            "date": String(new Date()),
        }), 'POST', "ADD_JSON_DATA"));
    }

    render() {

        const { userName } = this.props.loginState;

        return (
            (!this.props.loginState.loginCompleted ? null : (
                <KudoMargin>
                    <UserKudoInput post={this.postData} />
                    <KudoBox>
                        <Latestkudos kudos={this.props.kudosData} ldata={userName} disp={this.props.dispatch} />
                    </KudoBox>
                </KudoMargin>
            ))
        )
    }
}

type KudoProps = {
    kudos: any,
    ldata: any,
    disp: any
}

const Latestkudos = ({ kudos, ldata, disp }: KudoProps) => {
    return (
        <div >
            {
                kudos.kudosData.map((data: any, index: number) => {
                    return <UserInfoBlock data={data} key={'#' + index} uName={ldata} disp={disp} />
                })
            }
        </div>
    )
}

type jsoninfo = {
    icon: string,
    id: string,
    name: string,
    date: string,
    likedby: Array<any>,
    likes: number,
    message: string;
}

const imageStyle = {
    width: '40px',
    height: '40px',
    marginTop: '6px'
}

const lessOpacity = {
    opacity: '0.45',
    left: '9%',
    top: '6%'
}

const lessOpacity1 = {
    opacity: '0.45',
    left: '24%',
    top: '6%',
    color: '#CCCCCC'
}

const lessOpacity2 = {
    opacity: '1',
    left: '14%',
    top: '62%',
    color: 'rgb(0, 0, 0)'
}

const updateLikes = (likes: number, uname: string, list: Array<any>) => {
    if (list.indexOf(uname) === -1) { list.unshift(uname) } else { list = [] }
    return JSON.stringify({
        "likes": (list.indexOf(uname) === -1) ? likes - 1 : likes + 1,
        "likedby": list
    })
}

const imagestyle = (_param: Array<any>, name: string) => {
    if (!_param) return { 'left': '9%', 'cursor': 'pointer' };
    if (_param.indexOf(name) == -1) {
        return { 'left': '9%', 'cursor': 'pointer' }
    } else {
        return { 'left': '9%', 'cursor': 'pointer', 'boxShadow': '0px 0px 5px #060842' }
    }

}

const UserInfoBlock = ({ data, uName, disp }: { data: jsoninfo, uName: any, disp: any }) => {
    if (!data.name) return null;
    return (
        <div style={{ 'height': '17vh', 'position': 'relative' }}>
            <img style={imageStyle} src={require(`../images/${data.icon}.png`)}></img>
            <TextInfo style={lessOpacity}>{data.name}</TextInfo>
            <TextInfo style={lessOpacity1}>{data.date}</TextInfo>
            <TextInfo style={lessOpacity2}>{data.likes}</TextInfo>
            <TextInfo style={{ 'top': '26%', 'left': '9%', 'opacity': '0.65' }}>{data.message}</TextInfo>
            {
                data.name == uName && <ImageStyle key={data.id} style={{ 'left': '16%', 'cursor': 'pointer' }} src={delicon} onClick={(e: React.MouseEvent<HTMLElement>) => { disp(asyncReducer(undefined, 'DELETE', 'REMOVE_JSON_DATA', 'Kudos/' + data.id)) }}></ImageStyle>
            }
            <ImageStyle style={imagestyle(data.likedby, uName)} src={handicon} onClick={(e: React.MouseEvent<HTMLElement>) => { disp(asyncReducer(updateLikes(data.likes, uName, data.likedby), 'PATCH', 'UPDATE_JSON_DATA', 'Kudos/' + data.id)) }}></ImageStyle>
        </div>
    )
}

export default connect(mapStateToProps)(KudosPage);