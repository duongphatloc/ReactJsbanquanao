import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../component/CustomButton";
import Input from "../../component/Input";
import Header from "../../containers/Header";
import Sidebar from "../../containers/Sidebar";

const BannerTopAdd = (props) => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/bannerTop");
  };

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
 
  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/bannerTops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        
        image,
      }),
    });
    const data = await response.json();
    alert("add sucess");
    navigate("/bannerTop");
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
                          <small className="text-muted">Add Banner Top</small>
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
                        value={title}
                        onChange={handleTitleChange}
                      />
                      
                     
                    
                      <Input
                        label="content"
                        lastRow
                        required
                        name="content"
                        value={content}
                        onChange={handleContentChange}
                      />
                      <Input
                        label="images"
                        lastRow
                        required
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
                      <button color="primary">Save</button>
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

export default BannerTopAdd;
