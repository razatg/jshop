import Layout from '../../../components/Layout'
import ProductDetail from '../../../components/ProductDetail';
import {useRouter} from 'next/router';
import firebase from '../../../init/firebase';
import Footer from '../../../components/Footer'; 

const Product =  (props) => {
    const router = useRouter();
    const id  = router.query.id;
    const pId = router.query.pId;
    const title = props.productDetails ? `${props.productDetails.productTitle} at ${props.shopDetails.shopName}` : "Welcome to JiffShop.com";
    const desc = props.shopDetails ? `Shop for ${props.productDetails.productTitle} near you from ${props.shopDetails.shopName}. Check for best price Now!` : "Find Prooducts at best prices in a shop near you";
    return(
        <Layout title={title} desc={desc}>
            <ProductDetail id = {id} productDetails={props.productDetails} shopDetails={props.shopDetails} productId={pId}/>
            {/* <Footer shopId="9810015717"></Footer> */}
        </Layout>
    );
}

Product.getInitialProps = async ({ query }) => {
    let productDetailObj;
    await firebase.database().ref(`/shop/${query.id}/${query.pId}`).once('value').then( (snapshot) => {
        productDetailObj = snapshot.val();
    });
    var shopDetails = {};
    await firebase.database().ref(`/entity/${query.id}`).once('value').then((snapshot) => {
        let shopDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(shopDetailObj)) {
            shopDetails['shopName'] = value.shopName;
            shopDetails['shopAddress'] = value.shopAddress;
            shopDetails['pinCode'] = value.pinCode;
            shopDetails['city'] = value.city;
        }
    });
    return {productDetails : productDetailObj,
        shopDetails : shopDetails}
 };

 export default Product