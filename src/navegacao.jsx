

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/landingpage';
import Sobre from './pages/sobre';
import Exercicio01 from "./pages/exercicio01";




export default function Navegacao(){
  return(
      
        <BrowserRouter>
          <Routes>
            <Route path='/' to element={<App/>}></Route>
            <Route path='/sobre' to element={<Sobre/>}></Route>
            <Route path='/Exercicio01' to element={<Exercicio01/>}></Route>
          </Routes>
        </BrowserRouter>
     
    );
  
}
