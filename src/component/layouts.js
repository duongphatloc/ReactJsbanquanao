import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Layouts = () => {
  const navigate = useNavigate();
  
  const [banners,setBanners]=useState([]);
  useEffect(()=>{
     loadBanner();

  },[]);
 const loadBanner =async () =>{
     const result = await axios.get("http://localhost:8000/banners");
    setBanners(result.data);
 }
 const [bannerTops,setBannerTops]=useState([]);
  useEffect(()=>{
     loadBannerTop();

  },[]);
 const loadBannerTop =async () =>{
     const result = await axios.get("http://localhost:8000/bannerTops");
    setBannerTops(result.data);
 }
 const styleImage ={
   height:'200px'
 }


  
    return ( 
        <>
        
        <div id="slides-shop" className="cover-slides">
        <ul className="slides-container">
          {bannerTops.map((bannerTop,index)=>(
             <li className="text-left">
             <img src={bannerTop.image} alt="" />
             <div className="container">
               <div className="row">
                 <div className="col-md-12">
                   <h1 className="m-b-20">
                     <strong>
                      {bannerTop.title}
                     </strong>
                   </h1>
                   <p className="m-b-40">
                    {bannerTop.content}
                   </p>
                   <p>
                     <a className="btn hvr-hover" href="#">
                       Shop New
                     </a>
                   </p>
                 </div>
               </div>
             </div>
           </li>

          ))}
         
          {/* <li className="text-center">
            <img src="images/banner-02.jpg" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="m-b-20">
                    <strong>
                      Welcome To <br />
                      Thewayshop
                    </strong>
                  </h1>
                  <p className="m-b-40">
                    See how your users experience your website in realt=""ime or
                    view
                    <br />
                    trends to see any changes in performance over time.
                  </p>
                  <p>
                    <a className="btn hvr-hover" href="#">
                      Shop New
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="text-right">
            <img src="images/banner-03.jpg" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="m-b-20">
                    <strong>
                      Welcome To <br />
                      Thewayshop
                    </strong>
                  </h1>
                  <p className="m-b-40">
                    See how your users experience your website in realt=""ime or
                    view
                    <br />
                    trends to see any changes in performance over time.
                  </p>
                  <p>
                    <a className="btn hvr-hover" href="#">
                      Shop New
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li> */}
        </ul>
        <div className="slides-navigation">
          <a href="#" className="next">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
          <a href="#" className="prev">
            <i className="fa fa-angle-left" aria-hidden="true" />
          </a>
        </div>
      </div>
      {/* End Slider */}
      {/* Start Categories  */}
      <div className="categories-shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img
                  className="img-fluid"
                  src="images/t-shirts-img.jpg"
                  alt=""
                />
                <a className="btn hvr-hover" href="#">
                  T-shirts
                </a>
              </div>
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/shirt-img.jpg" alt="" />
                <a className="btn hvr-hover" href="#">
                  Shirt
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/wallet-img.jpg" alt="" />
                <a className="btn hvr-hover" href="#">
                  Wallet
                </a>
              </div>
              <div className="shop-cat-box">
                <img
                  className="img-fluid"
                  src="images/women-bag-img.jpg"
                  alt=""
                />
                <a className="btn hvr-hover" href="#">
                  Bags
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/shoes-img.jpg" alt="" />
                <a className="btn hvr-hover" href="#">
                  Shoes
                </a>
              </div>
              <div className="shop-cat-box">
                <img
                  className="img-fluid"
                  src="images/women-shoes-img.jpg"
                  alt=""
                />
                <a className="btn hvr-hover" href="#">
                  Women Shoes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Categories */}
      {/* Start Products  */}
      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Featured Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".top-featured">Top featured</button>
                  <button data-filter=".best-seller">Best seller</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row special-list">
            <div className="col-lg-3 col-md-6 special-grid best-seller">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-01.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                    <a className="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5>$7.79</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid top-featured">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="new">New</p>
                  </div>
                  <img
                    src="images/img-pro-02.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                    <a className="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5>$9.79</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid top-featured">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-03.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                    <a className="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5>$10.79</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid best-seller">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <div className="type-lb">
                    <p className="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-04.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="mask-icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i className="fas fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i className="fas fa-sync-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                    <a className="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div className="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5>$15.79</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Products  */}
      {/* Start Blog  */}
      <div className="latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>latest blog</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img className="img-fluid" src="images/blog-img.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <div className="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul className="option-blog">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Likes"
                      >
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Views"
                      >
                        <i className="fas fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Comments"
                      >
                        <i className="far fa-comments" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="images/blog-img-01.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-content">
                  <div className="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul className="option-blog">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Likes"
                      >
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Views"
                      >
                        <i className="fas fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Comments"
                      >
                        <i className="far fa-comments" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="images/blog-img-02.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-content">
                  <div className="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul className="option-blog">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Likes"
                      >
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Views"
                      >
                        <i className="fas fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Comments"
                      >
                        <i className="far fa-comments" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog  */}
      {/* Start Instagram Feed  */}
      <div className="instagram-box">
        <div className="main-instagram owl-carousel owl-theme">
          { banners.map((banner,index) =>(
          <div className="item">
            <div className="ins-inner-box">
              <img src={banner.image} style={styleImage} alt="" />
              <div className="hov-in">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
))}

        </div>
      </div>
        
        
        </>
     );
}
 
export default Layouts ;