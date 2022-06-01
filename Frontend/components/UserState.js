import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
import UserAPI from '../components/utils/UserAPI.js'

export const UserState = createContext()

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(false)

    const refreshToken = async () =>{
        const res = localStorage.getItem("userAuthToken")
        console.log(res)
        setToken(res)
    }

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    },[])

    const state = {
        token: [token, setToken],
        UserAPI: UserAPI(token)
    }

    return (
        <UserState.Provider value={state}>
            {children}
        </UserState.Provider>
    )
}