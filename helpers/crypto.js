var crypto = require('crypto');

const algorithm = 'aes-128-ctr';
//const algorithm = 'aes-128-cbc';

const password = 'q34rty';

export  function encryptData(text) {
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

export function decryptData (text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}