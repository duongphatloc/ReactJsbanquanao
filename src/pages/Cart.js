import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer";
import CustomButton from "../component/CustomButton";
import { useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import { useCart } from "react-use-cart";
import axios from "axios";
import Input from "./../component/Input";

const StyledHome = styled.div``;

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems();
  }, []);
  const navigate = useNavigate();
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
  const deleteCart = async (id) => {
    let IsDelete = window.confirm(
      "Are you sure? This item will be remove from your order!"
    );
    if (IsDelete) {
      await axios.delete(`http://localhost:8000/carts/${id}`);

      loadItems();
    }
  };
  const incDec = async (a, b, c, d, e, f) => {
    if (c === "dec") {
      if (a === 1) {
        a = 1;
      } else {
        a -= 1;
      }
    } else {
      if (a === 20) {
        a = 20;
        alert("Quantity Cannot Exceed 20!");
        return;
      } else {
        a += 1;
      }
    }
    const cart = { name: d, price: e, qty: a, image: f };
    await axios.put(`http://localhost:8000/carts/${b}`, cart);
    loadItems();
  };

  return (
    <StyledHome>
      <Header />
      <div className="cart-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-main table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>

                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img className="img-fluid" src={item.image} alt />
                          </a>
                        </td>
                        <td className="name-pr">
                          <a href="#"> {item.name} </a>
                        </td>
                        <td className="price-pr">
                          <p>{item.price * item.qty}</p>
                        </td>
                        <td className="quantity-box">
                          <button
                            onClick={() =>
                              incDec(
                                item.qty,
                                item.id,
                                "dec",
                                item.name,
                                item.price,
                                item.image
                              )
                            }
                          >
                            -
                          </button>

                          <input
                            value={item.qty}
                            className="c-input-text qty text"
                          />
                          <button
                            onClick={() =>
                              incDec(
                                item.qty,
                                item.id,
                                "inc",
                                item.name,
                                item.price,
                                item.image
                              )
                            }
                          >
                            +
                          </button>
                        </td>

                        <td className="remove-pr">
                          <button onClick={() => deleteCart(item.id)}>
                            <i className="fas fa-times" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    ;
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-sm-6">
              <div className="coupon-box">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control"
                    placeholder="Enter your coupon code"
                    aria-label="Coupon code"
                    type="text"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-theme" type="button">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-8 col-sm-12" />
            <div className="col-lg-4 col-sm-12">
              <div className="order-box">
                <div className="d-flex gr-total">
                  <h5>Grand Total</h5>
                  <div className="ml-auto h5">$ {total}</div>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-12 d-flex shopping-box">
              <button
                type="button"
                color="dark"
                className="ml-auto btn-checkout"
                onClick={checkoutcard}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </StyledHome>
  );
};

export default Cart;
