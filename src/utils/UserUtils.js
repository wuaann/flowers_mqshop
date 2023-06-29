// @flow
import * as React from 'react';

const USER_KEY = 'user';

const setUser =(user) => {
    return localStorage.setItem(USER_KEY,user)
}

const getUser =() =>{
    return localStorage.getItem(USER_KEY)
}

const clearUser = () => {
    localStorage.removeItem(USER_KEY)
}

export default {
    setUser,
    getUser,
    clearUser
}