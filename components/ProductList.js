import Link from 'next/link';
import { encryptData } from '../helpers/crypto';
import {useEffect, useState} from 'react';
import { fixedFooter, search } from '../helpers/commonUtils';


const ProductList = (props) =>{
    const { shopDetails ,productDetails, host, q } = props.details;
    const shopId = encryptData(props.id);
    const shopUrl = `/shop/${shopDetails.slug}-${shopId}`;
    const [state, setState] = useState({
      productDetails: productDetails
    });
    useEffect(() => {
       fixedFooter()
     },[]);

     function handleChange(e) {
       let newList = []
       if(e.target.value == ""){
          newList = productDetails
       }else{
        newList = search(productDetails , e.target.value)
       }
      setState({
        productDetails: newList
      });
    }

    function qSearch(q) {
        let newList = []
        if (q == "") {
            newList = productDetails
        } else {
            newList = search(productDetails, q)
        }
        setState({
            productDetails: newList
        });
    }

   
     
    return(
      <div>
      <section className="header-section-inner">
        <div className="container">
           <div className="row">
              <div className="col-xs-12">
                 <header>
                    <a href={shopUrl}><img src="../static/img/jiffshop.svg" alt="logo"/></a>
                    <div className="search-container">
                                    <input className="form-control form-control-lg form-control-borderless" type="text" placeholder="Search products"  onChange={handleChange}/>
                        <button type="submit">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
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
              {state.productDetails.length ? 
              state.productDetails.map(item => {
                const ee = state.productDetails
                const isLive = item.isLive ;
                const title = item.productTitle ? item.productTitle.replace(/\s+/g, '-') : "";
                const detailURL = `${shopDetails.slug}-${shopId}/${title}`;
                const whatsAppURL = `https://wa.me/91${props.id}?text=I'm%20interested%20in%20this%20product,%20best%20price%20please%20-https://${host}${shopUrl}/${title}?pId=${item.pushKey}`
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
                                        {item.dealPrice ? (
                                        <div className="col-xs-6 pl-0 pr-0">


                                        <h6 className="current-mrp">Rs. <span className="text-danger">{ item.dealPrice}</span> </h6>
                                        </div>) :( 
                                        null
                                      )}
                                        
                                        <div className="col-xs-6 pl-0 pr-0">
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
                }) : `Could not find the product you were looking for! Browse All Products ${shopDetails.shopName}, ${shopDetails.city}`}
              </div>
          </div>
      </section>
      <section>
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="footer-inner text-center details">
                    <div className="mtop"></div>
                    <h1 class="sold-by">Sold By:</h1>
                      <h2>{shopDetails.shopName}</h2>
                      <h3>{shopDetails.shopAddress}</h3>
                      <h3>{shopDetails.city} {shopDetails.pinCode}</h3>
                      <Link href={shopUrl}><a className="view-all-shop">View All Products in Shop</a></Link>
                  </div>
                  <div className="mtop"></div>
              </div>
            </div>
        </div>
      </section>
    </div>
    );
    
}

var closeNav = function(){}
export default ProductList;