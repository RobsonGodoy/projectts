import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Conta.css'
import { api } from '../../../services/api'
import { CardInfoAcces, CardInfoAccount } from '../../Card/CardInfo'


interface UserData {
    id: string
    email: string
    password: string
    name: string
    balance: number
}


export const Conta = () => {
    const [userData, setUserData] = useState <null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])


    const { id } = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id) {
        navigate('/')
    }


    return(
        <div className="Account">
            <div className="InfoAccess">
                <h1>Informações de acesso</h1>

                { userData === null || userData === undefined?
                    <h1>Loading...</h1>:
                    <CardInfoAcces/> 
                }
                
            </div>
            <div className="InfoAccount">
                <h1>Informações da conta</h1>

                { userData === null || userData === undefined?
                    <h1>Loading...</h1>:
                    <CardInfoAccount/>
                }

            </div>
        </div>
    )
}
