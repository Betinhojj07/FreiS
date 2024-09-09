import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio4(){
    
const [num1, setNum1]=useState('')
const [num2, setNum2]=useState()
const [num3, setNum3]=useState()
const [res, setRes]=useState()

function somar(){
 let mult = num2 * num3
 let resultado = mult/3600
 setRes(`você lerá ${num1} em ${resultado.toFixed(2)} horas`)

 setNum2()
 setNum3()
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
                <h2>Exercicio 04 - Leitura do Livro</h2>
            </div>
            </div>
            <div className='linha04'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implementar um programa em Javascript que <span>calcule</span> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página</p>
            </div>

        </div>

        <div className='exercicio-exe'>
            
            <div className='pedido-exercicio04'>
                <div className='container-livro'>
                <div className='qtd'>
                <label htmlFor="" className='title-input'>Nomedo Livro</label>
                <input className='ip4' type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
                
                <div className='qtd'>

                <label htmlFor="" className='title-input'>Total de páginas</label>
                <input className='ip4' type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                </div>


                <div className='qtd'>

                <label htmlFor="" className='title-input'>Tempo em segundo de leitura</label>
                <input className='ip4' type="text" value={num3} onChange={e => setNum3(e.target.value)} />
                </div>
                </div>
    
                <div className='bt-executar'>
                <button className='executar-ex-4' onClick={somar}>Executar</button>
                </div>

                </div>

            <p>{res}</p>
        </div>
       
        </div>
    );
}