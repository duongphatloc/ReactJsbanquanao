import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
const ContactAdmin = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    loadContact();
  }, []);
  const loadContact = async () => {
    const result = await axios.get("http://localhost:8000/contacts");
    setContacts(result.data);
  };
  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    loadContact();
    alert("deleted sucess");
  };
  const editContact = (id) => {
    navigate("/contact/edit/" + id);
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
                      Contact <small className="text-muted">list</small>
                    </h3>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary table-hover table-striped">
                    <thead>
                      <tr className="table-primary border-primary">
                        <th style={{ width: 50 }}>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th> Phone</th>
                        <th>Message</th>
                        <th style={{ width: 80 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.phone}</td>
                          <td>{contact.message}</td>
                          <td>
                            {/* <button onClick={()=>editProducts(product.id)}>
                       <i className="bi-pencil-square text-primary" />
                     </button> */}
                            <Link
                              href="#"
                              onClick={() => deleteContact(contact.id)}
                            >
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

export default ContactAdmin;
