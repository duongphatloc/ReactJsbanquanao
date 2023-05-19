import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import CustomButton from "./../component/CustomButton";

const Product = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    const result = await axios.get("http://localhost:8000/products");
    setProducts(result.data);
  };
  const deleteProducts = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    loadProduct();
    alert("deleted sucess");
  };
  const editProducts = (id) => {
    navigate("/product/edit/" + id);
  };
  const styleImage = {
    border: "30px",
    height: "50px",
    wight: "50px",
  };
  return (
    <div className="" id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Header />
          <div className="container mt-4">
            <div className="card border-primary bt-5">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h3 className="card-title">
                      Product <small className="text-muted">list</small>
                    </h3>
                  </div>
                  <div className="col-auto">
                    <Link to={"/product/add"} className="btn btn-success">
                      <i className="bi-plus-lg" /> Add
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary table-hover table-striped">
                    <thead>
                      <tr className="table-primary border-primary">
                        <th style={{ width: 50 }}>#</th>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Image</th>
                        {/* <th>Size</th> */}
                        <th>category</th>
                        <th>Description</th>
                        <th style={{ width: 80 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{product.title}</td>
                          <td>{product.brand}</td>
                          <td>{product.price}</td>
                          <td>
                            <img src={product.image} style={styleImage}></img>
                          </td>
                          {/* <td>{product.size}</td> */}
                          <td>{product.category}</td>
                          <td>{product.description}</td>
                          <td>
                            <CustomButton
                              className="me-2"
                              onClick={() => editProducts(product.id)}
                              color="primary"
                            >
                              <i className="bi-pencil-square text-white" />
                            </CustomButton>
                            <CustomButton
                              color="danger"
                              href="#"
                              onClick={() => deleteProducts(product.id)}
                            >
                              <i className="bi-trash text-white" />
                            </CustomButton>
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
      </div>
    </div>
  );
};

export default Product;
