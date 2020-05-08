export const kudosDataAction = (_jsonData: JSON, _type: string) => {
    return {
        type: _type,
        payload: _jsonData
    }
}

export const LoginDataAction = (_jsonData: JSON | undefined , _type: string) => {
    return {
        type: _type,
        payload: _jsonData
    }
}