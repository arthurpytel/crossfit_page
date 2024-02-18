import { useState } from 'react';
import './Form.css'
import Formulario from './Formulario';
import HeaderForm from './header';


const Form = (props) => {

    const [agendamentos,setAgendamentos] = useState([])

    const novoAgendamento = (agendamento)=> {
        setAgendamentos([...agendamentos,agendamento])
        
    }

    console.log(agendamentos);
    
    return(
        <div className='form'>
            <HeaderForm logo='/imagens/logo.png'/>
            <Formulario
                aoAgendar={agendamento => novoAgendamento(agendamento)}
            />          
        </div>
    )
}

export default Form;