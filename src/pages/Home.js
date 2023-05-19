import React from "react";

import styled from "styled-components";
import Header from "../component/header";
import Footer from "../component/footer"
import Layouts  from "../component/layouts";

const StyledHome = styled.div``;

const Home = () => {
  return (
    <StyledHome>
      <Header />

      {/* End Top Search */}
      {/* Start Slider */}
      <Layouts/>
      {/* End Instagram Feed  */}
      {/* Start Footer  */}
      <Footer/>
      
      
    </StyledHome>
  );
};

export default Home;
