import './index.scss';
import { Link } from 'react-router-dom';

export default function Exercicio01(){
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
       
        </div>

        

    )
}