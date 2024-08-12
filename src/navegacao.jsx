

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/landingpage';
import Sobre from './pages/sobre';
import Exercicio01 from "./pages/exercicio01";
import Exercicio02 from "./pages/exercicio02";
import Exercicio03 from "./pages/exercicio03";
import Exercicio011 from "./pages/exercicio11";



export default function Navegacao(){
  return(
      
        <BrowserRouter>
          <Routes>
            <Route path='/' to element={<App/>}></Route>
            <Route path='/sobre' to element={<Sobre/>}></Route>
            <Route path='/Exercicio01' to element={<Exercicio01/>}></Route>
            <Route path="/Exercicio02" to element={<Exercicio02/> } ></Route>
            <Route path="/Exercicio03" to element={<Exercicio03/> } ></Route>
            <Route path="/Exercicio011" to element={<Exercicio011/> } ></Route>
          </Routes>
        </BrowserRouter>
     
    );
  
}
