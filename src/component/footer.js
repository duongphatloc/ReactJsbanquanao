import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>About ThewayShop</h4>
                  <p>
                  Established in 2011, MAY BOUTIQUE has risen to become the leading women's fashion system for young people with more than 20 modern and large-scale showrooms in major streets of Hanoi. Professional, friendly service style and diversified and constantly updated product designs are the special features of MAY that are loved by many customers.

                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="../pages/About.js">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Contact Us</h4>
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
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer  */}
      {/* Start copyright  */}
      <div className="footer-copyright">
        <p className="footer-company">
          All Rights Reserved. © 2018 <a href="#">ThewayShop</a>
        </p>
      </div>
      {/* End copyright  */}
      <a
        href="#"
        id="back-to-top"
        title="Back to top"
        style={{ display: "none" }}
      >
        ↑
      </a>
      {/* ALL JS FILES */}
      {/* ALL PLUGINS */}
    </>
  );
};

export default Footer;
