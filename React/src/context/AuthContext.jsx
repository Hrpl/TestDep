import { createContext, useState } from "react";

export const AuthContext = createContext({
    user:{
        login: '',
        password: ''
    }
})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        login: '',
        password: '',
    })

    return(

        <AuthContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}