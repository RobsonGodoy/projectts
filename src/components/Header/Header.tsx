import { useContext } from 'react'
import './Header.css'
import { AppContext } from '../AppContext/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
    const {isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({login: false})
        setIsLoggedIn(false)
        navigate('/')
    }
    return (
        <>
   
             <div className='header'>
                <div className='functions'>
                    <h1>JJ Bank</h1>
                    {
                        isLoggedIn && (
                            <button className='logout' onClick={() => logout()}>Sair</button>
                        )
                    }
                </div>

                <p>O banco dos desenvovledores</p>
            </div>      
        

        </>
        )   
        
       

}