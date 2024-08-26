import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio02(){

const [num1, setNum1]=useState(0)
const [res, setRes]=useState(0)

function somar(){
    let vl = num1*1000
    setRes(vl)
}

    return(
        <div className="Landing-page">
<Cabecalho/>

        <div className='faixa-exercicio-01'>
            <div className='cima'>

            <div className='seta-voltar'>
                <Link to="/"><img src='/assets/img/voltar.png'></img></Link>
            </div>
            <div className='titulo'>
                <h2>Exercicio 02 - Converter Kg/gramas</h2>
            </div>
            </div>
            <div className='linha02'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implementar um programa em Javascript para <span>converter Kilos em gramas</span></p>
            </div>

        </div>

        <div className='exercicio-exe'>

            <div className='pedido'>
                <label htmlFor="">Valor em gramas</label>
                <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>


                <button className='executar' onClick={somar}>Executar</button>

            </div>
            <p>Resultado: O total é {res}g</p>
        </div>
       
        </div>

        

    )
}