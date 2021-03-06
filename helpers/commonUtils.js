import Fuse from 'fuse.js'
import firebase from '../init/firebase';

export function fixedFooter(){
    $('.footer-section').css('display', 'block');
    $('.footer-section').css('height', 'auto');
    var footerHeight = $('.footer-section').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('.footer-section').css('height', footerHeight);
}

export function search(list , key){
    var searchList = [];
    var newProductList = [];
    let options = {
        shouldSort: true,
      //  threshold: 0.6,
       // location: 0,
      //  distance: 100,
        minMatchCharLength: 1,
        keys: [
          "productTitle",
          "productDesc"
        ]
      };
    for (let [key, val] of Object.entries(list))  {
        
        if (val.isLive == true) {
            let searchObj = {}
            searchObj['pushKey'] = val.pushKey;
            searchObj['cta'] = val.cta;
            searchObj['ctaUrl'] = val.ctaUrl;
            searchObj['data'] = val.data;
            searchObj['dealPrice'] = val.dealPrice;
            searchObj['imgSrc'] = val.imgSrc;
            searchObj['isLive'] = val.isLive;
            searchObj['mrp'] = val.mrp;
            searchObj['productTitle'] = val.productTitle;
            searchObj['productDesc'] = val.productDesc;
            searchObj['timeStamp'] = val.timeStamp;
            searchObj['type'] = val.type;
            searchList.push(searchObj);
        }
     }

    let fuse = new Fuse(searchList, options);
    let result = fuse.search(key);
    result.forEach(item =>{
      newProductList.push(item.item)
    })
    return newProductList

}
export async function fetchMore(productDetails, shopId, counter){
  var newArray = [];
  // await firebase.database().ref(`/shop/${shopId}`).orderByChild('timeStamp').limitToFirst(counter).once('value').then( (snapshot) => {
  //         snapshot.forEach((child ) => {
  //             let obj = {}
  //             obj = child.val()
  //             if(obj.isLive == true){
  //               obj["pushKey"] = child.key
  //               newArray.push(obj)
  //             }
  //         });
  //     });
  for(var i = 0; i < counter; i++){
    if(productDetails[i] != undefined){
      newArray.push(productDetails[i])
    }
  }
     // newArray.reverse()
      return newArray
}

// export async function fetchDataForSearch(shopId){
//   var newArray = [];
//   await firebase.database().ref(`/shop/${shopId}`).orderByChild('timeStamp').once('value').then( (snapshot) => {
//           snapshot.forEach((child ) => {
//               let obj = {}
//               obj = child.val()
//               if(obj.isLive == true){
//                 obj["pushKey"] = child.key
//                 newArray.push(obj)
//               }
//           });
//       });
//      // newArray.reverse()
//       return newArray
// }