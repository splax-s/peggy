"use client";

import Image from "next/image";

import search from "@/img/icon/search.png";
import logo from "@/img/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "./cart";
import useCart from "@/hooks/use-cart";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();

  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const [isActive, setIsActive] = useState(false);

  const handleOpenClick = () => {
    setIsActive(true);
  };

  const handleOverlayClick = () => {
    setIsActive(false);
  };

  return (
    <div className="border-b">
      {/* <Container> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>African fashion ready to wear </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__hover">
                    <span>NGN</span>
                    {/* <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                      <li>NGN</li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link href="/">
                  <Image src={logo} alt="brand icon" height={40} />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={pathName === "/" ? "active" : ""}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={pathName === "/shop" ? "active" : ""}>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li className={pathName === "/contact" ? "active" : ""}>
                    <Link href="/contact">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option flex items-center space-x-4">
                <a href="#" className="search-switch">
                  <Image src={search} alt="search icon" />
                </a>
                <CartIcon />
                <div className="price">₦{totalPrice}</div>
              </div>
            </div>
          </div>
          <div className="canvas__open" onClick={handleOpenClick}>
            <i className="fa fa-bars" />
          </div>
          <div
            className={`offcanvas-menu-overlay ${isActive ? "active" : ""}`}
            onClick={handleOverlayClick}
          ></div>
          <div className={`offcanvas-menu-wrapper ${isActive ? "active" : ""}`}>
            <div className="offcanvas__option">
              <div className="offcanvas__links"></div>
              <div className="offcanvas__top__hover">
                <span>NGN  <div className="price">₦0.00</div></span>
                {/* <ul>
                  <li>USD</li>
                  <li>EUR</li>
                  <li>USD</li>
                  <li>NGN</li>
                </ul> */}
              </div>
            </div>
            <div className="offcanvas__nav__option">
              <a href="#" className="search-switch">
                <Image src={search} alt="search icon" />
              </a>

              <a href="/cart">
                <CartIcon /> <span>0</span>
              </a>
            </div>

            <div >
              <div className="slicknav_menu bg-white">
                <nav
                  className="slicknav_nav slicknav_hidden"
                  aria-hidden="true"
                  role="menu"
                  style={{ display: "none" }}
                >
                  <ul>
                    <li className="active">
                      <a href="/" role="menuitem" className="text-dark">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/shop" role="menuitem" className="text-dark">
                        Shop
                      </a>
                    </li>

                    <li>
                      <a href="/contact" role="menuitem" className="text-dark">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="offcanvas__text">
              <p>African fashion ready to wear </p>
            </div>
          </div>
        </div>
      </header>

      {/* </Container> */}
    </div>
  );
};

export default Navbar;
