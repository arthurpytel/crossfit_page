import Botao from '../botao';
import './Arena.css'

const Arena = (props) => {
    return(
        <section className='arena' id='arena'>
            <img className='img' src={props.imagem} alt='Imagem Box'></img>
            <div className='arenaTexto'>
                <h2>Arena <span>Black Cross</span></h2>
                <p className='paragrafoPrimeiro'>
                    Criamos um espaço voltado para pessoas que buscam mais do que treinar 
                    e sim se conectar a um novo estilo de vida e qualidade acima de tudo. Somado a isso,
                    buscamos criar uma <span>experiência de treino completa e singular para cada aluno </span> 
                     em um ambiente acolhedor.
                </p>
                <p className='paragrafoSegundo'>
                    Trabalhamos com treinos de alta intensidade que associam diversas modalidades 
                    como o LPO (levantamento de peso olímpico), ginástica, exercícios aeróbios e funcionais. 
                    Nossos <span>treinos são dinâmicos e com foco em emagrecimento e ganho de massa</span>, 
                    com resultados rápidos, desde que a frequência seja de, no mínimo, 3x na semana. <span>
                    O tempo médio de treino é de 35 a 50 minutos </span> dependendo da aula.
                </p>
                <div className='botaoArena'>
                    <Botao 
                        texto='Agende ja sua aula!'
                        cor='#F3911E'
                        corLetra='#2A2C31'
                    />
                </div>
            </div>
        </section>

    )
}

export default Arena;