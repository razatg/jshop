import Layout from '../../../components/Layout'
import ProductDetail from '../../../components/ProductDetail';
import {useRouter} from 'next/router';
import firebase from '../../../init/firebase';
import Footer from '../../../components/Footer';
import {decryptData} from '../../../helpers/crypto'
const Product =  (props) => {
    const router = useRouter();
    const pId = router.query.pId;
    const title = props.productDetails ? `${props.productDetails.productTitle} at ${props.shopDetails.shopName}` : "Welcome to JiffShop.com";
    const desc = props.shopDetails ? `Shop for ${props.productDetails.productTitle} near you from ${props.shopDetails.shopName}. Check for best price Now!` : "Find Prooducts at best prices in a shop near you";
    return(
        <Layout title={title} desc={desc}>
            <ProductDetail id = {props.shopId} productDetails={props.productDetails} shopDetails={props.shopDetails} productId={pId} host={props.host}/>
            <Footer footerId={props.footerId}></Footer>
        </Layout>
    );
}

Product.getInitialProps = async ({ query , req }) => {
    let productDetailObj;
    let shopId = decryptData(query.id);
    await firebase.database().ref(`/shop/${shopId}/${query.pId}`).once('value').then( (snapshot) => {
        productDetailObj = snapshot.val();
    });
    var shopDetails = {};
    await firebase.database().ref(`/entity/${shopId}`).once('value').then((snapshot) => {
        let shopDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(shopDetailObj)) {
            shopDetails['shopName'] = value.shopName;
            shopDetails['shopAddress'] = value.shopAddress;
            shopDetails['pinCode'] = value.pinCode;
            shopDetails['city'] = value.city;
        }
    });
    return {productDetails : productDetailObj,
        shopDetails : shopDetails,
        host : req.headers.host,
        footerId : query.id,
        shopId : shopId}
 };

 export default Product