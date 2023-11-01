import Image from "next/image";

import logo from "../img/footer-logo.png";
import payment from "../img/payment.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__logo">
                <a href="#">
                  <Image src={logo} alt="" />
                </a>
              </div>
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              {/* <a href="#">
                <Image src={payment} alt="" />
              </a> */}
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Shopping</h6>
              <ul>
                <li>
                  <a href="/shop">Clothing Store</a>
                </li>
                <li>
                  <a href="/shop">Fabrics</a>
                </li>
                <li>
                  <a href="/shop">Accessories</a>
                </li>
                <li>
                  <a href="/shop">Sale</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Shopping</h6>
              <ul>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer__copyright__text"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
