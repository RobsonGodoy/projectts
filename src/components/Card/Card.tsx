import { useContext, useState } from "react";
import login from "../../services/login";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";
import { changeLocalStorage } from "../../services/storage";

const Card = () => {
  const [email, setEmail] = useState<string>('');
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert('Email inválido');
    }

    setIsLoggedIn(true);
    changeLocalStorage({login: true})
    navigate('/conta/1');
  };

  return (
    <div className="Card">
      {/*userData === null || userData === undefined?
        <h1>Loading...</h1>:
        <h1>Informações carregadas</h1>*/}
      <h1>Realize o Login</h1>
      <label htmlFor="emailInput">Email:</label>
      <input
        id="emailInput"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <label htmlFor="passswordInput">Senha:</label>
      <input id="passswordInput" type="password"></input>
      <button className="buttonLogin" onClick={() => validateUser(email)}>
        Entrar
      </button>
    </div>
  );
};

export default Card;
