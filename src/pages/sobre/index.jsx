
import './index.scss';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="Landing-page">
      <section className='faixa-cima'>
        <div className='div-faixa'>
         <img src="/assets/img/imgfrei.png" alt="" />
          <h3>React FreiS</h3>
        </div>
   

        <nav>
        <li><Link className='oi' to="/">Inicio</Link></li>
        <li><Link className='oi' href="">Sobre</Link></li>
        </nav>
      </section>

      <h2 className='titulo-pagina'>Sobre</h2>

      <div className='informacoes'>
          <div className='sobre'>
              <p>
              Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. 


              </p>
              <div className='agradecimento'>
              <p>
                Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você   crescer e desenvolver suas habilidades.
                
              </p>
              <p>
              Estamos ansiosos para ver seu progresso e sucesso!
              </p>
              </div>


          </div>
          <img className='logo-sobre' src="/assets/img/imgfrei.png" alt="" />

      </div>
      
    </div>
  );
}