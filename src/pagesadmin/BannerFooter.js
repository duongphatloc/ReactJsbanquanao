import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
 

const Banner = () => {
  const navigate = useNavigate();
  
  const [banners,setBanners]=useState([]);
  useEffect(()=>{
     loadBanner();

  },[]);
 const loadBanner =async () =>{
     const result = await axios.get("http://localhost:8000/banners");
    setBanners(result.data);
 }
 const deleteBanner =async id =>{
     await axios.delete(`http://localhost:8000/banners/${id}`);
     loadBanner();
     alert("deleted sucess")
 }
 const editBanner = (id) =>{
   navigate("/banner/edit/" +id);
 
 
}
 const styleImage = {
  
  


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
                Banner <small className="text-muted">list</small>
              </h3>
            </div>
            <div className="col-auto">
              <Link
              to={"/banner/add"}
              className="btn btn-primary"
                
              >
                <i className="bi-plus-lg"  /> Add
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
                  <th>Image</th>
                  
                  <th style={{ width: 80 }}>Action</th> 
                </tr>
              </thead>
              <tbody>
                { banners.map((banner,index)=>(
                   <tr>
                    <td>{index + 1 }</td>
                  
                   <td><img src={banner.image}  className=""></img></td>
                  
                   <td>
                     <button onClick={()=>editBanner(banner.id)}>
                       <i className="bi-pencil-square text-primary" />
                     </button>
                     <Link href="#" onClick={()=>deleteBanner(banner.id)}>
                       <i className="bi-trash text-danger" />
                     </Link>
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

export default Banner;
