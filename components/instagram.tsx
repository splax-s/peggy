import React from 'react'

import pic1 from "../img/instagram/instagram-1.png"
import pic2 from "../img/instagram/instagram-2.png"
import pic3 from "../img/instagram/instagram-3.png"
import pic4 from "../img/instagram/instagram-4.png"
import pic5 from "../img/instagram/instagram-5.png"
import pic6 from "../img/instagram/instagram-6.png"

import Image from 'next/image'


export default function Instagram() {
    return (
        <section className="instagram spad mb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="instagram__pic">
                            <Image
                                className="instagram__pic__item set-bg"
                                src={pic1}
                                alt=''
                            />
                            <Image
                                alt=''
                                className="instagram__pic__item set-bg"
                                src={pic2}
                            />
                            <Image
                                alt=''
                                className="instagram__pic__item set-bg"
                                src={pic3}
                            />
                            <Image
                                alt=''
                                className="instagram__pic__item set-bg"
                                src={pic4}
                            />
                            <Image
                                alt=''
                                className="instagram__pic__item set-bg"
                                src={pic5}
                            />
                            <Image
                                alt=''
                                className="instagram__pic__item set-bg"
                                src={pic6}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="instagram__text">
                            <h2>Instagram</h2>
                            <p>
                                PeggyRussel Collections For inquiries &amp; booking contact us at
                                08023158152. We do Bridal Bespoke tailoring and ready to wear
                                fabrics
                            </p>
                            <h3>#NaijaFashion</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
