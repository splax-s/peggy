"use client";
import Image from "next/image";
import React from "react";

import hero2 from "../img/hero/hero-2.png";
import hero1 from "../img/hero/hero-1.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/owl.carousel.min.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Herosection() {
  const [sliderRef] = useKeenSlider({});
  return (
    <section className="hero">
      <div ref={sliderRef} className=" keen-slider hero__slider">
        <div className="keen-slider__slide hero__items relative">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src={hero1}
              alt=""
              className="w-full h-full object-cover object-center"
              layout="fill"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="hero__text">
                  <h6>Cute Girl Season</h6>
                  <h2>Gen-Z Collections </h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <a href="/shop" className="primary-btn">
                    Shop now <span className="arrow_right" />
                  </a>
                  <div className="hero__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                    <a href="https://www.instagram.com/peggyrussel_collections/">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide hero__items relative">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src={hero2}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="hero__text">
                  <h6>Baby Girl Season</h6>
                  <h2>Gen-Y Collections </h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <a href="/shop.html" className="primary-btn">
                    Shop now <span className="arrow_right" />
                  </a>
                  <div className="hero__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                    <a href="https://www.instagram.com/peggyrussel_collections/">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
