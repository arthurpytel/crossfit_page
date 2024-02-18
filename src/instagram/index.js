import './Instagram.css'
import Botao from '../botao';

const Instagram = () => {
    return(
        <section className='insta' id='fotos'>
            <h3 className='sigaInstagram'>Siga nosso    <span>Instagram</span>!</h3>            
            <div className='imagensCross'>
                <img src='/imagens/foto 1.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 2.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 3.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 4.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 5.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 6.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 7.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 8.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 9.png' alt='Imagem box Crossfit'></img>
                <img src='/imagens/foto 10.png' alt='Imagem box Crossfit'></img>
            </div>
            <div className='botaoInsta'>
                <Botao
                    texto='Acesse nosso Instagram'
                    cor='#F3911E'    
                    corLetra='#2A2C31'
                    href='https://www.instagram.com/arenablackcross/'
                />
            </div>
        </section>
    )
}

export default Instagram;