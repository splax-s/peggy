"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import CheckoutTable from "./components/checkout-table";
import Summary from "./components/summary";

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <>
        {/* Breadcrumb Section Begin */}
        <section className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__text">
                  <h4>Shopping Cart</h4>
                  <div className="breadcrumb__links">
                    <Link href="/">Home</Link>
                    <a href="/shop">Shop</a>
                    <span>Shopping Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Shopping Cart Section Begin */}
        <section className="shopping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="shopping__cart__table">
                  <CheckoutTable />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="continue__btn">
                      <a href="#">Continue Shopping</a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="continue__btn update__btn">
                      <a href="#">
                        <i className="fa fa-spinner" /> Update cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* <div className="cart__discount">
                  <h6>Discount codes</h6>
                  <form action="#">
                    <input type="text" placeholder="Coupon code" />
                    <button type="submit">Apply</button>
                  </form>
                </div> */}
                <Summary />
              </div>
            </div>
          </div>
        </section>
        {/* Shopping Cart Section End */}
      </>
    </div>
  );
};

export default CartPage;
