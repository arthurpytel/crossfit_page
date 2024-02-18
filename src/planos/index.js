import Card from '../cardPrincipal';
import './Planos.css'
import Secundario from '../cardSecundario';

const Planos = (props) =>{
    return(
        <section className='planos' id='planos'>
            <div className='imgFundo'>
                <img src={props.fundo} className='fundo'></img>
            </div>
            <div className='geral'>
                <h3>Nossos Planos</h3>
                <p className='subtitulo'>Conheça nossas opções de planos e comece hoje mesmo uma vida mais saudável</p>
                <div className='cartoes'>            
                    <Secundario
                        plano='Basic'
                        valor='215'
                        fidelidade='Fidelidade de 6 meses'
                        itemUm='Para aqueles que não abrem mão do treino'
                        itemDois='3x na semana'
                        itemTres='Aulas com agendamento'
                        itemQuatro='Horários flexíveis'
                    />
                    <Card
                        plano='Black'
                        valor='257'
                        fidelidade='Plano sem fidelidade'
                        itemUm='Ideal para quem não abre mão de treinar todos os dias!'
                        itemDois='6x na semana'
                        itemTres='Aulas com agendamento'
                        itemQuatro='Horários flexíveis'
                    />
                    <Secundario
                        plano='Premium'
                        valor='222'
                        fidelidade='Fidelidade de 6 meses'
                        itemUm='Feito especialmente para você que precisa de equilíbrio'
                        itemDois='4x na semana'
                        itemTres='Aulas com agendamento'
                        itemQuatro='Horários flexíveis'
                    />
                </div>
            </div>
        </section>

    )
}

export default Planos;