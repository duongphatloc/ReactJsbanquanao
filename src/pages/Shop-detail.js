import React, { useEffect, useState } from "react";

import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer";
import CustomButton from "../component/CustomButton";
import axios from "axios";

const StyledHome = styled.div``;

const Detail = () => {
  const [empdata, empdatachange] = useState({});
  const { empid } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/products/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const navigate = useNavigate();
  const checkoutcard = () => {
    navigate("/checkout");
  };
  let qty = 1;
  const addCart = async (a, b, c) => {
    let isExisting = false;

    const result = await axios.get("http://localhost:8000/carts");
    if (result.data.lenght === 0) {
      const cart = { name: a, price: b, image: c, qty: qty };
      axios.post("http://localhost:8000/carts", cart);
    } else {
      result.data.map((cartItem) => {
        if (a === cartItem.name) {
          cartItem.qty += 1;
          const cart = {
            name: a,
            price: b,
            image: c,
            qty: cartItem.qty,
          };
          axios.put(`http://localhost:8000/carts/${cartItem.id}`, cart);
          isExisting = true;
        }
      });
      if (isExisting == false) {
        const cart = {
          name: a,
          price: b,
          image: c,
          qty: qty,
        };
        axios.post("http://localhost:8000/carts", cart);
      }
      alert("Add to cart successfully");
    }
  };

  const addWishlist = async (a, b, c) => {
    let isExisting = false;

    const result = await axios.get("http://localhost:8000/wishlists");
    if (result.data.lenght === 0) {
      const wishlist = { name: a, price: b, image: c, qty: qty };
      axios.post("http://localhost:8000/wishlists", wishlist);
    } else {
      result.data.map((wishlistItem) => {
        if (a === wishlistItem.name) {
         
          const wishlist = {
            name: a,
            price: b,
            image: c,
            qty: wishlistItem.qty,
          };
          axios.put(`http://localhost:8000/wishlists/${wishlistItem.id}`, wishlist);
          isExisting = true;
        }
      });
      if (isExisting == false) {
        const wishlist = {
          name: a,
          price: b,
          image: c,
          qty: qty,
        };
        axios.post("http://localhost:8000/wishlists", wishlist);
      }
      alert("Add to Wishlist successfully");
    }
  };

  return (
      
    <StyledHome>
       <Header />
   
      {empdata && (
        <div>
          <div className="shop-detail-box-main">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div
                    id="carousel-example-1"
                    className="single-product-slider carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        {" "}
                        <img
                          className="d-block w-100"
                          src={empdata.image}
                          alt="First slide"
                        />{" "}
                      </div>
                      <div className="carousel-item">
                        {" "}
                        <img
                          className="d-block w-100"
                          src={empdata.image}
                          alt="Second slide"
                        />{" "}
                      </div>
                      <div className="carousel-item">
                        {" "}
                        <img
                          className="d-block w-100"
                          src={empdata.image}
                          alt="Third slide"
                        />{" "}
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carousel-example-1"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carousel-example-1"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carousel-example-1"
                        data-slide-to={0}
                        className="active"
                      >
                        <img
                          className="d-block w-100 img-fluid"
                          src={empdata.image}
                          alt
                        />
                      </li>
                      <li data-target="#carousel-example-1" data-slide-to={1}>
                        <img
                          className="d-block w-100 img-fluid"
                          src={empdata.image}
                          alt
                        />
                      </li>
                      <li data-target="#carousel-example-1" data-slide-to={2}>
                        <img
                          className="d-block w-100 img-fluid"
                          src={empdata.image}
                          alt
                        />
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-6">
                  <div className="single-product-details">
                    <h2>{empdata.title}</h2>
                    <h5> {empdata.price}</h5>
                    <p className="available-stock">
                      <span>
                        {" "}
                        More than 20 available / <a href="#">8 sold </a>
                      </span>
                    </p>
                    <p></p>
                    <h4>Short Description:</h4>
                    <p>{empdata.description}</p>

                    <div className="price-box-bar">
                      <div className="cart-and-bay-btn">
                       
                        <CustomButton
                          color="danger"
                          className="ml-auto hvr-hover me-4"
                          onClick={checkoutcard}
                          
                          
                         
                        >
                          <i class="bi bi-basket2-fill me-2"></i>
                          Buy New
                        </CustomButton>
                       
                        

                        <CustomButton
                          color="primary"
                          className="ml-auto hvr-hover"
                          onClick={() =>
                            addCart(
                              empdata.title,
                              empdata.price,
                              empdata.image
                            )
                          }
                        >
                          <i class="bi bi-plus-circle me-2"></i>
                          Add to cart
                        </CustomButton>
                      </div>
                    </div>
                    <div className="add-to-btn">
                      <div className="add-comp">
                        <CustomButton
                          color="success"
                          className="ml-auto hvr-hover"
                          onClick={() =>
                            addWishlist(
                              empdata.title,
                              empdata.price,
                              empdata.image
                            )
                          }
                        >
                          <i className="fas fa-heart me-1" />
                          Add to wishlist
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-lg-12">
                  <div className="title-all text-center">
                    <h1>Featured Products</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sit amet lacus enim.
                    </p>
                  </div>
                  <div className="featured-products-box owl-carousel owl-theme">
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-01.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-02.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-03.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-04.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-01.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-02.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-03.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <img
                            src="images/img-pro-04.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="mask-icon">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="View"
                                >
                                  <i className="fas fa-eye" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Compare"
                                >
                                  <i className="fas fa-sync-alt" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                            </ul>
                            <a className="cart" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>Lorem ipsum dolor sit amet</h4>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
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
      )}

      <Footer />
    </StyledHome>
  );
};

export default Detail;
