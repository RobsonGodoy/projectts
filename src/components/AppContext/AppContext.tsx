import { createContext } from "react"

interface IAPPContext {
    user: string
  }
  
  export const AppContext = createContext({} as IAPPContext)
  
  export const AppContextProvider = ({ children }: any) => {
    const user = 'Robson'
  
    return(
      <AppContext.Provider value={{ user }}>
        {children}
      </AppContext.Provider>
    )
  }