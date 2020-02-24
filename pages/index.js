import Link from 'next/link';
import Layout from '../components/Layout';
//import '../static/style.css';
//import '../static/responsive.css';

export default function Index(){
    return(
        <Layout>
        <title>JIF</title>
        {/* header section start */}
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
                  <p>Get more business by coming in top search results and through sharing on WhatsApp</p>
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
                          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.”</p>
                          <small><strong>Vulputate M., Dolor</strong></small>
                        </div>
                      </div>
                    </div>
                    {/* Quote 2 */}
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-12">
                          <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.”</p>
                          <small><strong>Fringilla A., Vulputate Sit</strong></small>
                        </div>
                      </div>
                    </div>
                    {/* Quote 3 */}
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-12">
                          <p>“Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.”</p>
                          <small><strong>Aenean A., Justo Cras</strong></small>
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
        <footer className="footer-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12 col-sm-6">
                <div className="footer-left">
          
                {/* <Link href='/detail'><a><i className="fa fa-shopping-cart" />Details Page</a></Link> */}
                  <a href="tel:9876543210"><i className="fa fa-phone" /> 9810329329 </a>
                  <a href="mailto:info@jiffstore@gmail.com"><i className="fa fa-envelope" /> info@jiffstore@gmail.com </a>
                  <a>© 2020 JiffShop.com</a>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 col-sm-6">
                <div className="footer-right">
                  <a><i className="fa fa-shopping-cart" />Featured Shops</a>
                  <Link href="/shop/9810015717"><a>NARULAS 6, Prithviraj market,Khan Market New Delhi 110014</a></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Optional JavaScript */}
        </Layout>
    );
}