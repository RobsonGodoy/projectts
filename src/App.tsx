import { Layout } from './components/Layout';
function App() {
  return (
      <Layout>
        <h1>Realize o Login</h1>
        <label htmlFor='emailInput'>
          Email
        </label>
        <input id="emailInput" />
        <label htmlFor='passswordInput'>
          Senha
        </label>
        <input id='passswordInput' type='password' />
        <button>
          Entrar
        </button>
      </Layout>

  );
}

export default App;
 