import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../../containers/Header";
import Sidebar from "../../containers/Sidebar";
const BannerTop = () => {
  const navigate = useNavigate();
  
  const [bannerTops,setBannerTops]=useState([]);
  useEffect(()=>{
     loadBannerTop();

  },[]);
 const loadBannerTop =async () =>{
     const result = await axios.get("http://localhost:8000/bannerTops");
    setBannerTops(result.data);
 }
 const deleteBannerTops =async id =>{
     await axios.delete(`http://localhost:8000/bannerTops/${id}`);
     loadBannerTop();
     alert("deleted sucess")
 }
 const editBannerTops = (id) =>{
   navigate("/bannerTop/edit/" +id);
 
 
}
const styleImage = {
  height:'300px',
  
  


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
                Banner Top <small className="text-muted">list</small>
              </h3>
            </div>
            <div className="col-auto">
              <Link
              to={"/bannerTop/add"}
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
                  <th>Title</th>
                  <th>Content</th>
                  
                  <th style={{ width: 80 }}>Action</th> 
                </tr>
              </thead>
              <tbody>
                { bannerTops.map((bannerTop,index)=>(
                   <tr>
                    <td>{index + 1 }</td>
                  
                   <td><img src={bannerTop.image} style={styleImage} className=""></img></td>
                   <td>{bannerTop.title}</td>
                   <td>{bannerTop.content}</td>
                  
                   <td>
                     <button onClick={()=>editBannerTops(bannerTop.id)}>
                       <i className="bi-pencil-square text-primary" />
                     </button>
                     <Link href="#" onClick={()=>deleteBannerTops(bannerTop.id)}>
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

export default BannerTop;
