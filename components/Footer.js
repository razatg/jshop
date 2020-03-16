import Link from 'next/link';
import { encryptData} from '../helpers/crypto'
import featuredShops from '../static/featuredShops.json'
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
                <a href="/"><i className="fa fa-home" /> Home<br/></a>
                {/* <Link href="/"><a className="navbar-brand" href={homeUrl}><img src="/static/img/jiffshop.svg" /></a></Link> */}
                </div>
               
              <h6 className="text-white footer-head"><span className="mright-5"><i className="fa fa-shopping-cart" /></span> Featured Shops</h6>
              {featuredShops.map(shop =>{
                let contact = shop.contact ? encryptData(shop.contact) : "";
                let slug = shop.slug ? shop.slug : "";
                let url = shop.slug ? `/shop/${slug}-${contact}` : "/";
                return (
                  <Link href={url}><a>{shop.shopDesc}</a></Link>
                )} )}
              {/* <Link href={`narula-stationary-${encryptData('9810015717')}`}><a>Narula Stationery</a></Link>
              <Link href="/"><a>Dummy Shop1</a></Link>
              <Link href="/"><a>Dummy Shop2</a></Link>  */}
              </div>
            </div>
            <div className="col-md-6 col-xs-12 col-sm-6">
              <div className="footer-right">
                {/* <div className="mtop"></div> */}
                <a className="text-white no-event" href="tel:+919810329329">
                <span className="mright-5"><i className="fa fa-phone" /> </span>9810329329<br/>
                </a>
                <div className="text-white">
                <a href="https://chat.whatsapp.com/BqhW4xEOczbBgBTby7sXiR"><span className="mright-5"><i className="fa fa-whatsapp" /></span> Get Support </a>
                </div>
                <div className="text-white">
                <Link href="/search"><a><span className="mright-5"><i className="fa fa-whatsapp" /></span> Search </a></Link>
                </div>  
                <a href="/" className="no-event"><span className="mright-5"><i className="fa fa-copyright" aria-hidden="true"></i></span> 2020 JiffShop.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
}

export default Footer