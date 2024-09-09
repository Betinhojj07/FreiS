import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio4(){
    
const [num1, setNum1]=useState(0)
const [num2, setNum2]=useState(0)
const [num3, setNum3]=useState(0)
const [res, setRes]=useState(0)

function somar(){
    let vl = (num1 * 13.50) + (num2 * 15) + (num3 * 17.50)
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
                <h2>Exercicio 03 - Valor por quantidade</h2>
            </div>
            </div>
            <div className='linha03'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
            </div>

        </div>

        <div className='exercicio-exe'>
            
            <div className='pedido-exercicio03'>
                <div className='container-acai'>
                <div className='qtd'>
                <label htmlFor="">Quantidade pequeno</label>
                <input className='ip01' type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
                
                <div className='qtd'>

                <label htmlFor="">Quantidade médio</label>
                <input className='ip01' type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                </div>


                <div className='qtd'>

                <label htmlFor="">Quantidade Grande</label>
                <input className='ip01' type="text" value={num3} onChange={e => setNum3(e.target.value)} />
                </div>
                </div>
    
                <div className='bt-executar'>
                <button className='executar' onClick={somar}>Executar</button>
                </div>

                </div>

            <p>Resultado: O total é R${res}</p>
        </div>
       
        </div>
    );
}