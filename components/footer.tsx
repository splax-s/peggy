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
                <MapPin size={24} color="#c88d15" className="mr-4" />
                <h4 className="font-thin text-xl">Lagos, Nigeria</h4>
              </div>
              <div className="flex items-center mb-3">
                <Mail size={24} color="#c88d15" className="mr-4" />
                <Link href="mailto:shoperikan@veekeejames.com">
                  <p className="font-thin text-xl">shoperikan@veekeejames.com</p>
                </Link>
              </div>
              <div className="flex items-center mb-3">
                <Phone size={24} color="#c88d15" className="mr-4" />
                <Link href="tel:+2347052681921">
                  <p className="font-thin text-xl">+2347052681921</p>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <Facebook size={30} color="#c88d15" className="mr-4" />
                </Link>
                <Link href="/">
                  <Instagram size={30} color="#c88d15" className="mr-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Link href="/" >
                <p className="font-thin text-xl mb-3">Delivery Policy</p>
              </Link>
              <Link href="/" >
                <p className="font-thin text-xl mb-3">Privacy Policy</p>
              </Link>
              <Link href="/" >
                <p className="font-thin text-xl mb-3">Return Policy</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:pr-10">
            <h2 className="text-center font-thin text-xl">SIGN UP FOR OUR NEWSLETTER SO YOU DON'T MISS OUT ON NEW PRODUCTS AND EXCLUSIVE OFFERS</h2>
            <input type="email" name="newsletter_email" placeholder="Enter your email here" 
              className="border-[1px] border-[gray] rounded-md p-3 w-full my-3" />
            <button className="py-3 px-7 bg-[#c88d15] text-white rounded-md w-full">SUBSCRIBE</button>
          </div>
        </div>
        <p className="text-center text-xs text-black">
          &copy; 2023 Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
