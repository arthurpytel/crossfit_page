import './Botao.css'
import { Link } from "react-router-dom";

const Botao = (props) => {

    return(
        <Link to={props.href}>
            <button 
                className='agendar' 
                style={{backgroundColor:props.cor, color:props.corLetra}}
            >
                {props.texto}
            </button>
        </Link>
    )

}

export default Botao;