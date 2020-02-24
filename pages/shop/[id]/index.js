import Layout from '../../../components/Layout'
import ProductList from '../../../components/ProductList';
import {useRouter} from 'next/router';
import firebase from '../../../init/firebase';

var Shops  = (props) => {
    const router = useRouter();
    const shopId  = router.query.id;
    return(
        <Layout>
            <ProductList id = {shopId} details={props}/>
        </Layout>
    );
}

Shops.getInitialProps =({ query }) => {
    var shopDetails = {};
    firebase.database().ref(`/entity/${query.id}`).on('value' , (snapshot) => {
        let shopDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(shopDetailObj)) {
            shopDetails['shopName'] = value.shopName;
            shopDetails['shopAddress'] = value.shopAddress;
        }
    });

    var productDetails = [];
    firebase.database().ref(`/shop/${query.id}`).on('value' , (snapshot) => {
        let productDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(productDetailObj)) {
            let obj = {value}
            obj["pushKey"] = key
            productDetails.push(obj)
        }
    });
    return {shopDetails : shopDetails, 
            productDetails : productDetails}
};

export default Shops;