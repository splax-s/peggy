"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = `mailto:peggyatoe@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  return (
    <section className="contact spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__text">
              <div className="section-title">
                <span>Information</span>
                <h2>Contact Us</h2>
                <p>
                  As you might expect of a company that began as a high-end
                  interiors contractor, we pay strict attention.
                </p>
              </div>
              <ul>
                <li>
                  <h4>Lagos Nigeria</h4>
                  <p>
                    No 4. Omoniyi Street . Shangisha , Magodo <br />
                    +234 802 315 8152
                  </p>
                  <p>Peggyatoe@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Message"
                      name="message"
                      onChange={handleChange}
                    ></textarea>
                    <button type="submit" className="site-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
