import './InputSelecao.css'

const InputSelecao = (props) => {

    const listaHorarios = [
        '06:00 - 07:00',
        '07:00 - 08:00',
        '08:00 - 09:00',
        '09:00 - 10:00',
        '16:00 - 17:00',
        '17:00 - 18:00',
        '18:00 - 19:00',
        '19:00 - 20:00',
        '20:00 - 21:00'
    ];

    const selecionado = (selecao) => {
        props.selecao(selecao.target.value)
    }


    return(
        <div className='selecao'>
            <label className='labelSelecao'>{props.label}</label>
            <select required={props.required} className='itensSelecao' onChange={selecionado}>
                <option></option>                
                {listaHorarios.map(horario => {
                    return <option key={horario}>{horario}</option>
                })}
            </select>
        </div>

    )
}

export default InputSelecao;