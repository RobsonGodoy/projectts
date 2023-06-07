import { useContext, useState } from "react";
import login from "../../services/login";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";
import { changeLocalStorage } from "../../services/storage";

const Card = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);
    if (!email) {
      return alert('Email inválido');
    }
  
    if (!password) {
      return alert('Senha inválida');
    }

    if (!loggedIn) {
      return alert('Email inválido');
    }

    setIsLoggedIn(true);
    changeLocalStorage({login: true})
    navigate('/conta/1');
  };

  return (
    <div className="Card">
      <h1>Realize o Login</h1>
      <label htmlFor="emailInput">Email:</label>
      <input
        id="emailInput"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <label htmlFor="passswordInput">Senha:</label>
      <input
        id="passswordInput"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"></input>
      <button className="buttonLogin" onClick={() => validateUser(email, password)}>
        Entrar
      </button>
    </div>
  );
};

export default Card;
