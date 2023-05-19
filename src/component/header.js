import React from "react";
import Helmet from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import Wishlist from './../pages/Wishlist';

const hearder = () => {
  return (
    <>
      <Helmet>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <script src="js/jquery.superslides.min.js"></script>
        <script src="js/bootstrap-select.js"></script>
        <script src="js/inewsticker.js"></script>
        <script src="js/bootsnav.js"></script>
        <script src="js/images-loded.min.js"></script>
        <script src="js/isotope.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/baguetteBox.min.js"></script>
        <script src="js/form-validator.min.js"></script>
        <script src="js/contact-form-script.js"></script>
        <script src="js/custom.js"></script>
      </Helmet>
      <div className="main-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-slid-box">
                <div id="offer-box" className="carouselTicker">
                  <ul className="offer-box">
                    <li>
                      <i className="fab fa-opencart" /> Off 10%! Shop Now Man
                    </li>
                    <li>
                      <i className="fab fa-opencart" /> 50% - 80% off on Fashion
                    </li>
                    <li>
                      <i className="fab fa-opencart" /> 20% off Entire Purchase
                      Promo code: offT20
                    </li>
                    <li>
                      <i className="fab fa-opencart" /> Off 50%! Shop Now
                    </li>
                    <li>
                      <i className="fab fa-opencart" /> Off 10%! Shop Now Man
                    </li>
                    <li>
                      <i className="fab fa-opencart" /> 50% - 80% off on Fashion
                    </li>
                    <li>
                      <i className="fab fa-opencart" /> 20% off Entire Purchase
                      Promo code: offT20
                    </li>
                    <li>
                      <i className="bi bi-opencart" /> Off 50%! Shop Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="custom-select-box">
                <select
                  id="basic"
                  className="selectpicker show-tick form-control"
                  data-placeholder="$ USD"
                >
                  <option>¥ JPY</option>
                  <option>$ USD</option>
                  <option>€ EUR</option>
                </select>
              </div>
              <div className="right-phone-box">
                <p>
                  Call US :- <a href="#"> +11 900 800 100</a>
                </p>
              </div>
              <div className="our-link">
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Our location</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Top */}
      {/* Start Main Top */}
      <header className="main-header">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <Link className="navbar-brand" to="/*">
                <img src="images/logo.png" className="logo" alt="" />
              </Link>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/about"}>
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/shop"}>
                    Product
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={"/contact"} className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/wishlist"} className="nav-link">
                   Wishlist
                  </NavLink>
                </li>
                
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li className="side-menu" >
                  <NavLink href="#" to={"/cart"}>
                    <i className="fa fa-shopping-bag" />
                   
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
          </div>
          {/* Start Side Menu */}
       
          {/* End Side Menu */}
        </nav>
        {/* End Navigation */}
      </header>
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
    </>
  );
};
export default hearder;
