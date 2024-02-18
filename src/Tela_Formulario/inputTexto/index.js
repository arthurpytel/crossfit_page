import './InputTexto.css'
import Formulario from '../Formulario'

const InputTexto = (props) => {

    const digitado = (event) => {
       props.registro(event.target.value);
    }


    return(
        <div className='inputTexto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitado} type='text' placeholder={props.placeholder} required={props.required}></input>
        </div>
    )
}

export default InputTexto;