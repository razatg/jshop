import {useEffect} from 'react';
import {fixedFooter} from '../helpers/commonUtils'
import Link from 'next/link';

const ProductDetails = (props) => {
  const {shopDetails, productDetails , host} = props;
  const title = productDetails.productTitle ? productDetails.productTitle.replace(/\s+/g, '-') : "";
  const detailURL = `${props.id}/${title}`;
  const whatsAppURL = `https://wa.me/91${props.shopId}?text=I'm%20interested%20in%20this%20product,%20best%20price%20please%20-https://${host}/shop/${detailURL}?pId=${props.productId}`
  const shopUrl = `/shop/${props.id}`;

  useEffect(() => {
    fixedFooter()
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


    <div className="container detail-page-wrapper">
    <div>
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="col-md-12">
            <div className="detail-wrapper">
            
            <div className="preview col-xs-12 col-md-3">
              
              <div className="preview-pic">
                <div className="image"><img src={productDetails.imgSrc} className="img-responsive" /></div>
               
              </div>
             
              
            </div>
            <div className="details col-xs-12 col-md-6">
              <h1 className="product-title">{productDetails.productTitle ? productDetails.productTitle : null}</h1>
              <h2>Available nearby at {shopDetails.shopName}</h2>

              <div className="row">
                {productDetails.dealPrice ? (
                <div className="col-xs-5 col-sm-5 col-md-3 pr-0">
                <h6> Rs. <span className="text-danger">{productDetails.dealPrice}</span> </h6>
                </div>) :( 
                  null
                )}
                
                <div className="col-xs-7 col-sm-7 col-md-9">
                {productDetails.mrp ? (
                <h6><span className="mrp"> MRP {productDetails.mrp} </span></h6>
                ) :( 
                  null
                )}
                </div>
              </div>
              
              
              <div className="shop-now">
                    <a href={whatsAppURL} target="_blank" className="shopNowBtn"> <i className="fa fa-whatsapp" aria-hidden="true"></i>Get Best Price</a>
              </div>
              {productDetails.productDesc ? (<p className="product-description"><span>Description: </span> {productDetails.productDesc}</p>) : (null)}
            </div>

            <div className="details col-xs-12 col-md-3">
            <div className="footer-inner clearfix">
                <div className="footer-inner-wrapper">
                  <h1 className="sold-by">Sold By:</h1>
                  <h2>{shopDetails.shopName}</h2>
                  <h3>{shopDetails.shopAddress}</h3>
                  <h3>{shopDetails.city} {shopDetails.pinCode}</h3>
                  <Link href={shopUrl}><a className="view-all-shop">View All Products in Shop</a></Link>
                </div>
                  
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  </div> 
  </div>
  
)};

var closeNav = function(){}
export default ProductDetails;