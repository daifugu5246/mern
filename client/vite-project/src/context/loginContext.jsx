import { createContext, useContext, useState } from "react";

const LoginContext = createContext(false)

const useLoginContext = () => {
    return useContext(LoginContext)
}

const LoginContextProvider = ({children}) => {
    const [isLoggedin, setIsLoggedin] = useState(false)

    const login = () => {
        setIsLoggedin(true)
    }

    const logout = () => {
        setIsLoggedin(false)
    }

    return (
        <LoginContext.Provider value={{ isLoggedin, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, useLoginContext }