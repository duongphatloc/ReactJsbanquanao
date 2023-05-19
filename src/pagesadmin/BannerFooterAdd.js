import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import Input from "../component/Input";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
const BannerFooterAdd = (props) => {

  const navigate = useNavigate();


  const backHandler = () => {
    navigate("/banner");
  };



 
const [image ,setImage]=useState("");





const handleImageChange =(event) =>{
    setImage(event.target.value);
}

  
  const onSubmit = async (event) => {
    
    event.preventDefault();
    const response = await fetch("http://localhost:8000/banners",
     {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({image }),
    });
    const data = await response.json();
    alert("them thanh cong");
    navigate("/banner");
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
                    <small className="text-muted">
                     Add Banner Footer
                    </small>
                  </h3>
                </div>
              </div>
            </div>
            <form onSubmit={e =>onSubmit(e)}>
            <div className="card-body">
            
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
              <button color="primary" >
                Save
              </button>
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

export default BannerFooterAdd;
