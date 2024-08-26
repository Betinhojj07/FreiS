import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio01(){

const [num1, setNum1]=useState(0)
const [num2, setNum2]=useState(0)
const [res, setRes]=useState(0)

function somar(){
    let vl = num1-num2
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
                <h2>Exercicio 01 - Cupom de desconto</h2>
            </div>
            </div>
            <div className='linha'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
            </div>

        </div>

        <div className='exercicio-exe'>

            <div className='pedido'>
                <label htmlFor="">Informe o valor do pedido</label>
                <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>

                <label htmlFor="">Informe o valor do Cupom</label>
                <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />

                <button className='executar' onClick={somar}>Executar</button>

            </div>
            <p>O valor a se pagar é R${res}</p>
        </div>
       
        </div>

        

    )
}