import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio6(){
    
const [num1, setNum1]=useState(0)
const [num2, setNum2]=useState(0)
const [num3, setNum3]=useState(0)
const [res, setRes]=useState()

function somar(){
let div = (1+num2)/100
let mult = num1 * div
let calculo = mult - 300

setRes(`o salário liquido é de R$${calculo.toFixed(2)}`)
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
                <h2>Exercício 06 - Salário líquido</h2>
            </div>
            </div>
            <div className='linha06'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implemente um programa em javascript para <span>calcular o salário líquido</span>  de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais</p>
            </div>

        </div>

        <div className='exercicio-exe'>
            
            <div className='pedido-exercicio05'>
                <div className='container-livro'>
                <div className='qtd'>
                <label htmlFor="">Salário Base</label>
                <input className='ip5' type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
                
                <div className='qtd'>

                <label htmlFor="">Bônus mensal em porcentagem</label>
                <input className='ip5' type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                </div>


                <div className='qtd'>

                <label htmlFor="">Total de descontos</label>
                <input className='ip5' type="text" value={num3} onChange={e => setNum3(e.target.value)} />
                </div>
                </div>
    
                <div className='bt-executar'>
                <button className='executar-ex-5' onClick={somar}>Executar</button>
                </div>

                </div>

            <p>{res}</p>
        </div>
       
        </div>
    );
}