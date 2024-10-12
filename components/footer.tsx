import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <div className="grid md:grid-cols-3 mx-3 md:mx-0 gap-y-4 md:gap-y-0">
          <div className="flex flex-col items-center">
            <div>
              <div className="flex items-center mb-3">
                <MapPin size={20} color="#c88d15" className="mr-4" />
                <h4 className="font-thin text-[18px]">Lagos, Nigeria</h4>
              </div>
              <div className="flex items-center mb-3">
                <Mail size={20} color="#c88d15" className="mr-4" />
                <Link href="mailto:peggyrusselcollections@gmail.com">
                  <p className="font-thin text-[18px]">
                    peggyrusselcollections@gmail.com
                  </p>
                </Link>
              </div>
              <div className="flex items-center mb-3">
                <Phone size={20} color="#c88d15" className="mr-4" />
                <Link href="tel:+2348023158152">
                  <p className="font-thin text-[18px]">+2348023158152</p>
                </Link>
              </div>
              <div className="flex">
                <Link href="https://m.facebook.com/p/Peggy-Russel-100067188576163/">
                  <Facebook size={25} color="#c88d15" className="mr-4" />
                </Link>
                <Link href="https://www.instagram.com/peggyrussel_collections/">
                  <Instagram size={25} color="#c88d15" className="mr-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Link href="/">
                <p className="font-thin text-[18px] mb-3">Delivery Policy</p>
              </Link>
              <Link href="/">
                <p className="font-thin text-[18px] mb-3">Privacy Policy</p>
              </Link>
              <Link href="/">
                <p className="font-thin text-[18px] mb-3">Return Policy</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:pr-10">
            <h2 className="text-center font-thin text-[18px]">
              SIGN UP FOR OUR NEWSLETTER SO YOU DON'T MISS OUT ON NEW PRODUCTS
              AND EXCLUSIVE OFFERS
            </h2>
            <input
              type="email"
              name="newsletter_email"
              placeholder="Enter your email here"
              className="border-[1px] border-[gray] rounded-md p-3 w-full my-3"
            />
            <button className="py-3 px-7 bg-[#c88d15] text-white rounded-md w-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-black md:mt-0 mt-4">
          &copy; 2024 PeggyRussell, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
