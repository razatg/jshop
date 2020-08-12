import React from 'react';
import Layout from '../../../components/Layout'
import ProductList from '../../../components/ProductList';
import firebase from '../../../init/firebase';
import Footer from '../../../components/Footer'
import {decryptData} from '../../../helpers/crypto'

var Shops  = (props) => {
    const title = props.shopDetails ? `${props.shopDetails.shopName} in ${props.shopDetails.city} :JiffShop` : "Produucts from Shops near you at JiffShop.com"; 
    const desc = props.shopDetails ? `Shop near you for ${props.shopDetails.category} at best prices from ${props.shopDetails.shopName} located at ${props.shopDetails.shopAddress}. Check for best prices Now!` : "Find Prooducts at best prices in a shop near you";
    const shopMarkUp = `{"@context": "https://schema.org","@type": "Store", "image": ["https://www.jiffshop.com/static/img/jiffshop.svg"], "@id": "${props.shopId}","name": "${props.shopDetails.shopName}","address": {
        "@type": "PostalAddress", "streetAddress": "${props.shopDetails.shopAddress}","addressLocality": "${props.shopDetails.city}","addressRegion": "${props.shopDetails.city}",
        "postalCode": "${props.shopDetails.pinCode}", "addressCountry": "In"},"telephone": "${props.shopDetails.mobile}","openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification","dayOfWeek": ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00","closes": "20:00"}]}`
    
    return(
        <Layout title={title} desc={desc} markUp = {shopMarkUp}>
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
            shopDetails['mobile'] = value.mobile;
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
            if(obj.isLive == true){
                obj["pushKey"] = child.key
                productDetails.push(obj)
            }
        });
    });
    productDetails.reverse();
    var productBatch = [];
        for(var i = 0; i < 50; i++){
            if(productDetails[i] != undefined){
                productBatch.push(productDetails[i])
            }
        }
    return {shopDetails : shopDetails, 
            productDetails : productDetails,
            productBatch : productBatch,
            shopId : shopId , 
            footerId: query.id,
            q:query.q,
            host : req.headers.host}
};

// export async function getServerSideProps({params ,req, query}) {
//     //  console.log("232233233- ", query)
//       var shopDetails = {};
//       var shopId = decryptData(params.id.split("-").pop())
//       await firebase.database().ref(`/entity/${shopId}`).once('value').then((snapshot) => {
//           let shopDetailObj = snapshot.val();
//           for (let [key, value] of Object.entries(shopDetailObj)) {
//               shopDetails['shopName'] = value.shopName;
//               shopDetails['shopAddress'] = value.shopAddress;
//               shopDetails['pinCode'] = value.pinCode;
//               shopDetails['mobile'] = value.mobile;
//               shopDetails['city'] = value.city;
//               shopDetails['category'] = value.category;
//               shopDetails['slug'] = value.slug;
//           }
//       }).catch((error) => console.log(error));
  
//       var productDetails = [];
//       await firebase.database().ref(`/shop/${shopId}`).orderByChild('timeStamp').limitToFirst(200).once('value').then( (snapshot) => {
//           snapshot.forEach((child ) => {
//               let obj = {}
//               obj = child.val()
//               obj["pushKey"] = child.key
//               productDetails.push(obj)
//           });
//       });
//       productDetails.reverse();
//       return {props:{
//                shopDetails : shopDetails, 
//               productDetails : productDetails,
//               shopId : shopId , 
//               footerId: params.id,
//             //  q:query.q,
//               host : req.headers.host
//           }}
//     }

export default Shops;