import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer";

const StyledHome = styled.div``;

const About = () => {
  return (
    <StyledHome>
      <Header />

      {/* End Side Menu */}
      {/* End Navigation */}
      {/* End Main Top */}
      {/* Start Top Search */}
      <div className="top-search">
        <div className="container">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-search" />
            </span>
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-addon close-search">
              <i className="fa fa-times" />
            </span>
          </div>
        </div>
      </div>
      {/* End Top Search */}
      {/* Start All Title Box */}
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>ABOUT US</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">ABOUT US</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End All Title Box */}
      {/* Start About Page  */}
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                We are <span>ThewayShop</span>
              </h2>
              <p>
                Established in 2011, MAY BOUTIQUE has risen to become the
                leading women's fashion system for young people with more than
                20 modern and large-scale showrooms in major streets of Hanoi.
                Professional, friendly service style and diversified and
                constantly updated product designs are the special features of
                MAY that are loved by many customers. May boutique is one of the
                fashion clothing stores that are so familiar to young people in
                Hanoi. When coming to the fashion stores of May boutique, you
                will be spoiled for choice with beautiful quality fashion
                products, with many different designs and models suitable for
                all styles, for individual girls, young and dynamic to gentle
                and feminine girls and even elegant office ladies are suitable.
                Especially, May boutique also has Vignette boutique specializing
                in design to bring you the most unique choices. With the motto
                of always making efforts for dear customers, MAY BOUTIQUE
                constantly strives to improve service and product quality,
                deserving to be an attractive and reliable fashion address of
                Hanoi's youth. Customers appreciate the shop's clothes mainly
                because of their applicability, you can wear them to school,
                work or for outdoor picnics. The dresses are delicately
                designed, not too fussy with the highlight of the waist details,
                the sleeves or the ruffled bow tie, helping to respect the three
                body curves, both seductive, feminine and trendy in the true
                sense.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/about-img.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Trusted</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Expert</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <h2 className="noo-sh-title">Meet Our Team</h2>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  <img src="images/lok1.jpg" alt />
                  <div className="team-content">
                    <h3 className="title">Dương Phát Lộc</h3>
                    <span className="post">Trưởng nhóm</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube" />
                    </li>
                  </ul>
                  <div className="icon">
                    <i className="fa fa-plus" aria-hidden="true" />
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent urna diam, maximus ut ullamcorper quis, placerat id
                    eros. Duis semper justo sed condimentum rutrum. Nunc
                    tristique purus turpis. Maecenas vulputate.
                  </p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  <img src="images/embe.jpg" alt />
                  <div className="team-content">
                    <h3 className="title">Em Pé</h3>
                    <span className="post">2022</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube" />
                    </li>
                  </ul>
                  <div className="icon">
                    <i className="fa fa-plus" aria-hidden="true" />
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    I really like this website, I will recommend it to friends
                    and relatives. Wish the shop owner always good luck and sell
                    expensive and lots of fun.
                  </p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  <img src="images/huyhoang.jpg" alt />
                  <div className="team-content">
                    <h3 className="title">Nguyễn Huy Hoàng</h3>
                    <span className="post">Thành viên nhóm</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube" />
                    </li>
                  </ul>
                  <div className="icon">
                    <i className="fa fa-plus" aria-hidden="true" />
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent urna diam, maximus ut ullamcorper quis, placerat id
                    eros. Duis semper justo sed condimentum rutrum. Nunc
                    tristique purus turpis. Maecenas vulputate.
                  </p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  <img src="images/mi-dieu.jpg" alt />
                  <div className="team-content">
                    <h3 className="title">Mỹ Diệu</h3>
                    <span className="post">Boss</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube" />
                    </li>
                  </ul>
                  <div className="icon">
                    <i className="fa fa-plus" aria-hidden="true" />
                  </div>
                </div>
                <div className="team-description">
                  <p>Meow meow</p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Footer  */}
      <Footer />
    </StyledHome>
  );
};

export default About;
