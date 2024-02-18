import './Formulario.css'
import InputTexto from '../inputTexto';
import { useState } from 'react';
import BotaoForm from '../botaoForm';
import InputSelecao from '../inputSelecao';

const Formulario = (props) => {

    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [contato,setContato] = useState('');
    const [horarios,setHorarios] = useState('')

    const enviarRegistro = (event) => {
        event.preventDefault();
        props.aoAgendar({
            nome: nome,
            email: email,
            contato: contato,
            horarios: horarios
        })
        setNome('');
        setContato('');
        setEmail('');
        setHorarios('')
    }

    return(
        <section className='formulario'>
            <form className='formularioItens' onSubmit={enviarRegistro}>
                <InputTexto
                    label='Nome'
                    placeholder='Digite seu nome'
                    required={true}
                    registro={valor => setNome(valor)}
                    valor={nome}
                />
                <InputTexto
                    label='E-mail'
                    placeholder='Digite seu e-mail'
                    required={true}
                    registro={valor => setEmail(valor)}
                    valor={email}
                />
                <InputTexto
                    label='Contato'
                    placeholder='Digite seu telefone'
                    required={true}
                    registro={valor => setContato(valor)}
                    valor={contato}
                />
                <InputSelecao
                    label='Horarios'
                    required={true}
                    selecao = {valor => setHorarios(valor)}
                    valor={horarios}
                />
                <div className='btn'>
                    <BotaoForm
                        texto='Enviar'
                    />
                </div>
            </form>
        </section>
    )
}

export default Formulario;