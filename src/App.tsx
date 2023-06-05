import { AppContextProvider } from './components/AppContext/AppContext';
import Card from './components/Card/Card';
import { Layout } from './components/Layout';
import { Conta } from './components/Pages/Account/Conta';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
                  <Route path="/" element={
            <Layout>
              <Card />
            </Layout>
          }/>
            <Route path="/conta/:id" element= {
                <Layout>
                  <Conta/>
                </Layout>

                  } />
            </Routes>
          </BrowserRouter>        
      </AppContextProvider>

    </>     
  );
}

export default App;
 