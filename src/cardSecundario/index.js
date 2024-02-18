import './cardSecundario.css';
import Botao from '../botao';

const Secundario = (props) => {
    return(
        <div className='cardSecundario'>
            <div className='cardEspec'>
                <div className='detalhesSec'>
                    <h4 className='planoSec'>Plano {props.plano}</h4>
                    <h5 className='valorSec'>R$<span>{props.valor}</span>,00</h5>
                    <p className='fidelidadeSec'>{props.fidelidade}</p>
                </div>
                <ul className='listaSec'>
                    <li>{props.itemUm}</li>
                    <li>{props.itemDois}</li>
                    <li>{props.itemTres}</li>
                    <li>{props.itemQuatro}</li>
                </ul>
                <div className='botaoCard' style={{backgroundColor:props.corEscura}}>
                    <Botao 
                        texto='Eu quero!'
                        cor='#2A2C31'
                        corLetra='#FFFFFF'
                    />
                </div>
            </div>
        </div>
    )

}

export default Secundario;