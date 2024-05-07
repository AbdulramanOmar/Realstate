import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination } from "swiper/modules";
const Cards = (props) => {
  return (
    <div className="card">
      <Swiper
        autoplay={{ delay: 2000 }}
        effect="slide"
        grabCursor={true}
        modules={[Navigation, Pagination]}
        loop={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        spaceBetween={10}
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        breakpoints={{
          440: {
            slidesPerView: 1,
            speed: 600,
          },
          540: {
            slidesPerView: 2,
          },
          1040: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container"
      >
        {props.Products.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <div  className="silder">
                <span className="Apartment">Apartment</span>
                <div className="img-container">
                  <img src={el.img} alt="CardImg" />
                </div>

                <h1>
                  {el.title}
                  <img
                    src={require("../Assent/bitcoin-icons_verify-filled.png")}
                  />
                </h1>
                <div className="text-card">
                  <p>Abbotsford, Victoria</p>
                  <p>from $700,000</p>
                </div>
                <div className="icons-card">
                  <div>
                    <FontAwesomeIcon icon={faBed} />
                    <span>1-3</span>
                    <FontAwesomeIcon icon={faBath} />
                    <span>1-3</span>
                    <FontAwesomeIcon icon={faCar} />
                    <span>1-3</span>
                  </div>
                  <button>Brochure</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Cards;
