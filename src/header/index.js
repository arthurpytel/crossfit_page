import Botao from '../botao';
import './Header.css'
import { Link } from 'react-scroll';

const Header = (props) =>{
    return(
        <header className='cabecalho'>
            <img src={props.logo} alt='Logo Arena BlackCross'></img>
            <ul className='header'>
                <li>
                    <Link to="principal" spy={true} smooth={true} offset={-120} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="arena" spy={true} smooth={true} offset={-85} duration={500}>A Arena</Link>
                </li>
                <li>
                    <Link to="planos" spy={true} smooth={true} offset={-70} duration={500}>Planos</Link>
                </li>
                <li>
                    <Link to="fotos" spy={true} smooth={true} offset={-150} duration={500}>Fotos</Link>
                </li>
                <li>
                    <Link to="contato" spy={true} smooth={true} offset={25} duration={500}>Contato</Link>
                </li>
            </ul>
            <div className='botaoHeader'>
                <Botao 
                    texto='Agende sua aula gratis!'
                    cor='#F3911E'
                    corLetra='#2A2C31'
                    href='http://localhost:3000/reserva'
                />
            </div>
        </header>
    )
}

export default Header;