import Layout from '../../../components/Layout'
import ProductDetail from '../../../components/ProductDetail';
import {useRouter} from 'next/router';
import firebase from '../../../init/firebase';

const Product =  (props) => {
    const router = useRouter();
    const id  = router.query.id;
    return(
        <Layout>
            <ProductDetail id = {id} productDetails={props.productDetails} shopDetails={props.shopDetails}/>
        </Layout>
    );
}

Product.getInitialProps =({ query }) => {
    let productDetailObj;
    firebase.database().ref(`/shop/${query.id}/${query.product}`).on('value' , (snapshot) => {
        productDetailObj = snapshot.val();
    });
    var shopDetails = {};
    firebase.database().ref(`/entity/${query.id}`).on('value' , (snapshot) => {
        let shopDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(shopDetailObj)) {
            shopDetails['shopName'] = value.shopName;
            shopDetails['shopAddress'] = value.shopAddress;
        }
    });
    return {productDetails : productDetailObj,
        shopDetails : shopDetails}
 };

 export default Product