import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer";
import axios from "axios";

const StyledHome = styled.div``;

const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    loadWishlist();
  }, []);
  const loadWishlist = async () => {
    const result = await axios.get("http://localhost:8000/wishlists");
    setWishlists(result.data);
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
  const deleteWishlist = async (id) => {
    let IsDelete = window.confirm(
      "Are you sure? This item will be remove from your wishlist!"
    );
    if (IsDelete) {
      await axios.delete(`http://localhost:8000/wishlists/${id}`);

      loadWishlist();
    }
  };

  return (
    <StyledHome>
      <Header />
      <div>
        <div className="wishlist-box-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-main table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>

                        <th>Add Item</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlists.map((wishlist, index) => (
                        <tr key={index}>
                          <td className="thumbnail-img">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src={wishlist.image}
                                alt
                              />
                            </a>
                          </td>
                          <td className="name-pr">
                            <a href="#"> {wishlist.name} </a>
                          </td>
                          <td className="price-pr">
                            <p>{wishlist.price}</p>
                          </td>

                          <td className="add-pr">
                            <button
                              type="button"
                              className="btn-checkout"
                              href="#"
                              onClick={() =>
                                addCart(
                                  wishlist.title,
                                  wishlist.price,
                                  wishlist.image
                                )
                              }
                            >
                              Add to Cart
                            </button>
                          </td>
                          <td className="remove-pr">
                            <a
                              href="#"
                              onClick={() => deleteWishlist(wishlist.id)}
                            >
                              <i className="fas fa-times" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Wishlist */}
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

export default Wishlist;
