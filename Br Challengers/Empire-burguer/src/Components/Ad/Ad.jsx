import React from 'react'
import "./Adsss.css";

import b1 from "../../assets/burguers/b1.png";
import b2 from "../../assets/burguers/b2.png";
import b3 from "../../assets/burguers/b3.png";
import b4 from "../../assets/burguers/b4.png";

const Ad = () => {
  return (
    <div className='ad-container'>
        <h1>Publicações do instagram</h1>
        <p>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
        <div className='images'>
            <div className='img'>
                <img src={b1} alt="" />
            </div>

            <div className='img'>
                <img src={b2} alt="" />
            </div>

            <div className='img'>
                <img src={b3} alt="" />
            </div>

            <div className='img'>
                <img src={b4} alt="" />
            </div>

            <div className='img'>
                <img src={b1} alt="" />
            </div>

            <div className='img'>
                <img src={b2} alt="" />
            </div>

            <div className='img'>
                <img src={b3} alt="" />
            </div>

            <div className='img'>
                <img src={b4} alt="" />
            </div>

            <div className='img'>
                <img src={b1} alt="" />
            </div>

            <div className='img'>
                <img src={b2} alt="" />
            </div>
        </div>
        
        <div className='rodape'>
            <h1>• #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger </h1>
        </div>
    </div>
  )
}

export default Ad;