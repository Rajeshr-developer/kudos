import React, { useState } from 'react';
import styled from 'styled-components';

export const Title = styled.span`
    top: 10%;
    font-family: PingFangSC-Medium;
    font-size: 0.8em;
    color: #000000;
    opacity: 0.85;
    position: absolute
`
export const CharacterCount = styled.span`
    font-family: PingFangSC-Medium;
    font-size:0.6em;
    color: #000000;
    opacity:0.45;
    position:absolute;
    font-family: PingFangSC-Medium;
    top:90%
`
const TextInputBox = styled.textarea`
    font-family: PingFangSC-Medium;
    width: 100%;
    font-size:1em;
    height: 62%;
    top: 23%;
    left: 0%;
    position:absolute;
    resize: none;
    color:rgba(0,0,0,0.45);
    maxlength:9
`
const Button = styled.input<{ bgcolor?: string, textcolor?: string, rightPos?: string }>`
    font-family: PingFangSC-Medium;
    font-size:0.8em;
    background-color:${props => (props.bgcolor ? props.bgcolor : 'none')};
    color:${props => (props.textcolor ? props.textcolor : 'white')};
    border-radius:4px;
    height:16%;
    width:12%;
    right:${props => (props.rightPos ? props.rightPos : '14%')};
    top:95%;
    position:absolute;
`
type props = {
    post: any
}

export const UserKudoInput = ({ post }: props) => {

    const [textValue, setState] = useState('');

    const kudosFeed = (e: any) => {
        if(e.target.value.length <= 200)
        setState(e.target.value);
    }

    const buttonAction = (e: any) => {
        if (e.target.value == 'Post') {
            if(textValue!='')post(textValue);
        } else {
            setState('');
        }
    }

    return (
        <div style={{ 'height': '26vh', 'width': '89vh', 'top': '10%', 'position': 'absolute' }}>
            <Title>{'Post Kudos'}</Title>
            <TextInputBox value={textValue} onChange={kudosFeed} />
            <CharacterCount>{textValue.length + ' of 200'}</CharacterCount>
            <Button bgcolor={'#1890FF'} type='submit' value={'Post'} onClick={buttonAction} />
            <Button textcolor={'rgba(0,0,0,0.45)'} rightPos={'0%'} type='submit' value={'Cancel'} onClick={buttonAction} />
        </div>
    )
}