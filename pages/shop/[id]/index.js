import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../../components/Layout'
import ProductList from '../../../components/ProductList';
import {useRouter} from 'next/router';
import firebase from '../../../init/firebase';
import Footer from '../../../components/Footer'
var Shops  = (props) => {
    const router = useRouter();
    const shopId  = router.query.id;
    const title = props.shopDetails ? `${props.shopDetails.shopName} in ${props.shopDetails.city} :JiffShop` : "Welcome to JiffShop.com"; 
    const desc = props.shopDetails ? `Shop near you for ${props.shopDetails.category} products products at best prices at ${props.shopDetails.shopName} at ${props.shopDetails.shopAddress}. Check for best prices Now!` : "Find Prooducts at best prices in a shop near you";
    return(
        <Layout title={title} desc={desc}>
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
            shopDetails['pinCode'] = value.pinCode;
            shopDetails['city'] = value.city;
            shopDetails['category'] = value.category;
        }
    }).catch((error) => console.log(error));

    var productDetails = [];
    await firebase.database().ref(`/shop/${query.id}`).orderByChild('timeStamp').once('value').then( (snapshot) => {
        snapshot.forEach((child ) => {
            let obj = {}
            obj = child.val()
            obj["pushKey"] = child.key
            productDetails.push(obj)
        });
    });
    return {shopDetails : shopDetails, 
            productDetails : productDetails}
};


export default Shops;