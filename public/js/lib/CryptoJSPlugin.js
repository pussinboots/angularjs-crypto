//TODO problem with global namespace maybe
function CryptoJSAES(mode, padding) {
    var mode = mode;
    var padding = padding;
    return {
        encode: function(plainValue, base64Key) {
                    var self = this;
                    if (!plainValue) { return plainValue; }
                    if (base64Key.length<=0) return plainValue;
                    //TODO make key configurable
                    //var base64Key = rootScope.baseKey;//"16rdKQfqN3L4TY7YktgxBw==";
                    //console.log( "base64Key = " + base64Key );

                    var key = CryptoJS.enc.Base64.parse(base64Key);
                    // this is the decrypted data as a sequence of bytes
                    var encryprtedData = CryptoJS.AES.encrypt(plainValue, key, {
                        mode: mode, //CryptoJS.mode.ECB,
                        padding: padding //CryptoJS.pad.Pkcs7
                    });

                    //var encryprtedValue = encryprtedData.toString( CryptoJS.enc.Base64);
                    return encryprtedData.toString();
                },
        decode : function(encryptedValue, base64Key) {
                    var self = this;
                    //TODO make key configurable
                    //var base64Key = rootScope.baseKey;//"16rdKQfqN3L4TY7YktgxBw==";
                    //console.log( "base64Key = " + base64Key );
                    if (base64Key.length<=0) return encryptedValue;
                    var key = CryptoJS.enc.Base64.parse(base64Key);
                    // this is the decrypted data as a sequence of bytes
                    var decryptedData = CryptoJS.AES.decrypt(encryptedValue, key, {
                        mode: mode, //CryptoJS.mode.ECB,
                        padding: padding //CryptoJS.pad.Pkcs7
                    });
                    return  decryptedData.toString(CryptoJS.enc.Utf8);
                }
    }
}