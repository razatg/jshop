import Link from 'next/link';
import {encryptData} from '../helpers/crypto'
import {useEffect} from 'react';
const ProductList = (props) =>{
    const { shopDetails ,productDetails, host } = props.details;
    const shopId = encryptData(props.id);
    const shopUrl = `/shop/${shopId}`;

    useEffect(() => {
       $('.footer-section').css('display', 'block');
       $('.footer-section').css('height', 'auto');
       var footerHeight = $('.footer-section').outerHeight();
       $('body').css('padding-bottom', footerHeight);
       $('.footer-section').css('height', footerHeight);
     },[]);
    return(
      <div>
      <section className="header-section-inner">
        <div className="container">
           <div className="row">
              <div className="col-xs-12">
                 <header>
                    <a href={shopUrl}><img src="../static/img/jiffshop.svg" alt="logo"/></a>
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
                        <h1> All Products {shopDetails.shopName}, {shopDetails.city}</h1>
                    </div>
                </div>
            </div>
            <div className="row product-listing">
              {productDetails ? 
              productDetails.map(item => {
                const isLive = item.isLive ;
                const title = item.productTitle ? item.productTitle.replace(/\s+/g, '-') : "";
                const detailURL = `${shopId}/${title}`;
                const whatsAppURL = `https://wa.me/91${props.id}?text=I'm%20interested%20in%20this%20product,%20best%20price%20please%20-https://${host}/shop/${props.id}/${title}?pId=${item.pushKey}`
                  return (
                    <div>
                      { isLive  ? (
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 zero-m-p">
                              <div className="product-box">
                                <Link href={{pathname: detailURL , query : {pId : item.pushKey}}}><a>
                                  <div className="item">
                                      <img src="/static/img/1X1.png" className="img-fluid hidden-xs" style={{ backgroundImage: `url(${item.imgSrc})`, backgroundSize: "contain", width: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                      <img src="/static/img/1X3.png" className="img-fluid visible-xs" style={{ backgroundImage: `url(${item.imgSrc})`, backgroundSize: "contain", width: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                      <h3> {item.productTitle ? item.productTitle : null}</h3>
                                      <div className="mrp-container">
                                        <div className="col-sm-6">
                                        {item.dealPrice ? (
                                        <h6 className="current-mrp">Rs. <span className="text-danger">{ item.dealPrice}</span></h6>
                                      ) :( 
                                        null
                                      )}
                                        </div>
                                        <div className="col-sm-6">
                                        {item.mrp ? (
                                        <h6 className="act-mrp"><span className="mrp"> MRP {item.mrp} </span></h6>
                                      ) :( 
                                        null
                                      )}
                                        </div>
                                      </div>
                                      
                                      
                                  </div></a>
                                  </Link>
                                  <div className="shop-now"><a href="#">
                                  </a><a href={whatsAppURL} target="_blank" className="shopNowBtn"> <i className="fa fa-whatsapp" aria-hidden="true" />Check Price</a>
                                  </div>
                              </div>
                        </div>
                      ) : ""}
                    </div>
                  )     
                }) : null}
              </div>
          </div>
      </section>
      <section>
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="footer-inner text-center">
                      <h2>{shopDetails.shopName}</h2>
                      <h3>{shopDetails.shopAddress}</h3>
                      <h3>{shopDetails.city} {shopDetails.pinCode}</h3>
                  </div>
                  <div className="mtop"></div>
              </div>
            </div>
        </div>
      </section>
      {/* <Footer shopId={props.id}></Footer> */}
    </div>
    );
}
var closeNav = function(){}
export default ProductList;