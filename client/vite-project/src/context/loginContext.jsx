import { createContext, useContext, useState } from "react";

const LoginContext = createContext({ id: '', username: '', name: '', description: '', leaf: -1, peach: -1, auth: false })

const useLoginContext = () => {
    return useContext(LoginContext)
}

const LoginContextProvider = ({ children }) => {
    const [isLoggedin, setisLoggedin] = useState({ id: '', username: '', name: '', description: '', leaf: -1, peach: -1, auth: false })

    const login = (id, username, name, description, leaf, peach) => {
        setisLoggedin((isLoggedin) => ({ id: id, username: username, name: name, description: description, leaf: leaf, peach: peach, auth: true }))
    }

    const logout = () => {
        setisLoggedin((isLoggedin) => ({ id: '', username: '', name: '', description: '', leaf: -1, peach: -1, auth: false }))
    }

    return (
        <LoginContext.Provider value={{ isLoggedin, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, useLoginContext }