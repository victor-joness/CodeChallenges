import React from "react";
import "./Cardapio.css";

const Cardapio = () => {
  return (
    <section className="cardapio">
      <div className="cardapio-esquerda">
        <div className="infos">
          <h1>
            Escolha o seu combo imperial, <span>peça agora!</span>
          </h1>
          <p>
              Temos vários tipos de pratos para a nossa realeza, fique esperto
              porque temos sempre promoção!
            </p>
            <button className="btn">Ver Cardápio Completo</button>
        </div>
      </div>

      <div className="cardapio-direita">
        <div className="infos">
          <h1>Cardápio imperial | Burger</h1>
          <div className="box">
            <div className="name_price">
              <h2>
                Classic burger
                .........................................................................
              </h2>
              <h2>R$49,99</h2>
            </div>
            <p>
              Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
              Tomate, Alface, Servidor do pão de batata
            </p>
          </div>

          <div className="box">
            <div className="name_price">
              <h2>
                Classic burger
                .........................................................................
              </h2>
              <h2>R$49,99</h2>
            </div>
            <p>
              Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
              Tomate, Alface, Servidor do pão de batata
            </p>
          </div>

          <div className="box">
            <div className="name_price">
              <h2>
                Classic burger
                .........................................................................
              </h2>
              <h2>R$49,99</h2>
            </div>
            <p>
              Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
              Tomate, Alface, Servidor do pão de batata
            </p>
          </div>

          <div className="box">
            <div className="name_price">
              <h2>
                Classic burger
                .........................................................................
              </h2>
              <h2>R$49,98</h2>
            </div>
            <p>
              Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
              Tomate, Alface, Servidor do pão de batata
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardapio;
