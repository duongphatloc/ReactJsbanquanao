import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import Input from "../component/Input";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
const ProductEdit = (props) => {
  const { empid } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/products/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTitle(resp.title);
        setBrand(resp.brand);
        setPrice(resp.price);
        setCategory(resp.category);
        setDescription(resp.description);
        setImage(resp.image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/product");
  };

  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/products/" + empid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        brand,
        price,
        category,
        description,
        image,
      }),
    });
    const data = await response.json();
    alert("UPDATE SUCESS");
    navigate("/product");
    console.log(data);
  };

  return (
    <div className="" id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Header />
          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card border-primary bt-5">
                  <div className="card-header">
                    <div className="row">
                      <div className="col">
                        <h3 className="card-title">
                          <small className="text-muted">edit Product</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="card-body">
                      <Input
                        label="title"
                        lastRow
                        required
                        name="name"
                        defaultValue={title}
                        onChange={handleTitleChange}
                      />
                      <Input
                        label="Brand"
                        lastRow
                        required
                        name="brand"
                        value={brand}
                        onChange={handleBrandChange}
                      />
                      <Input
                        label="price"
                        lastRow
                        required
                        name="price"
                        value={price}
                        onChange={handlePriceChange}
                      />
                      <Input
                        label="category"
                        lastRow
                        required
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                      />
                      <Input
                        label="Description"
                        lastRow
                        required
                        name="description"
                        value={description}
                        onChange={handleDescriptionChange}
                      />
                      <Input
                        label="images"
                        lastRow
                        required
                        defaultValue={image}
                        onChange={handleImageChange}
                        name="image"
                      />
                    </div>
                    <div className="card-footer text-center">
                      <CustomButton
                        color="secondary"
                        onClick={backHandler}
                        className="me-1"
                      >
                        Back
                      </CustomButton>
                      <CustomButton color="primary" onClick={onSubmit}>
                        Save
                      </CustomButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
