import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio7(){
    
const [num1, setNum1]=useState('')
const [num2, setNum2]=useState('')
const [res, setRes]=useState()

function somar(){
    let cor_primaria =true
if(num1 ==="amarelo"|| num1 ==="vermelho" || num1 ==="azul" && num2==="amarelo"||num2==="vermelho"||num2==="azul"){
    setRes(`As duas cores são primárias? ${cor_primaria}`)
}else {
    cor_primaria = false
    setRes(`As duas cores são primárias? ${cor_primaria}`)
}
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
                <h2>Exercício 07 - Cores primárias</h2>
            </div>
            </div>
            <div className='linha07'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implementar um programa em javascript para <span> verificar </span>se duas cores são primárias</p>
            </div>

        </div>

        <div className='exercicio-exe'>
            
            <div className='pedido-exercicio05'>
                <div className='container-livro'>
                <div className='qtd'>
                <label htmlFor="">Cor 1</label>
                <input className='ip5' type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
                
                <div className='qtd'>

                <label htmlFor=""> Cor 2</label>
                <input className='ip5' type="text" value={num2} onChange={e => setNum2(e.target.value)} />
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