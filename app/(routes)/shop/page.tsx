import getProducts from "@/actions/get-products";
import Link from "next/link";

import compare from "@/img/icon/compare.png";
import heart from "@/img/icon/heart.png";
import search from "@/img/icon/search.png";
import Image from "next/image";
import ShopSidebar from "./components/shop-sidebar";
import AddToCart from "./components/add-to-cart";

export default async function Shop() {
  const products = await getProducts({ isFeatured: false });

const itemsPerPage = 10;
const currentPage = 1;  // this can be dynamic based on user interaction

const startIndex = (currentPage - 1) * itemsPerPage + 1;
const endIndex = Math.min(startIndex + itemsPerPage - 1, products.length);
const totalProducts = products.length;

  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shop</h4>
                <div className="breadcrumb__links">
                  <Link href="/">Home</Link>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ShopSidebar />
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>
                        Showing {startIndex}-{endIndex} out of
                         {totalProducts} products
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    {/* <div className="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select title="sort by price">
                        <option value="">Low To High</option>
                        <option value="">$0 - $55</option>
                        <option value="">$55 - $100</option>
                      </select>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="row">
                {products.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg relative">
                        <div className="absolute z-10 top-0 right-0 left-0 bottom-0">
                          <Image
                            src={item.images[0].url}
                            alt=""
                            className="w-full h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                        {item.category.name === "New Arrivals" && (
                          <span className="label">New</span>
                        )}
                        {item.category.name === "Hot Sales" && (
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
                              <Image src={compare} alt="" />{" "}
                              <span>Compare</span>
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
                        <AddToCart item={item} />
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
          </div>
        </div>
      </section>
    </>
  );
}
