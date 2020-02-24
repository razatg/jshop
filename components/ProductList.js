import Link from 'next/link';

const ProductList = (props) =>{
    const { shopDetails ,productDetails } = props.details;
    return(
      <div>
      <section className="header-section-inner">
        <div className="container">
           <div className="row">
              <div className="col-xs-12">
                 <header>
                    <img src="../static/img/jiffshop.svg" alt="logo"/>
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
  

      <section className="product-grid">
          <div className="container">
  
            <div className="row">
              <div className="col-xs-12 col-md-12 zero-m-p">
                    <div className="page-title">
                        <h1> All Products {shopDetails.shopName}, New Delhi</h1>
                    </div>
                </div>
            </div>
            <div className="row product-listing">
              {productDetails ? 
              productDetails.map(item => {
                const isLive = item.value.isLive ;
                const detailURL = `${props.id}/${item.pushKey}`;
                  return (
                    <div>
                      { isLive  ? (
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 zero-m-p">
                          <Link href={detailURL}>
                              <div className="product-box">
                                  <div className="item">
                                      <img src={item.value.imgSrc} className="img-fluid" />
                                      <h3> {item.value.productTitle}</h3>
                                      <h6> Deal Price Rs.{item.value.dealPrice} <span> MRP {item.value.mrp} </span></h6>
                                  </div>
                                  <div className="shop-now"><a href="#">
                                  </a><a href="detail.html" className="shopNowBtn"> <i className="fa fa-whatsapp" aria-hidden="true" />Check Price</a>
                                  <a href="#" className="shareBtn">
                                      <i className="fa fa-share-alt" aria-hidden="true" />
                                  </a>
                                  </div>
                              </div>
                          </Link>
                        </div>
                      ) : ""}
                    </div>
                  )     
                }) : null}
              </div>
          </div>
      </section>
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
    );
}
var openNav = function(){}
var closeNav = function(){}
export default ProductList;