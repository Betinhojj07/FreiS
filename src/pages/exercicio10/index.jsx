import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio10(){

const [num1, setNum1]=useState(0)
const [num2, setNum2]=useState(0)
const [res, setRes]=useState([])


function situacao(){
    let b = ``
    let calc = Number(num2) / (Number(num1)*Number(num1))

    if(calc <16.9){
        b = `muito abaixo do peso`
    }else if (calc >=17 && calc < 18.4){
        b = `Abaixo do peso`
    }else if (calc >=18.5 && calc < 24.9){
        b = `Peso normal`
    }else if (calc >=25 && calc < 29.9){
        b = `Acima do peso`
    }else if (calc >=30 && calc < 34.9){
        b = `Obesidade Grau I`
    }else if (calc >=35 && calc <= 40){
        b = `Obesidade Grau II`
    }else if (calc >40){
        b = `Obesidade Grau III`
    }

let a=  `Altura ${num1} | Peso ${num2} | ${b} | seu IMC é ${calc.toFixed(2)}`


setRes([...res, a])
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
                <h2>Exercicio 10 - Calculo de IMC com histórico</h2>
            </div>
            </div>
            <div className='linha10'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação  </p>
            </div>

        </div>

        <div className='total'>
        <div className='exercicio-exe-10'>
            
            <div className='pedido-exercicio10'>
                <div className='container-acai'>
                <div className='qtd'>
                    <div className='ajustar-label'>
                    <label htmlFor="">Altura</label>
                    </div>
                
                <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
                <div className='qtd'>
                    <div className='ajustar-label'>
                        <label htmlFor="">Peso</label>
                        </div>
                
                <input type="text"  value={num2} onChange={e => setNum2(e.target.value)}/>
                </div>
            
                </div>
    
                <div className='bt-executar-10'>
                <button className='executar' onClick={situacao} >Executar</button>
                </div>

                </div>
 
        </div>
        <div className='mapear'>
        {
            res.map(item => (

                <div className='coloracao-exercicio-10'>
                     <p>{item}</p>
                </div>
               
            ))

        }
        </div>
  
        </div>


       
        </div>

        

    )
}