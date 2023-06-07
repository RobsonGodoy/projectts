import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
}


export const CardInfoAcces = () => {
    const actualData = new Date()
    
    return (
        <div>
                <p>Ultimo acesso: {`${actualData.getDate()}/${actualData.getMonth() + 1}/${actualData.getFullYear()}  ${actualData.getHours()}:${actualData.getMinutes()}`}</p>
        </div>
    )
}

export const CardInfoAccount = () => {
    const [userData, setUserData] = useState <null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])
    return (
        <div>
            <h3>Nome: {userData?.name}</h3>
            <h3>Saldo: R$ {userData?.balance}</h3>
            <h3>Email: {userData?.email}</h3>
        </div>
    )
}

