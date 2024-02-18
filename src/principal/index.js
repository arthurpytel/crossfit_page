import './Principal.css'

const Principal= (props)=>{
    return(
        <section className='principal' id='principal'>
            <div className='textoImagem'>
                <div className='textoPrincipal'>
                    <h2>{props.textoH2}</h2>
                    <h1>{props.textoH1}</h1>
                    <p>A <span className='arenaB'>Arena Black Cross</span> é um box de todos para todos.</p>
                    
                </div>
                <img src={props.principal} alt='Imagem Principal'className='eu'></img>
            </div>
            <div className='scroll'>
                <img  className='Icone' src='/imagens/Scroll.png' alt='Icone Scroll'></img>
            </div>
        </section>
    )
}

export default Principal;