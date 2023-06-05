import { createContext, useState } from "react"

interface IAPPContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void 
    
}
  
  export const AppContext = createContext({} as IAPPContext)
  
  export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const user = 'Robson'
  
    return(
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        {children}
      </AppContext.Provider>
    )
  }