import { createContext, useContext, useState } from "react";

const LoginContext = createContext({ id: '', username: '', name: '', leaf: -1, peach: -1, auth: false })

const useLoginContext = () => {
    return useContext(LoginContext)
}

const LoginContextProvider = ({ children }) => {
    const [isLoggedin, setisLoggedin] = useState({ id: '', username: '', name: '', leaf: -1, peach: -1, auth: false })

    const login = (id, username, name, leaf, peach) => {
        setisLoggedin((isLoggedin) => ({ id: id, username: username, name: name, leaf: leaf, peach: peach, auth: true }))
    }

    const logout = () => {
        setisLoggedin((isLoggedin) => ({ id: '', username: '', name: '', leaf: -1, peach: -1, auth: false }))
    }

    return (
        <LoginContext.Provider value={{ isLoggedin, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, useLoginContext }