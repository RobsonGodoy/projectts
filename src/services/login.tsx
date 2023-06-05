import { api } from "./api"

 const login = async (email: string): Promise <boolean> => {


    const data:any = await api

    if(email !== data.email) {
        return false
    }

    return true
}
export default login