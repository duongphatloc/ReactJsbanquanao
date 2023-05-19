import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer";
import axios from "axios";

const StyledHome = styled.div``;

const Checkout = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleUsrenameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, address, phone }),
    });
    const data = await response.json();
    alert("Order thành công");
    navigate("/");
    console.log(data);
  };
  const [carts, setCart] = useState([]);
  useEffect(() => {
    loadCart();
  }, []);
  const loadCart = async () => {
    const result = await axios.get("http://localhost:8000/carts");
    setCart(result.data);
  };
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems();
  }, []);

  const [total, setTotal] = useState();

  const checkoutcard = () => {
    navigate("/checkout");
  };
  var totalPrice = 0;
  const loadItems = async () => {
    const result = await axios.get("http://localhost:8000/carts");
    setItems(result.data);
    result.data.map((item) => {
      totalPrice += item.qty * Number(item.price);
    });
    setTotal(totalPrice);
  };

  return (
    <StyledHome>
      <Header />
      <div className="cart-box-main">
        <div className="container">
          <div className="row new-account-login">
            <div className="col-sm-6 col-lg-6 mb-3">
              <div className="title-left">
                <h3>Account Login</h3>
              </div>
              <h5>
                <a
                  data-toggle="collapse"
                  href="#formLogin"
                  role="button"
                  aria-expanded="false"
                >
                  Click here to Login
                </a>
              </h5>
              <form className="mt-3 collapse review-form-box" id="formLogin">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="InputEmail" className="mb-0">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      placeholder="Enter Email"
                    />{" "}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="InputPassword" className="mb-0">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword"
                      placeholder="Password"
                    />{" "}
                  </div>
                </div>
                <button type="submit" className="btn hvr-hover">
                  Login
                </button>
              </form>
            </div>
            <div className="col-sm-6 col-lg-6 mb-3">
              <div className="title-left">
                <h3>Create New Account</h3>
              </div>
              <h5>
                <a
                  data-toggle="collapse"
                  href="#formRegister"
                  role="button"
                  aria-expanded="false"
                >
                  Click here to Register
                </a>
              </h5>
              <form className="mt-3 collapse review-form-box" id="formRegister">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="InputName" className="mb-0">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputName"
                      placeholder="First Name"
                    />{" "}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="InputLastname" className="mb-0">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputLastname"
                      placeholder="Last Name"
                    />{" "}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="InputEmail1" className="mb-0">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail1"
                      placeholder="Enter Email"
                    />{" "}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="InputPassword1" className="mb-0">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword1"
                      placeholder="Password"
                    />{" "}
                  </div>
                </div>
                <button type="submit" className="btn hvr-hover">
                  Register
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-6 mb-3">
              <div className="checkout-address">
                <div className="title-left">
                  <h3>Billing address</h3>
                </div>
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="row">
                    <div className=" mb-3">
                      <label htmlFor="firstName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={handleNameChange}
                        placeholder
                        required
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Valid name is required.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username">Username *</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={handleUsrenameChange}
                        placeholder
                        required
                      />
                      <div
                        className="invalid-feedback"
                        style={{ width: "100%" }}
                      >
                        {" "}
                        Your username is required.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Please enter a valid email address for shipping updates.{" "}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address">Address *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={address}
                      onChange={handleAddressChange}
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Please enter your shipping address.{" "}
                    </div>
                  </div>
                  <div className=" mb-3">
                    <label htmlFor="firstName">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Valid phone is required.{" "}
                    </div>
                  </div>

                  <hr className="mb-4" />
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="same-address"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="same-address"
                    >
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="save-info"
                    />
                    <label className="custom-control-label" htmlFor="save-info">
                      Save this information for next time
                    </label>
                  </div>
                  <hr className="mb-4" />
                  <div className="title">
                    {" "}
                    <span>Payment</span>{" "}
                  </div>
                  <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        defaultChecked
                        required
                      />
                      <label className="custom-control-label" htmlFor="credit">
                        Credit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required
                      />
                      <label className="custom-control-label" htmlFor="debit">
                        Debit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required
                      />
                      <label className="custom-control-label" htmlFor="paypal">
                        Paypal
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-name">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder
                        required
                      />{" "}
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        {" "}
                        Name on card is required{" "}
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-number">Credit card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder
                        required
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Credit card number is required{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label htmlFor="cc-expiration">Expiration</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder
                        required
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Expiration date required{" "}
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="cc-expiration">CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder
                        required
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Security code required{" "}
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="payment-icon">
                        <ul>
                          <li>
                            <img
                              className="img-fluid"
                              src="images/payment-icon/1.png"
                              alt
                            />
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="images/payment-icon/2.png"
                              alt
                            />
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="images/payment-icon/3.png"
                              alt
                            />
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="images/payment-icon/5.png"
                              alt
                            />
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="images/payment-icon/7.png"
                              alt
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-1" />
                  <div className="col-12 d-flex shopping-box">
                    {" "}
                    <button
                      href="checkout.html"
                      className="ml-auto btn-checkout"
                    >
                      Place Order
                    </button>{" "}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 mb-3">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="shipping-method-box">
                    <div className="title-left">
                      <h3>Shipping Method</h3>
                    </div>
                    <div className="mb-4">
                      <div className="custom-control custom-radio">
                        <input
                          id="shippingOption1"
                          name="shipping-option"
                          className="custom-control-input"
                          defaultChecked="checked"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="shippingOption1"
                        >
                          Standard Delivery
                        </label>{" "}
                        <span className="float-right font-weight-bold">
                          FREE
                        </span>{" "}
                      </div>
                      <div className="ml-4 mb-2 small">(3-7 business days)</div>
                      <div className="custom-control custom-radio">
                        <input
                          id="shippingOption2"
                          name="shipping-option"
                          className="custom-control-input"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="shippingOption2"
                        >
                          Express Delivery
                        </label>{" "}
                        <span className="float-right font-weight-bold">
                          $10.00
                        </span>{" "}
                      </div>
                      <div className="ml-4 mb-2 small">(2-4 business days)</div>
                      <div className="custom-control custom-radio">
                        <input
                          id="shippingOption3"
                          name="shipping-option"
                          className="custom-control-input"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="shippingOption3"
                        >
                          Next Business day
                        </label>{" "}
                        <span className="float-right font-weight-bold">
                          $20.00
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="odr-box">
                    <div className="title-left">
                      <h3>Shopping cart</h3>
                    </div>
                    {carts.map((cart, index) => (
                      <div className="rounded p-2 bg-light">
                        <div className="media mb-2 border-bottom">
                          <div className="media-body">
                            {" "}
                            <a href="detail.html">{cart.name}</a>
                            <div className="small text-muted">
                              {cart.price} <span className="mx-2">|</span>{" "}
                              {cart.qty} <span className="mx-2">|</span>{" "}
                              {cart.price * cart.qty}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="order-box">
                    {/* <div className="title-left">
                <h3>Your order</h3>
              </div>
              <div className="d-flex">
                <div className="font-weight-bold">Product</div>
                <div className="ml-auto font-weight-bold">Total</div>
              </div>
              <hr className="my-1" />
              <div className="d-flex">
                <h4>Sub Total</h4>
                <div className="ml-auto font-weight-bold"> $ 440 </div>
              </div>
              <div className="d-flex">
                <h4>Discount</h4>
                <div className="ml-auto font-weight-bold"> $ 40 </div>
              </div>
              <hr className="my-1" />
              <div className="d-flex">
                <h4>Coupon Discount</h4>
                <div className="ml-auto font-weight-bold"> $ 10 </div>
              </div>
              <div className="d-flex">
                <h4>Tax</h4>
                <div className="ml-auto font-weight-bold"> $ 2 </div>
              </div>
              <div className="d-flex">
                <h4>Shipping Cost</h4>
                <div className="ml-auto font-weight-bold"> Free </div>
              </div>
              <hr /> */}
                    <div className="d-flex gr-total">
                      <h5>Grand Total</h5>
                      <div className="ml-auto h5"> ${total} </div>
                    </div>
                    <hr />{" "}
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

export default Checkout;
