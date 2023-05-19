import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer";

const StyledHome = styled.div``;

const Contact = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    const data = await response.json();
    alert("Send message sucess");
    navigate("/contact");
    console.log(data);
  };
  return (
    <StyledHome>
      <Header />

      <div>
        <div className="contact-box-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="contact-info-left">
                  <h2>CONTACT INFO</h2>
                  <p>Below is the information about us so you can contact us</p>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        Address: Michael I. Days 3756 <br />
                        Preston Street Wichita,
                        <br />
                        KS 67213
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square" />
                        Phone:
                        <a href="tel:+1-888705770">+1-888 705 770</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope" />
                        Email:
                        <a href="mailto:contactinfo@gmail.com">
                          contactinfo@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="contact-form-right">
                  <h2>GET IN TOUCH</h2>

                  <form id="contactForm" onSubmit={(e) => onSubmit(e)}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={handNameChange}
                            name="name"
                            placeholder="Your Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Your Email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="form-control"
                            name="name"
                            required
                            data-error="Please enter your email"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Phone"
                            required
                            data-error="Please enter your Phone"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={handleMessageChange}
                            rows={4}
                            data-error="Write your message"
                            required
                            defaultValue={""}
                          />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="submit-button text-center">
                          <button
                            className="btn hvr-hover text-black"
                            id="submit"
                            type="submit"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          />
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Cart */}
        {/* Start Instagram Feed  */}
        <div className="instagram-box">
          <div className="main-instagram owl-carousel owl-theme">
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-01.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-02.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-03.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-04.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-05.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-06.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-07.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-08.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-09.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-05.jpg" alt />
                <div className="hov-in">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </StyledHome>
  );
};

export default Contact;
