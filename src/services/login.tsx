import { api } from "./api"

 const login = async (email: string, password: string): Promise <boolean> => {

     const data:any = await api

    if(email !== data.email) {
        return false
    } else if(password !== data.password) {
        return false
    }

    return true
}
export default login