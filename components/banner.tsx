import Image from "next/image";
import React from "react";

import banner1 from "../img/banner/banner-1.jpg";
import banner2 from "../img/banner/banner-2.jpg";
import banner3 from "../img/banner/banner-3.jpg";

export default function Banner() {
  return (
    <section className="banner spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-4 ">
            <div className="banner__item">
              <div className="banner__item__pic">
                <Image
                  src={banner1}
                  alt=""
                  style={{ height: 500, width: 500 }}
                />
              </div>
              <div className="banner__item__text">
                <h2>Clothing Collections</h2>
                <a href="/shop">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="banner__item banner__item--middle">
              <div className="banner__item__pic">
                <Image src={banner2} alt="" />
              </div>
              <div className="banner__item__text">
                <h2>Accessories</h2>
                <a href="/shop">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 py-5 ">
            <div className="banner__item banner__item--middle">
              <div className="banner__item__pic p-5">
                <Image src={banner3} height={500} alt="" />
              </div>
              <div className="banner__item__text">
                <h2>Fabric </h2>
                <a href="/shop">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
