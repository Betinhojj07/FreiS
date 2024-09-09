import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../components/cabecalho';

export default function Exercicio5(){
    
const [num1, setNum1]=useState(0)
const [num2, setNum2]=useState(0)
const [num3, setNum3]=useState(0)
const [res, setRes]=useState()

function somar(){
if(num1 <=10 && num1 >=0||num2 <=10 && num2 >=0|| num3 <=10 && num3 >=0){
    let soma = Number(num1) + Number(num2) + Number(num3)
    let aprovado = true

    let result  = soma / 3

    if(result<6){
        aprovado = false
        setRes(`A média do aluno é ${result.toFixed(1)} ||
        O aluno passou? ${aprovado}`)
    }else if(result>=6){
        setRes(`A média do aluno é ${result.toFixed(1)} ||
        O aluno passou? ${aprovado}`)
    }
    
}else{
    setRes(`valor inválido`)
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
                <h2>Exercicio 05 -  Média de notas</h2>
            </div>
            </div>
            <div className='linha05'></div>
            

        </div>

        <div className='info-exercicio-01'>
            <div>
                <p>Implemente um programa em Javascript para <span>verificar</span> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
            </div>

        </div>

        <div className='exercicio-exe'>
            
            <div className='pedido-exercicio05'>
                <div className='container-livro'>
                <div className='qtd'>
                <label htmlFor="">Nota 1</label>
                <input className='ip5' type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>
                </div>
                
                <div className='qtd'>

                <label htmlFor="">Nota 2</label>
                <input className='ip5' type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                </div>


                <div className='qtd'>

                <label htmlFor="">Nota 3</label>
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