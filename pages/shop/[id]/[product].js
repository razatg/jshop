import Layout from '../../../components/Layout'
import ProductDetail from '../../../components/ProductDetail';
import {useRouter} from 'next/router';
import firebase from '../../../init/firebase';
import Footer from '../../../components/Footer';
import {decryptData} from '../../../helpers/crypto'
const Product =  (props) => {
    const router = useRouter();
    const pId = router.query.pId;
    const title = props.productDetails ? `${props.productDetails.productTitle} at ${props.shopDetails.shopName}` : "Shops near you at JiffShop.com";
    const desc = props.shopDetails ? `Shop for ${props.productDetails.productTitle} near you from ${props.shopDetails.shopName}. Check for best price Now!` : "Find Prooducts at best prices in a shop near you";
    const productMarkUp = `{"@context": "https://www.schema.org", "@type": "product","name": "${props.productDetails.productTitle}", "description": "Shop for ${props.productDetails.productTitle} near you from ${props.shopDetails.shopName}. Check for best price Now!"}`
    const shopMarkUp = `{"@context": "https://schema.org","@type": "Store", "@id": "${props.shopId}","name": "${props.shopDetails.shopName}","address": {
        "@type": "PostalAddress", "streetAddress": "${props.shopDetails.shopAddress}","addressLocality": "${props.shopDetails.city}","addressRegion": "${props.shopDetails.city}",
        "postalCode": "${props.shopDetails.pinCode}", "addressCountry": "In"},"telephone": "${props.shopDetails.mobile}","openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification","dayOfWeek": ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00","closes": "20:00"}]}`
    
    
    return(
        <Layout title={title} desc={desc} markUp ={productMarkUp} addMarkUp={shopMarkUp}>
            <ProductDetail id = {router.query.id} productDetails={props.productDetails} shopDetails={props.shopDetails} productId={pId} host={props.host} shopId={props.shopId}/>
            <Footer></Footer>
        </Layout>
    );
}

Product.getInitialProps = async ({ query , req }) => {
    let productDetailObj;
    let shopId = decryptData(query.id.split("-").pop());
    await firebase.database().ref(`/shop/${shopId}/${query.pId}`).once('value').then( (snapshot) => {
        productDetailObj = snapshot.val();
    });
    var shopDetails = {};
    await firebase.database().ref(`/entity/${shopId}`).once('value').then((snapshot) => {
        let shopDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(shopDetailObj)) {
            shopDetails['shopName'] = value.shopName;
            shopDetails['shopAddress'] = value.shopAddress;
            shopDetails['mobile'] = value.mobile;
            shopDetails['pinCode'] = value.pinCode;
            shopDetails['city'] = value.city;
            shopDetails['slug'] = value.slug;
        }
    });
    return {productDetails : productDetailObj,
        shopDetails : shopDetails,
        host : req.headers.host,
        footerId : query.id,
        shopId : shopId}
 };

 export default Product