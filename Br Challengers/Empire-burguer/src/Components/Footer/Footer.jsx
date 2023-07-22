import React, { useEffect, useRef } from "react";
import "./Footer.css";
import logo from "../../assets/Empire-logo-dourado.png";

import ifood from "../../assets/icons/ifood.svg";
import instagram from "../../assets/icons/instagram.svg";

const Footer = () => {
  function MapView() {
    const mapRef = useRef();
    useEffect(() => {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }, []);
    return <div ref={mapRef} style={{ width: 1000, height: 1000 }}></div>;
  }

  return (
    <div className="footer-container">
      <div className="footer-infos">
        <h1>Onde ficar a nosso castelo</h1>
        <p>Estaremos de portas abertas para a nossa realeza.</p>
      </div>

      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31807.037689224395!2d-40.0621568!3d-4.790681599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1676914488144!5m2!1spt-BR!2sbr"
          height="250"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer">
        <div className="image">
          <img src={logo} alt="" />
        </div>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#localização">Localização</a>
          <a href="#cardapio">Cardapio</a>
          <a href="#sobre">Sobre</a>
        </div>

        <div className="logos">
          <div className="ifood">
            <img src={ifood} alt="" />
          </div>

          <div className="instagram">
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>

      <div className="footer-infos-inferior">
        <h1>
          <span>2023 © Victor Mesquita</span>. Todos os direitos reservados.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
