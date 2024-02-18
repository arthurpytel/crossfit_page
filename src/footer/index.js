import Botao from '../botao';
import './Footer.css'
import React from 'react';

const Footer = (props) => {
    return(
        <footer id='contato'>
            <div>
                <p className='endereco'>Endereço</p>
                <p className='textoEndereco'>
                    {props.endereco.split('\n').map((linha,index) =>(
                    <React.Fragment key={index}>
                        {linha}
                        <br/>
                    </React.Fragment>
                    ))}
                </p>
                <div>
                    <Botao
                        texto='Acesse o maps'
                        cor='#F3911E'    
                        corLetra='#2A2C31'
                    />
                </div>
            </div>
            <img src={props.logo} alt='Logo Arena'></img>
            <div className='redes'>
                <img src={props.redeUm} alt='Icone rede social'></img>
                <img src={props.redeDois} alt='Icone rede social'></img>
            </div>
        </footer>
    )

}

export default Footer;