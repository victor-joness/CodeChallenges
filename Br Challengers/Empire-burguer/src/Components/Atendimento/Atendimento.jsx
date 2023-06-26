import React from "react";
import "./Atendimento.css";
import atendimento from "../../assets/card-woman-eating.png";
import img from "../../assets/icons/women.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Atendimento = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <section className="section-container">
      <div className="superior">
        <div className="image">
          <img src={atendimento} alt="" />
        </div>
        <div className="infos">
          <h1>
            Atendimento <span>personalizado</span>
          </h1>
          <p>
            Todos os nossos clientes são tratados como rei e rainha, com a nossa
            colunaria artesanal.
          </p>
          <button className="btn">Cardápio Imperial</button>
        </div>
      </div>

      <div className="inferior">
        <div className="infos">
          <h1>Nossa realeza</h1>
          <p>A satisfação de nossos clientes em primeiro lugar!</p>
        </div>

        <div className="wrapper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <div className="box">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin.”
                </p>
                <div className="user">
                  <div className="image">
                    <img src={img} alt="" />
                  </div>
                  <div className="infos">
                    <h1>Carla gomes</h1>
                    <p>23 Anos • Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin.”
                </p>
                <div className="user">
                  <div className="image">
                    <img src={img} alt="" />
                  </div>
                  <div className="infos">
                    <h1>Carla gomes</h1>
                    <p>23 Anos • Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin.”
                </p>
                <div className="user">
                  <div className="image">
                    <img src={img} alt="" />
                  </div>
                  <div className="infos">
                    <h1>Carla gomes</h1>
                    <p>23 Anos • Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin.”
                </p>
                <div className="user">
                  <div className="image">
                    <img src={img} alt="" />
                  </div>
                  <div className="infos">
                    <h1>Carla gomes</h1>
                    <p>23 Anos • Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Atendimento;
