import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";

import routes from "../routes";
import Header from "./Header";
import Sidebar from "./Sidebar";
const DefaultLayout = (props) => {
  return (
    <>
      <div className="" id="wrapper">
        <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Header />
            <Routes>
              {routes.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.component} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="assets/vendor/jquery/jquery.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>

        <script src="assets/js/sb-admin-2.min.js"></script>

        <script src="assets/vendor/chart.js/Chart.min.js"></script>

        <script src="assets/js/demo/chart-area-demo.js"></script>
        <script src="assets/js/demo/chart-pie-demo.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
      </Helmet>
    </>
  );
};

export default DefaultLayout;
