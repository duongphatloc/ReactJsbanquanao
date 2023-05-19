import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/homeadmin"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin</div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link className="nav-link" to="/homeadmin">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Interface</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog" />
          <span>Settting</span>
        </Link>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <Link className="collapse-item" to="/banner">
              Banner Footer
            </Link>
            <Link className="collapse-item" to={"/bannerTop"}>
              Banner Top
            </Link>
          </div>
        </div>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-solid fa-box"></i>
          <span>Pages</span>
        </Link>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Add and edit products:</h6>
            <Link className="collapse-item" to="/product">
              Product
            </Link>
            <Link
              className="collapse-item"
              href="utilities-border.html"
              to="/user"
            >
              Checkout
            </Link>
            <Link
              className="collapse-item"
              href="utilities-animation.html"
              to="/contactAdmin"
            >
              Contact
            </Link>
            {/* <Link
              className="collapse-item"
              href="utilities-animation.html"
              to="/aboutAdmin"
            >
              About
            </Link> */}
            <a className="collapse-item" href="utilities-other.html">
              Other
            </a>
          </div>
        </div>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
};

export default Sidebar;
