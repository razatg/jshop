import React from 'react';
import Layout from '../../../components/Layout'
import ProductList from '../../../components/ProductList';
import firebase from '../../../init/firebase';
import Footer from '../../../components/Footer'
import {decryptData} from '../../../helpers/crypto'
var Shops  = (props) => {
    const title = props.shopDetails ? `${props.shopDetails.shopName} in ${props.shopDetails.city} :JiffShop` : "Welcome to JiffShop.com"; 
    const desc = props.shopDetails ? `Shop near you for ${props.shopDetails.category} products products at best prices at ${props.shopDetails.shopName} at ${props.shopDetails.shopAddress}. Check for best prices Now!` : "Find Prooducts at best prices in a shop near you";
    return(
        <Layout title={title} desc={desc}>
            <ProductList id = {props.shopId} details={props}/>
            <Footer></Footer>
        </Layout>
    );
}


Shops.getInitialProps = async ({ query , req}) => {
    var shopDetails = {};
    var shopId = decryptData(query.id.split("-").pop())
    await firebase.database().ref(`/entity/${shopId}`).once('value').then((snapshot) => {
        let shopDetailObj = snapshot.val();
        for (let [key, value] of Object.entries(shopDetailObj)) {
            shopDetails['shopName'] = value.shopName;
            shopDetails['shopAddress'] = value.shopAddress;
            shopDetails['pinCode'] = value.pinCode;
            shopDetails['city'] = value.city;
            shopDetails['category'] = value.category;
            shopDetails['slug'] = value.slug;
        }
    }).catch((error) => console.log(error));

    var productDetails = [];
    await firebase.database().ref(`/shop/${shopId}`).orderByChild('timeStamp').once('value').then( (snapshot) => {
        snapshot.forEach((child ) => {
            let obj = {}
            obj = child.val()
            obj["pushKey"] = child.key
            productDetails.push(obj)
        });
    });
    productDetails.reverse();
    return {shopDetails : shopDetails, 
            productDetails : productDetails,
            shopId : shopId , 
            footerId : query.id,
            host : req.headers.host}
};


export default Shops;