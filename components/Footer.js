import Link from 'next/link';

const Footer = (props) => {
    let url = `/shop/${props.shopId}`
    return (
      <div>
      <footer className="footer-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12 col-sm-6">
              <div className="footer-left">
              <Link href={url}><a><i className="fa fa-shopping-cart" />Featured Shops</a></Link>
                <a href="tel:9876543210"><i className="fa fa-phone" /> 9810329329 </a>
                <a href="#"><i className="fa fa-whatsapp" /> Get Support </a>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 col-sm-6">
              <div className="footer-right">
                <h4>NARULAS 6, Prithviraj market,Khan Market New Delhi 110014</h4>
                <p>© 2020 JiffStore.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
}

export default Footer