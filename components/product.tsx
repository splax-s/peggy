"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Product } from "@/types";

import compare from "@/img/icon/compare.png";
import heart from "@/img/icon/heart.png";
import search from "@/img/icon/search.png";

interface Props {
  featuredProducts: Product[];
}

const filters = ["Best Sellers", "New Arrivals", "Hot Sales"];

export default function Product({ featuredProducts }: Props) {
  const [productFilter, setProductFilter] = useState<
    "Best Sellers" | "New Arrivals" | "Hot Sales" | string
  >("Best Sellers");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const filterProducts = (filter: string) => {
    if (filter === "Best Sellers") return setFilteredProducts(featuredProducts);
    if (filter === "New Arrivals")
      return setFilteredProducts(
        featuredProducts.filter(
          (i) => i.category.name.trim() === "New Arrivals"
        )
      );
    if (filter === "Hot Sales")
      return setFilteredProducts(
        featuredProducts.filter((i) => i.category.name.trim() === "Hot Sales")
      );
  };

  useEffect(() => {
    filterProducts(productFilter);
    // console.log(filteredProducts)
  }, [productFilter]);

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              {filters.map((item, i) => (
                <li
                  key={i}
                  className={`${
                    item === productFilter ? "active" : "new-arrivals"
                  }`}
                  data-filter="*"
                  onClick={() => setProductFilter(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals"
            >
              <div className="product__item">
                <div className="product__item__pic set-bg relative">
                  <div className="absolute z-10 top-0 right-0 left-0 bottom-0">
                    <img
                      src={item.images[0].url}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  {productFilter === "New Arrivals" && (
                    <span className="label">New</span>
                  )}
                  {productFilter === "Hot Sales" && (
                    <span className="label">Sale</span>
                  )}
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <Image src={heart} alt="" /> <span>Like</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={compare} alt="" /> <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={search} alt="" /> <span>Search</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>{item.name}</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  {/* <div className="rating">
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div> */}
                  <h5>₦{item.price}</h5>
                  {/* <div className="product__color__select">
                    <label htmlFor="pc-1">
                      <input title="product" type="radio" id="pc-1" />
                    </label>
                    <label className="active black" htmlFor="pc-2">
                      <input title="product" type="radio" id="pc-2" />
                    </label>
                    <label className="grey" htmlFor="pc-3">
                      <input title="product" type="radio" id="pc-3" />
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
