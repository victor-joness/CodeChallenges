import React from 'react';
import "./Entregas.css";
import entrega from "../../assets/card-phone.png"

import whats from "../../assets/icons/whatsapp.svg";
import delivery from "../../assets/icons/delivery.svg";
import ice from "../../assets/icons/ice-cream.svg";
import ifood from "../../assets/icons/ifood-marrom.svg";


const Entregas = () => {
  return (
    <section className='entregas-container'>
        <div className='image'>
            <img src={entrega} alt="" />
        </div>

        <div className='entregas'>
            <div className='box'>
                <div className='image'>
                    <img src={whats} alt="" />
                </div>

                <div className='separador'></div>

                <div className='infos'>
                    <h1>Whatsapp</h1>
                    <p>Vamos direto ao ponto, sem perder tempo!</p>
                </div>
            </div>

            <div className='box'>
                <div className='image'>
                    <img src={delivery} alt="" />
                </div>

                <div className='separador'></div>

                <div className='infos'>
                    <h1>Entrega</h1>
                    <p>Entregamos menos de 45 minutos na porta da sua casa!</p>
                </div>
            </div>

            <div className='box'>
                <div className='image'>
                    <img src={ice} alt="" />
                </div>

                <div className='separador'></div>

                <div className='infos'>
                    <h1>Sobremesa</h1>
                    <p>Pedidos assima de 100 reais, ganham brindes.</p>
                </div>
            </div>

            <div className='box'>
                <div className='image'>
                    <img src={ifood} alt="" />
                </div>

                <div className='separador'></div>

                <div className='infos'>
                    <h1>iFood</h1>
                    <p>Nossa loja é Top 1 da região!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Entregas