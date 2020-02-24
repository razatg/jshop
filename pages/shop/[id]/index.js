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

Shops.getInitialProps = async ({ query }) => {
    var shopDetails = {};
    await firebase.database().ref(`/entity/${query.id}`).once('value').then((snapshot) => {
        let shopDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(shopDetailObj)) {
            shopDetails['shopName'] = value.shopName;
            shopDetails['shopAddress'] = value.shopAddress;
        }
        //console.log(shopDetails);
    }).catch((error) => console.log(error));

    var productDetails = [];
    await firebase.database().ref(`/shop/${query.id}`).once('value').then((snapshot) => {
        let productDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(productDetailObj)) {
            let obj = {value}
            obj["pushKey"] = key
            productDetails.push(obj)
        }
        console.log(productDetails);
    }).catch((error) => console.log(error));
    return {shopDetails : shopDetails, 
            productDetails : productDetails}
};

export default Shops;