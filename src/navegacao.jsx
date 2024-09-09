

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/landingpage';
import Sobre from './pages/sobre';
import Exercicio01 from "./pages/exercicio01";
import Exercicio02 from "./pages/exercicio02";
import Exercicio03 from "./pages/exercicio03";
import Exercicio4 from "./pages/exercicio04";
import Exercicio11 from "./pages/exercicio11";
import Exercicio10 from "./pages/exercicio10";



export default function Navegacao(){
  return(
      
        <BrowserRouter>
          <Routes>
            <Route path='/' to element={<App/>}></Route>
            <Route path='/sobre' to element={<Sobre/>}></Route>
            <Route path='/Exercicio01' to element={<Exercicio01/>}></Route>
            <Route path="/Exercicio02" to element={<Exercicio02/> } ></Route>
            <Route path="/Exercicio03" to element={<Exercicio03/> } ></Route>
            <Route path="/Exercicio011" to element={<Exercicio11/> } ></Route>
            <Route path="/Exercicio10" to element={<Exercicio10/> } ></Route>
            <Route path="/Exercicio4" to element={<Exercicio4/> } ></Route>
          </Routes>
        </BrowserRouter>
     
    );
  
}
