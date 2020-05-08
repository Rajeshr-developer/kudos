import React from 'react';
import { createStore } from 'redux';
import { KudosReducer } from '../Reducers/KudosReducer';
import { LoginReducer } from '../Reducers/LoginReducer';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    combineReducers({ kudosData: KudosReducer, LoginData: LoginReducer }),
    applyMiddleware(thunk)
)