import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Wishlist from "./Wishlist";

const StyledHome = styled.div``;

const Shop = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    const result = await axios.get("http://localhost:8000/products");
    setProducts(result.data);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await axios.get(`http://localhost:8000/products?q=${value}`);

    setProducts(result.data);
    setValue("");
  };

  const productDetail = (id) => {
    navigate("/detail/" + id);
  };
  const styleImage = {
    height: "300px",
    wight: "250px",
  };
  const handleCategory = async (value) => {
    return await axios
      .get(`http://localhost:8000/products?category=${value}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };
  const handleBrand = async (value) => {
    return await axios
      .get(`http://localhost:8000/products?brand=${value}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
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
          axios.put(
            `http://localhost:8000/wishlists/${wishlistItem.id}`,
            wishlist
          );
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
      <div className="shop-box-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
              <div className="product-categori">
                <div className="search-product">
                  <form action="#" onSubmit={handleSearch}>
                    <input
                      className="form-control"
                      placeholder="Search here..."
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <div className="filter-sidebar-left">
                  <div className="title-left">
                    <h3>Categories</h3>
                  </div>
                  <div
                    className="list-group list-group-collapse list-group-sm list-group-tree"
                    id="list-group-men"
                    data-children=".sub-men"
                  >
                    {/* <div className="list-group-collapse sub-men">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#sub-men1"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-men1"
                      >
                        Clothing <small className="text-muted">(100)</small>
                      </a>
                      <div
                        className="collapse show"
                        id="sub-men1"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action active"
                          >
                            T-Shirts <small className="text-muted">(50)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Polo T-Shirts
                            <small className="text-muted">(10)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Round Neck T-Shirts
                            <small className="text-muted">(10)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            V Neck T-Shirts
                            <small className="text-muted">(10)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Hooded T-Shirts
                            <small className="text-muted">(20)</small>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-collapse sub-men">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#sub-men2"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="sub-men2"
                      >
                        Footwear
                        <small className="text-muted">(50)</small>
                      </a>
                      <div
                        className="collapse"
                        id="sub-men2"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Sports Shoes
                            <small className="text-muted">(10)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Sneakers <small className="text-muted">(20)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Formal Shoes
                            <small className="text-muted">(20)</small>
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <button
                      onClick={() => handleCategory("Bag")}
                      className="list-group-item list-group-item-action"
                    >
                      Bag <small className="text-muted">(150) </small>
                    </button>
                    <button
                      onClick={() => handleCategory("shirt")}
                      className="list-group-item list-group-item-action"
                    >
                      Shirt <small className="text-muted">(11)</small>
                    </button>
                    <button
                      onClick={() => handleCategory("dress")}
                      className="list-group-item list-group-item-action"
                    >
                      Dress <small className="text-muted">(22)</small>
                    </button>
                    <button
                      onClick={() => handleCategory("trousers")}
                      className="list-group-item list-group-item-action"
                    >
                      Trousers <small className="text-muted">(22)</small>
                    </button>
                    <button
                      onClick={() => handleCategory("bracelet")}
                      className="list-group-item list-group-item-action"
                    >
                      Bracelet <small className="text-muted">(22)</small>
                    </button>
                    <button
                      onClick={() => handleCategory("shoe")}
                      className="list-group-item list-group-item-action"
                    >
                      Shoe <small className="text-muted">(22)</small>
                    </button>
                    <button
                      onClick={() => handleCategory("Aodai")}
                      className="list-group-item list-group-item-action"
                    >
                      Ao dai <small className="text-muted">(22)</small>
                    </button>
                  </div>
                </div>
                <div className="filter-price-left">
                  <div className="title-left">
                    <h3>Price</h3>
                  </div>
                  <div className="price-box-slider">
                    <div id="slider-range" />
                    <p>
                      <input
                        type="text"
                        id="amount"
                        readOnly
                        style={{
                          border: 0,
                          color: "#fbb714",
                          fontWeight: "bold",
                        }}
                      />
                      <button className="btn hvr-hover" type="submit">
                        Filter
                      </button>
                    </p>
                  </div>
                </div>
                <div className="filter-brand-left">
                  <div className="title-left">
                    <h3>Brand</h3>
                  </div>
                  <div className="brand-box">
                    <ul>
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios1"
                            defaultValue="Yes"
                            type="radio"
                            onClick={() => handleBrand("lok")}
                          />
                          <label htmlFor="Radios1"> lok </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios1"
                            defaultValue="Yes"
                            type="radio"
                            onClick={() => handleBrand("Gucci")}
                          />
                          <label htmlFor="Radios1"> Gucci </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios2"
                            defaultValue="No"
                            type="radio"
                            onClick={() => handleBrand("Luoisvuituoi")}
                          />
                          <label htmlFor="Radios2">Luoisvuituoi</label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios3"
                            defaultValue="declater"
                            type="radio"
                            onClick={() => handleBrand("MWC")}
                          />
                          <label htmlFor="Radios3"> MWC </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios4"
                            defaultValue="declater"
                            type="radio"
                            onClick={() => handleBrand("localBrand")}
                          />
                          <label htmlFor="Radios4"> Local Brand </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
              <div className="right-product-box">
                <div className="product-item-filter row">
                  <div className="col-12 col-sm-8 text-center text-sm-left">
                    <div className="toolbar-sorter-right">
                      <span> </span>
                      <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                        data-placeholder="$ USD"
                      >
                        <option data-display="Select">Nothing</option>
                        <option value={1}>Popularity</option>
                        <option value={2}>High Price → High Price</option>
                        <option value={3}>Low Price → High Price</option>
                        <option value={4}>Best Selling</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 text-center text-sm-right">
                    <ul className="nav nav-tabs ml-auto">
                      <li>
                        <a
                          className="nav-link active"
                          href="#grid-view"
                          data-toggle="tab"
                        >
                          <i className="fa fa-th" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          href="#list-view"
                          data-toggle="tab"
                        >
                          <i className="fa fa-list-ul" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row product-categorie-box">
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="grid-view"
                    >
                      <div className="row">
                        {products.map((product, index) => (
                          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                              <div className="box-img-hover">
                                <div className="type-lb">
                                  <p className="sale">Sale</p>
                                </div>
                                <img
                                  src={product.image}
                                  className="img-fluid"
                                  alt="Image"
                                  style={styleImage}
                                />
                                <div className="mask-icon">
                                  <ul>
                                    <li>
                                      <a
                                        onClick={() =>
                                          productDetail(product.id)
                                        }
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
                                        onClick={() =>
                                          addCart(
                                            product.title,
                                            product.price,
                                            product.image
                                          )
                                        }
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Compare"
                                      >
                                        <i className="fa fa-shopping-bag" />
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        onClick={() =>
                                          addWishlist(
                                            product.title,
                                            product.price,
                                            product.image
                                          )
                                        }
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Add to Wishlist"
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="why-text">
                                <h4>{product.title}</h4>
                                <h5>{product.price}</h5>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="list-view"
                    >
                      <div className="list-view-box">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                              <div className="box-img-hover">
                                <div className="type-lb">
                                  <p className="new">New</p>
                                </div>
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                            <div className="why-text full-width">
                              <h4>Lorem ipsum dolor sit amet</h4>
                              <h5>
                                <del>$ 60.00</del> $40.79
                              </h5>
                              <p>
                                Integer tincidunt aliquet nibh vitae dictum. In
                                turpis sapien, imperdiet quis magna nec, iaculis
                                ultrices ante. Integer vitae suscipit nisi.
                                Morbi dignissim risus sit amet orci porta, eget
                                aliquam purus sollicitudin. Cras eu metus felis.
                                Sed arcu arcu, sagittis in blandit eu, imperdiet
                                sit amet eros. Donec accumsan nisi purus, quis
                                euismod ex volutpat in. Vestibulum eleifend eros
                                ac lobortis aliquet. Suspendisse at ipsum vel
                                lacus vehicula blandit et sollicitudin quam.
                                Praesent vulputate semper libero pulvinar
                                consequat. Etiam ut placerat lectus.
                              </p>
                              <a className="btn hvr-hover" href="#">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-view-box">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                              <div className="box-img-hover">
                                <div className="type-lb">
                                  <p className="sale">Sale</p>
                                </div>
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                            <div className="why-text full-width">
                              <h4>Lorem ipsum dolor sit amet</h4>
                              <h5>
                                <del>$ 60.00</del> $40.79
                              </h5>
                              <p>
                                Integer tincidunt aliquet nibh vitae dictum. In
                                turpis sapien, imperdiet quis magna nec, iaculis
                                ultrices ante. Integer vitae suscipit nisi.
                                Morbi dignissim risus sit amet orci porta, eget
                                aliquam purus sollicitudin. Cras eu metus felis.
                                Sed arcu arcu, sagittis in blandit eu, imperdiet
                                sit amet eros. Donec accumsan nisi purus, quis
                                euismod ex volutpat in. Vestibulum eleifend eros
                                ac lobortis aliquet. Suspendisse at ipsum vel
                                lacus vehicula blandit et sollicitudin quam.
                                Praesent vulputate semper libero pulvinar
                                consequat. Etiam ut placerat lectus.
                              </p>
                              <a className="btn hvr-hover" href="#">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-view-box">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                              <div className="box-img-hover">
                                <div className="type-lb">
                                  <p className="sale">Sale</p>
                                </div>
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                            <div className="why-text full-width">
                              <h4>Lorem ipsum dolor sit amet</h4>
                              <h5>
                                <del>$ 60.00</del> $40.79
                              </h5>
                              <p>
                                Integer tincidunt aliquet nibh vitae dictum. In
                                turpis sapien, imperdiet quis magna nec, iaculis
                                ultrices ante. Integer vitae suscipit nisi.
                                Morbi dignissim risus sit amet orci porta, eget
                                aliquam purus sollicitudin. Cras eu metus felis.
                                Sed arcu arcu, sagittis in blandit eu, imperdiet
                                sit amet eros. Donec accumsan nisi purus, quis
                                euismod ex volutpat in. Vestibulum eleifend eros
                                ac lobortis aliquet. Suspendisse at ipsum vel
                                lacus vehicula blandit et sollicitudin quam.
                                Praesent vulputate semper libero pulvinar
                                consequat. Etiam ut placerat lectus.
                              </p>
                              <a className="btn hvr-hover" href="#">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Shop;
