import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicio011(){

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
        <section className='faixa-cima'>
          <div className='div-faixa'>
           <img src="/assets/img/imgfrei.png" alt="" />
            <h3>React FreiS</h3>
          </div>
     
  
          <nav>
          <li><Link className='oi' to="/">Inicio</Link></li>
          <li><Link className='oi' to="/sobre">Sobre</Link></li>
          </nav>
        </section>

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
                <label htmlFor="">Quantidade pequeno</label>
                <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
            
                </div>
    
                <div className='bt-executar'>
                <button className='executar' onClick={somar}>Executar</button>
                </div>

                </div>

            <p>Resultado: O total é R${res}</p>
        </div>
       
        </div>

        

    )
}