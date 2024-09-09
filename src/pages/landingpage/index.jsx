import Cabecalho from "../components/cabecalho/index.jsx"


import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

  let todos_cards =[{
    card : '/Exercicio01',
    cor :'cor1',
    titulo :"Cupom de desconto",
    subtitulo : "exercício 1"
  },
  {
    card : '/Exercicio02',
    cor :'cor2',
    titulo :"Converter Kg/gramas ",
    subtitulo : "exercício 2"
  },
  {
    card : '/Exercicio03',
    cor :'cor3',
    titulo :"Valor total por quantidade",
    subtitulo : "exercício 3"
  },
  {
    card : '/Exercicio4',
    cor :'cor4',
    titulo :"Leitura do livro",
    subtitulo : "exercício 4"
  },
  {
    card : '/Exercicio5',
    cor :'cor5',
    titulo :"Média de notas",
    subtitulo : "exercício 5"
  },
  {
    card : '/Exercicio6',
    cor :'cor6',
    titulo :"Salário liquido",
    subtitulo : "exercício 6"
  },
  {
    card : '/Exercicio7',
    cor :'cor7',
    titulo :"Cores primárias",
    subtitulo : "exercício 7"
  },
  {
    card : '/Exercicio10',
    cor :'cor10',
    titulo :"Calculo do IMC com histórico",
    subtitulo : "exercício 10"
  },
  {
    card : '/Exercicio011',
    cor :'cor11',
    titulo :"Tabuada",
    subtitulo : "exercício 11"
  }

    
]



  return (
    <div className="Landing-page">

      <Cabecalho/>

      <div className='faixa-exercicios'>
        <h2>Escolha um treino...</h2>

        <div className='cartoes'>
          
      {
        todos_cards.map(c =>
            <Card card={c.card}
            cor={c.cor}
            titulo={c.titulo}
            subtitulo={c.subtitulo}
            />
        )
      }





{/*           

          <Link className='cartao' to="/Exercicio011">
             <div className='cartao1'>
              <div className='cor11'></div>
              <p>Cupom de desconto </p>
              <p>exercício 11</p>
            </div>
          </Link> */}

        </div>
      </div>
    </div>
  );
}


function Card({card, cor, titulo, subtitulo }){
  return(
    <Link className='cartao' to={card}>
    <div className='cartao1'>
     <div className={cor}></div>
     <p className="titulo">{titulo}</p>
     <p className="subtitulo">{subtitulo}</p>
   </div>
  </Link>
  )

}