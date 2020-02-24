
const ProductDetails = (props) => {
  const {shopDetails, productDetails} = props;
  return(
    <div>
    <section className="header-section-inner">
      <div className="container">
         <div className="row">
            <div className="col-xs-12">
               <header>
                  <img src="/static/img/jiffshop.svg" alt="logo"/>
                  <span  className="open-menu" onClick={openNav}><i className="fa fa-bars" aria-hidden="true"></i></span>
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
              <h1 className="product-title">{productDetails.productTitle}</h1>
              <h2>Available nearby at {shopDetails.shopName}</h2>
              <h6> Deal Price {productDetails.dealPrice} <span> MRP {productDetails.mrp} </span></h6>

              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description"><span>Description: </span> {productDetails.productDesc}</p>

              <div className="shop-now">
                    <a href="detail.html" className="shopNowBtn"> <i className="fa fa-whatsapp" aria-hidden="true"></i>Get Best Price</a>
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

  <footer className="footer-section-inner"> 
      <div className="container">
          <div className="row">
            <div className="col-md-12">
                <div className="footer-inner">
                    <h2>Ocean chemist pharmacy</h2>
                    <h3><i className="fa fa-clock-o" aria-hidden="true"></i>open now</h3>
                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height={300} id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:300px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:100%;}" }} /></div>
                    <p>{shopDetails.shopName} {shopDetails.shopAddress}</p>
                </div>
            </div>
          </div>
      </div>
    </footer>
  </div>
  
)};

var openNav = function(){}
var closeNav = function(){}
export default ProductDetails;