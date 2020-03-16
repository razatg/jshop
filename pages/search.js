import FuzzySearch from 'fuzzy-search';
import prodList from '../static/prodList.json'

export default function About(){
    var searchList = [];

    // prodList.forech()
    
    for (let [key, val] of Object.entries(prodList))  {
        
        if (val.isLive == true) {
            let searchObj = {}
            searchObj['key'] = key;
            searchObj['produtTitle'] = val.productTitle;
            searchObj['prodctDesc'] = val.productDesc;
            searchList.push(searchObj);
        }
        
       
    
        
    }
    //console.log('hayStack',searchList);

    const searchProduct = new FuzzySearch(searchList, ['productTitle', 'producDesc'], {caseSensitive:false});
    console.log('searchResults',searchProduct.search('deli'));


    return(
        <div>
            <p>Search Results for Sail:{} </p>
        </div>
    );

}