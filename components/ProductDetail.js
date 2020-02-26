import Link from 'next/link';
import {useEffect} from 'react';
import Footer from '../components/Footer';

const ProductDetails = (props) => {
  const {shopDetails, productDetails , host} = props;
  const title = productDetails.productTitle ? productDetails.productTitle.replace(/\s+/g, '-') : "";
  const detailURL = `${props.id}/${title}`;
  const whatsAppURL = `https://wa.me/91${props.id}?text=I'm%20interested%20in%20your%20product%20price%20please%20[http://${host}/shop/${detailURL}?pId=${props.productId}]`
  const shopUrl = `/shop/${props.id}`;

  useEffect(() => {
   // debugger;
   // alert('hello')
    $('.footer-section').css('display', 'block');
    $('.footer-section').css('height', 'auto');
    var footerHeight = $('.footer-section').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('.footer-section').css('height', footerHeight);
  
  
  // $(document).ready(function(){
  //   footerAlign();
  // });
  
  // $( window ).resize(function() {
  //   footerAlign();
  // });
  
  },[]);
  return(
    <div>
    <section className="header-section-inner">
      <div className="container">
         <div className="row">
            <div className="col-xs-12">
               <header>
                  <a href={shopUrl}><img src="/static/img/jiffshop.svg" alt="logo"/></a>
                </header>
            </div>

            <div id="mySidenav" className="sidenav">
              <a href="" className="closebtn" onClick={closeNav}>&times;</a>
              <a href="#">Login</a>
              <a href="#">Products</a>
              <a href="#">Support</a>
              <a href="#">Your Orders</a>
              <a href="#">Login</a>
              <a href="#">Notification</a>
              <a href="#">Setting</a>
              <a href="#">Your Orders</a>
              <a href="#">Login</a>
              <a href="#">Products</a>
              <a href="#">Support</a>
              <a href="#">Your Orders</a>
            </div>
            <div id="main">
            </div>
         </div>
      </div>
    </section>


    <div className="container">
    <div className="">
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="col-md-12">
            <div className="detail-wrapper">
            
            <div className="preview col-xs-12 col-md-4">
              
              <div className="preview-pic">
                <div className="image"><img src={productDetails.imgSrc} className="img-responsive" /></div>
               
              </div>
             
              
            </div>
            <div className="details col-xs-12 col-md-8">
              <h1 className="product-title">{productDetails.productTitle ? productDetails.productTitle : null}</h1>
              <h2>Available nearby at {shopDetails.shopName}</h2>
              {productDetails.dealPrice ? (
                <h6> Deal Price Rs.{productDetails.dealPrice}</h6>
              ) :( 
                null
              )}
              {productDetails.mrp ? (
                <h6><span> MRP {productDetails.mrp} </span></h6>
              ) :( 
                null
              )}
              <div className="shop-now">
                    <a href={whatsAppURL} target="_blank" className="shopNowBtn"> <i className="fa fa-whatsapp" aria-hidden="true"></i>Get Best Price</a>
              </div>
              {productDetails.productDesc ? (<p className="product-description"><span>Description: </span> {productDetails.productDesc}</p>) : (null)}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="container">
        <div className="row">
          <div className="col-md-12">
              <div className="footer-inner">
                  <h2>{shopDetails.shopName}</h2>
                  <h3>{shopDetails.shopAddress}</h3>
                  <h3>{shopDetails.city} {shopDetails.pinCode}</h3>
              </div>
          </div>
        </div>
    </div>
  </section>
  {/* <Footer shopId={"9810015717"}></Footer> */}
  </div>
  
)};

var closeNav = function(){}
export default ProductDetails;