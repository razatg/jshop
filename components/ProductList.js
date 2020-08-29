import Link from 'next/link';
import { encryptData } from '../helpers/crypto';
import {useEffect, useState} from 'react';
import { fixedFooter, search , fetchMore ,fetchDataForSearch} from '../helpers/commonUtils';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductList = (props) =>{
    const { shopDetails ,productDetails, productBatch, host, q } = props.details;
    const shopId = encryptData(props.id);
    const shopUrl = `/shop/${shopDetails.slug}-${shopId}`;
    const [state, setState] = useState({
      productDetails: productBatch
    });
    const [counter, setCounter] = useState({
      counter: 100
    });
    const [loader, setLoader] = useState({
      loader: true
    });
    // const [searchData, setSearchData] = useState({
    //   dataToSearch: []
    // });
    useEffect(() => {
       qSearch(q , props.id)
       fixedFooter()
     },[]);

    async function handleChange(e) {
      let textToSearch = e.target.value
      let newList = []
      if(textToSearch == ""){
        newList = state.productDetails
      }else{
      //  let dataObject;
      //  if(searchData.dataToSearch.length == 0){
      //    dataObject = await fetchDataForSearch(props.id);
          // setSearchData({
          //   dataToSearch: dataObject
          // });
          newList = search(props.details.productDetails , textToSearch)
          // setState({
          //   productDetails: newList
          // });
     //   }else{
       //   newList = search(searchData.dataToSearch , textToSearch)
          setState({
            productDetails: newList
          });
        }
    //  }
    }

  async  function qSearch(q ,shopId) {
        let newList = []
        if (q == "" || q == undefined) {
            newList = state.productDetails
        } else {
            newList = search(props.details.productDetails , q)
        }
        setState({
            productDetails: newList
        });
    }
    async function loadMoreData(shopId){
      const data = await fetchMore(props.details.productDetails, shopId, counter.counter);
      setState({
        productDetails: data
      });
      setCounter({
        counter: counter.counter + 50
      });
      setLoader({
        loader: false
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
                                    <input className="form-control form-control-lg form-control-borderless" defaultValue={q} type="text" placeholder="Search products"  onChange={async (e) => {await handleChange(e)}}/>
                        <button type="submit">
                          <i className="fa fa-search" aria-hidden="true"></i>
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

            <InfiniteScroll
              dataLength={state.productDetails.length} //This is important field to render the next data
              next={async () => {await loadMoreData(props.id)}}
              hasMore={true}
              loader={loader.loader}
              style={{overflow : 'hidden'}}
              endMessage={
                <p style={{textAlign: 'center'}}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              >
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
            </InfiniteScroll>
            
          </div>
      </section>
      <section>
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="footer-inner text-center details">
                    <div className="mtop"></div>
                    <h1 className="sold-by">Sold By:</h1>
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