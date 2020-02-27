import Link from 'next/link';

const Footer = (props) => {
  let pageUrl = `/shop/${props.footerId}`;
  let homeUrl = props.homeUrl ? `/shop/${props.footerId}` : `/shop/${props.footerId}`;
    return (
      <div>
      <footer className="footer-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12 col-sm-6">
              <div className="footer-left">
                <div className="clearfix">
                <Link href="/"><a className="navbar-brand" href={homeUrl}><img src="/static/img/jiffshop.svg" /></a></Link>
                </div>
              <br/>
              <h6 className="text-white footer-head"><i className="fa fa-shopping-cart" /> Featured Shops</h6>
              <Link href={pageUrl}><a>Narula Stationery</a></Link>
              <Link href="/"><a>Dummy Shop1</a></Link>
              <Link href="/"><a>Dummy Shop2</a></Link> 
              </div>
            </div>
            <div className="col-md-6 col-xs-12 col-sm-6">
              <div className="footer-right">
                <div className="mtop"></div>
                <div className="text-white">
                <i className="fa fa-phone" /> 9810329329<br/>
                </div>
                <div className="text-white">
                <a href="/"><i className="fa fa-whatsapp" /> Get Support </a>
                </div> 
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