import { Link } from 'react-router-dom';
export default function Cabecalho(){
    return(

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

    )
}