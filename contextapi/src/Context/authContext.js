/* eslint-disable react-hooks/rules-of-hooks */

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie"
export const authContextVariable = createContext(null);

export const useAuth = () => {
    const auth = useContext(authContextVariable);
    return auth;
}
export const AuthProvider = ({ children }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isLoggedIn, setisLoggedIn] = useState(false)
    // useEffect to set cookies when name and email change
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)



    return (<authContextVariable.Provider value={{ name, email, isLoggedIn, setisLoggedIn, setName, setEmail }}>
        {children}
    </authContextVariable.Provider>

    )
}