import Arena from "./arena";
import Footer from "./footer";
import Header from "./header";
import Instagram from "./instagram";
import Planos from "./planos";
import Principal from "./principal";

function App() {
  const textoEnd = 'Rua Francisco Polito, 1131\nVila Prudente, São Paulo'
  return (
    <div>
      <Header logo='/imagens/Logo.png'/>
      <Principal
        textoH2='Crossfit é para'
        textoH1='TODOS'
        principal='/imagens/Principal.png'
      />
      <Arena imagem='/imagens/Imagem_Rolagem_1.png'/>
      <Planos fundo='/imagens/Background2.png'/>
      <Instagram/>
      <Footer
        endereco={textoEnd}
        logo='/imagens/Logo.png'
        redeUm='/imagens/facebook_vector.png'
        redeDois='/imagens/instagram_vector.png'
      />
    </div>
  );
}

export default App;
