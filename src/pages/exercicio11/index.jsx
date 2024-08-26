import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio11(){

const [num1, setNum1]=useState(0)
const [res, setRes]=useState([])


function introduzir(){
    let tabuada = [];

    for(let i = 0; i<=10;i++){
        let mult = i * num1
        let Resultado = `${num1} x ${i} = ${mult}`

        tabuada.push(Resultado)
    }
    setRes(tabuada)

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
                <h2>Exercicio 11 - Tabuada</h2>
            </div>
            </div>
            <div className='linha11'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
            </div>

        </div>

        <div className='exercicio-exe'>
            
            <div className='pedido-exercicio03'>
                <div className='container-acai'>
                <div className='qtd'>
                <label htmlFor="">Tabuada</label>
                <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
            
                </div>
    
                <div className='bt-executar'>
                <button className='executar' onClick={introduzir} >Executar</button>
                </div>

                </div>
        {
            res.map(item => (
                <p>{item}</p>
            ))

        }
        </div>
       
        </div>

        

    )
}