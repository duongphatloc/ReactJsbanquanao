import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../component/CustomButton";
import Input from "../../component/Input";
import Header from "../../containers/Header";
import Sidebar from "../../containers/Sidebar";
const BannerTopEdit = (props) => {
  const { empid } =useParams();
    useEffect(() =>{
        fetch("http://localhost:8000/bannerTops/" + empid).then((res) =>{
            return res.json();
        }).then((resp)=>{
            setImage(resp.image);
            setTitle(resp.title);
            setContent(resp.content);

        }).catch((err)=>{
            console.log(err.message);
        })
    }, []);

  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/banner");
  };



const [image ,setImage]=useState("");
const [title ,setTitle]=useState("");

const [content ,setContent]=useState("");






const handleImageChange =(event) =>{
    setImage(event.target.value);
}
const handleTitleChange =(event) =>{
  setTitle(event.target.value);
}
const handleContentChange =(event) =>{
  setContent(event.target.value);
}

  const onSubmit = async (event) => {
    
    event.preventDefault();
    const response = await fetch("http://localhost:8000/bannerTops/"+empid,
     {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({image,title,content }),
    });
    const data = await response.json();
    alert("UPDATE SUCESS");
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
                          <small className="text-muted">edit Banner Top</small>
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
                        name="title"
                        defaultValue={title}
                        onChange={handleTitleChange}
                      />
                     
                     
                     
                      <Input
                        label="Content"
                        lastRow
                        required
                        name="content"
                        defaultValue={content}
                        onChange={handleContentChange}
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

export default BannerTopEdit;
