var crypto = require('crypto');

export  function encryptData(key) {
    var mykey = crypto.createCipher('aes-128-cbc', 'params');
    var mystr = mykey.update(key, 'utf8', 'hex');
    mystr = mystr + mykey.final('hex');
    return mystr;
}

export function decryptData (key){
    var mykey = crypto.createDecipher('aes-128-cbc', 'params');
    var mystr = mykey.update(key, 'hex', 'utf8')
    mystr = mystr + mykey.final('utf8');
    return mystr
}