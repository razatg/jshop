import Link from 'next/link';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import firebase from '../init/firebase';
import {useEffect} from 'react';
import {encryptData } from '../helpers/crypto';
import {fixedFooter} from '../helpers/commonUtils';


const Index = function (props) {
  useEffect(() => {
      fixedFooter();
    },[]);

  const title = "Scan Barcodes/QR to create online Shop: JiffShop";
  const desc = "Download the Jiffy App and scan Barcodes/QR of the products in your retail shop, to create your on Website and get more customers and 💰";
  const shopId = `narula-stationary-${encryptData('9810015717')}`;
    return(
        <Layout title={title} desc={desc}>
            {/* header section start */
                /*firebase.analytics().logEvent('select_content', { content_type: 'home' })*/
            }
        <header className="header-section">
          <div className="container">
            <div className="row">
              {/* Static navbar */}
              <nav className="navbar ">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#"><img src="/static/img/jiffshop.svg" /></a>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="active"><a href="#home">Home </a></li>
                      <li><a href="#howWork">How it works</a></li>
                      <li><a href="#testimonial">Testimonial</a></li>
                      <li><a href="#contact">Contact us</a></li>
                      <li><a href="https://play.google.com/store/apps/details?id=com.jiffshop" target="_blank">Download</a></li>
                    </ul>
                  </div>{/*/.nav-collapse */}
                </div>{/*/.container-fluid */}
              </nav>
            </div>
          </div>
        </header>
        {/* header section end */}
        {/* banner-section start */}
        <section className="banner-section" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="banner-text"> 
                  <h1>Just scan your products Barcode/QR and take them Online Instantly</h1>
                  <p>Get your shop’s online address just by scanning Barcodes/QR of the products in your retail shop.</p>
                  <a href="https://play.google.com/store/apps/details?id=com.jiffshop" target="_blank"><i className="fa fa-android" /> Download the App</a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="banner-image">
                  <img src="static/img/bannerimage.png" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner-section end */}
        {/* how-work-section */}
        <section className="how-works-section ptb-90" id="howWork">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title">
                  <h2>How it works<span className="sec-title-border"><span /><span /><span /></span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 ">
                <div className="single-about-box">
                  <i className="fa fa-barcode" aria-hidden="true" />
                  <h4>Scan Barcodes/QR</h4>
                  <p>Just scan Barcodes/QR of your products </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 ">
                <div className="single-about-box active">
                  <i className="fa fa-cart-arrow-down" aria-hidden="true" />
                  <h4>Online Shop</h4>
                  <p>We create your Online Shop</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 ">
                <div className="single-about-box">
                  <i className="fa fa-whatsapp" aria-hidden="true" />
                  <h4>More Business</h4>
                  <p>Get more business by coming in top search results and customers reaching out on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        {/* how-work-section */}
        <section className="testimonial-section ptb-90" id="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title">
                  <h2>Testimonial<span className="sec-title-border"><span /><span /><span /></span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                  {/* Bottom Carousel Indicators */}
                  <ol className="carousel-indicators">
                    <li data-target="#quote-carousel" data-slide-to={0} className="active" />
                    <li data-target="#quote-carousel" data-slide-to={1} />
                    <li data-target="#quote-carousel" data-slide-to={2} />
                  </ol>
                  {/* Carousel Slides / Quotes */}
                  <div className="carousel-inner">
                    {/* Quote 1 */}
                    <div className="item active">
                      <div className="row">
                        <div className="col-sm-12">
                          <p>“Its like magic, just scan Barcodes of your products and they are online just like that!”</p>
                          <small><strong>Jatin Narula, Narula Stationary, Delhi</strong></small>
                        </div>
                      </div>
                    </div>
                    {/* Quote 2 */}
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-12">
                          <p>“Gives us a fighting chnace against the VC funded online pharmacies in our local markets”</p>
                          <small><strong>Mohit Bhatnagar, Lifline Pharamacy, Delhi</strong></small>
                        </div>
                      </div>
                    </div>
                    {/* Quote 3 */}
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-12">
                          <p>“Hamara store online minto meein”</p>
                          <small><strong>Pravesh Sharma, Parvesh General Store, Delhi</strong></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                          
              </div>
            </div>
          </div>    
        </section>
        {/* footer-section */}
        <Footer></Footer>
        {/* Optional JavaScript */}
        </Layout>
    );
}

export default Index;