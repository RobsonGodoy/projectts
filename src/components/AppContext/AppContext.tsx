import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../../services/storage"

interface IAPPContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void 
    
}
  
  export const AppContext = createContext({} as IAPPContext)
  
  export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const storage = getAllLocalStorage()

    useEffect(() => {
      if (storage) {
        const {login} = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [storage])

    const user = 'Robson'
  
    return(
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        {children}
      </AppContext.Provider>
    )
  }