import React from 'react'
import "./infosContainer.css";
import burguer from "../../assets/icons/burger.svg";
import headset from "../../assets/icons/headset.svg";
import delivery from "../../assets/icons/delivery.svg";

const InfosContainer = () => {
  return (
    <div className="infos-container">
        <div className="box">
          <div className="image">
            <img src={burguer} alt="" />
          </div>
          <div className="infos-box">
            <h1>ARTESANAL</h1>
            <p>Nossas receitas são feitas com todo cuidado</p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={headset} alt="" />
          </div>
          <div className="infos-box">
            <h1>ATENDIMENTO</h1>
            <p>Totalmente personalizado</p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={delivery} alt="" />
          </div>
          <div className="infos-box">
            <h1>DELIVERY SPEED</h1>
            <p>Entregamos menos de 45 minutos</p>
          </div>
        </div>
      </div>
  )
}

export default InfosContainer;
