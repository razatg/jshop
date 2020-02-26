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
              <i className="fa fa-shopping-cart" />Featured Shops
              <Link href={url}><a>Narula Stationery</a></Link>
              <Link href="#"><a>Dummy Shop1</a></Link>
              <Link href="#"><a>Dummy Shop2</a></Link>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 col-sm-6">
              <div className="footer-right">
                <i className="fa fa-phone" /> 9810329329<br/>
                <a href="#"><i className="fa fa-whatsapp" /> Get Support </a>
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