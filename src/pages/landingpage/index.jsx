
import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="Landing-page">
      <section className='faixa-cima'>
        <div className='div-faixa'>
         <img src="/assets/img/imgfrei.png" alt="" />
          <h3>React FreiS</h3>
        </div>
   

        <nav>
        <li><a className='oi' href="">Inicio</a></li>
        <li><Link className='oi' to="/sobre">Sobre</Link></li>
        </nav>
      </section>


      <div className='faixa-exercicios'>
        <h2>Escolha um treino...</h2>

        <div className='cartoes'>
        <Link className='cartao' to="/Exercicio01">
             <div className='cartao1'>
              <div className='cor1'></div>
              <p>Cupom de desconto </p>
              <p>exercício 1</p>
            </div>
          </Link>
          <Link className='cartao' to="/">
             <div className='cartao1'>
              <div className='cor2'></div>
              <p>Converter Kg/gramas</p>
              <p>exercício 2</p>
            </div>
          </Link>
          <Link className='cartao' href="#">
             <div className='cartao1'>
              <div className='cor3'></div>
              <p>Cupom de desconto </p>
              <p>exercício 3</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

