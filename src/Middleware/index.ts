import { APIServiceURL } from '../API/index';
import { kudosDataAction, LoginDataAction } from '../Actions/index';

export const asyncReducer = (_value?: any, method: string = "GET", type: string = 'JSON_DATA', url: string = 'Kudos?_sort=date&_order=desc') => {

    const options = {
        method: method,
        headers: {
            'connection': 'keep-alive',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: _value
    }

    return (dispatch: any) => {
        fetch(APIServiceURL + url, options)
            .then((_data) => {
                if (!_data.ok) {
                    dispatch(LoginDataAction(undefined, 'LOGIN_ERROR'));
                    return;
                }
                return _data.json()
            })
            .then((_val) => {
                if (!_val) return;
                if (type == "LOGIN") {
                    dispatch(LoginDataAction(undefined, 'LOGIN_SUCCESS'));
                } else {
                    dispatch(kudosDataAction(_val, type));
                }
            })

    }
}