import { login } from "../../services/login"
import './Card.css'

interface ICard {
    email?: string,
    password?: string
}



export const Card = ({email, password}: ICard) => {
    return(
        <div className="Card">
            <h1>Realize o Login</h1>
            <label htmlFor='emailInput'>
                Email:
            </label>
            <input id="emailInput">{email}</input>
            <label htmlFor='passswordInput'>
                Senha:
            </label>
            <input id='passswordInput' type='password'>{password}</input>
            <button className="buttonLogin" onClick={login}>
                Entrar
            </button>
        </div>     
    )
}