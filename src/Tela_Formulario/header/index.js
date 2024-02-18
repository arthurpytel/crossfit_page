import Botao from '../../botao';
import './HeaderForm.css'

const HeaderForm = (props) =>{
    return(
        <header className='cabecalhoForm'>
            <img src={props.logo} alt='Logo Arena BlackCross'></img>
            <div className='botaoHeaderForm'>
                <Botao 
                    texto='Voltar para a Homepage'
                    cor='#F3911E'
                    corLetra='#2A2C31'
                    href='http://localhost:3000/'
                />
            </div>
        </header>
    )
}

export default HeaderForm;