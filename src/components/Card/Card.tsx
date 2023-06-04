import { useState } from "react"
import { login } from "../../services/login"
import './Card.css'


export const Card = () => {
    const [email, setEmail] = useState <string>('')

    return(

    
                <div className="Card">
                    {/*userData === null || userData === undefined?
        <h1>Loading...</h1>:
        <h1>Informações carregadas</h1>*/}
                    <h1>Realize o Login</h1>
                    <label htmlFor='emailInput'>
                        Email:
                    </label>
                    <input id="emailInput" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                    <label htmlFor='passswordInput'>
                        Senha:
                    </label>
                    <input id='passswordInput' type='password'></input>
                    <button className="buttonLogin" onClick={() => login(email)}>
                        Entrar
                    </button>
                </div>  
    )
}