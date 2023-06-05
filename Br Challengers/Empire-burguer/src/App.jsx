import "./App.css";
import logo from "./assets/logo.png";
import ifood from "./assets/icons/ifood.svg";
import instagram from "./assets/icons/instagram.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import phone from "./assets/icons/phone.svg";

import InfosContainer from "./Components/Infos-container/InfosContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import relogio from "./assets/icons/timer.svg";

import oferta1 from "./assets/ofertas/oferta-1.png";
import oferta2 from "./assets/ofertas/oferta-2.png";
import oferta3 from "./assets/ofertas/oferta-3.png";
import Cardapio from "./Components/Cardapio/Cardapio";
import Atendimento from "./Components/Atendimento/Atendimento";
import Ad from "./Components/Ad/Ad";
import Entregas from "./Components/Entregas/Entregas";
import Footer from "./Components/Footer/Footer";

function App() {
  const handleClickButton = () => {
    const navbar = window.document.querySelector(".navbar");
    const buttons = window.document.querySelector(".buttons");
    navbar.classList.toggle("active");
    buttons.classList.toggle("active");
  };

  return (
    <div className="App">
      <div className="Home-Header" id="home">
        <header className="header">
          <a href="#">
            <img src={logo} alt="Logo da loja" />
          </a>

          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#promocao">Promoção</a>
            <a href="#cardapio">Cardapio</a>
            <a href="#comentario">Comentario</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="buttons">
            <div className="ifood">
              <img src={ifood} alt="" />
            </div>

            <div className="instagram">
              <img src={instagram} alt="" />
            </div>

            <div className="separador"></div>

            <div className="button">
              <div className="image">
                <img src={whatsapp} alt="" />
              </div>
              Contato
            </div>
          </div>

          <FontAwesomeIcon
            id="menu-btn"
            className="menu-btn"
            onClick={handleClickButton}
            icon={faBars}
          ></FontAwesomeIcon>
        </header>

        <div className="Home">
          <h2>Uma nova Experiência</h2>
          <h1>
            KING <span>BURGUER</span>
          </h1>
          <h3>
            Para quem tem um <span>Apetite de um REI!!</span>
          </h3>
          <button className="btn">Comprar Agora</button>
        </div>
      </div>

      <InfosContainer />

      <section className="ofertas-especiais" id="promocao">
        <div className="ofertas">
          <h1>Ofertas especiais</h1>
          <p>
            Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
            sempre estamos mudando o nosso cardapio.
          </p>
          <div className="ofertas-modal">
            <div className="box1">
              <img src={oferta1} alt="" />
            </div>

            <div className="box-lateral">
              <div className="box2">
                <img src={oferta2} alt="" />
              </div>
              <div className="box3">
                <img src={oferta3} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="horario">
          <div className="horario-modal">
            <div className="image">
              <img src={relogio} alt="" />
            </div>
            <div className="horario-modal-infos">
              <h1>Horário de funcionamento</h1>
              <p>Segunda-feira a sexta-feira: 17h00 - 23h00</p>
              <p>Sabado a Domíngo: 18h00 - 23h00</p>
            </div>
          </div>
          <div className="instagram">
            <p>Não esqueça de marcar a gente no Instagram:</p>
            <h1>#empireburger</h1>
          </div>
        </div>
      </section>

      <div id="cardapio">
        <Cardapio />
      </div>

      <div id="comentario">
        <Atendimento />
      </div>

      <div id="ad">
        <Ad />
      </div>

      <div id="entregas">
        <Entregas />
      </div>

      <section className="pedido-section">
        <div className="pedido">
          <div className="image">
            <img src={phone} alt="" />
          </div>

          <div className="container">
            <div className="infos">
              <h1>faça o seu pedido agora mesmo!</h1>
              <p>
                Venha saborear a melhor experiência de hamburguenses artesanal
                do <span>Empires Burger</span>, com temática medieval!
              </p>
            </div>

            <button>Solicitar Pedido</button>
          </div>
        </div>
      </section>

      <div id="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
