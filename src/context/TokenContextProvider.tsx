import React from 'react'

interface TokenContext {
    token: string
    setToken: React.Dispatch<React.SetStateAction<string>>
}

export const TokenContext = React.createContext<TokenContext>({
    token: '',
    setToken: () => {}
})


const TokenContextProvider = ({ children }: any) => {
    const [token, setToken] = React.useState<string>('')

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}