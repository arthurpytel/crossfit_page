import Botao from '../botao';
import './Card.css'

const Card = (props) =>{
    return(
        <div className='card'>
            <div className='cardEspecifico'>
                <h6>MELHOR VALOR</h6>
                <div className='detalhes'>
                    <h4>Plano {props.plano}</h4>
                    <h5>R$<span>{props.valor}</span>,00</h5>
                    <p className='fidelidade'>{props.fidelidade}</p>
                </div>
                <ul className='lista'>
                    <li>{props.itemUm}</li>
                    <li>{props.itemDois}</li>
                    <li>{props.itemTres}</li>
                    <li>{props.itemQuatro}</li>
                </ul>
                <div className='botaoCard'>
                    <Botao 
                        texto='Eu quero!'
                        cor='#F3911E'    
                        corLetra='#2A2C31'
                    />
                </div>
            </div>
            <p className='externo'>*Aceitamos GymPass a partir do plano Silver.</p>
        </div>

    )
}

export default Card;