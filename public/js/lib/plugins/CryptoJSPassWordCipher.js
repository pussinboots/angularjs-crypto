'use strict';
function CryptoJSPassWordCipher(mode, padding, Cipher) {
    var mode = mode;
    var padding = padding;
    var Cipher = Cipher;
    return {
        encode: function(plainValue, password) {
                    if (!plainValue) { return plainValue; }
                    if (password.length<=0) return plainValue;
                    var key = CryptoJS.SHA3(password, { outputLength: 256 });
                    // this is the decrypted data as a sequence of bytes
                    var encryprtedData = Cipher.encrypt(plainValue, key, {
                        mode: mode,
                        padding: padding
                    });
                    //var encryprtedValue = encryprtedData.toString( CryptoJS.enc.Base64);
                    return encryprtedData.toString();
                },
        decode : function(encryptedValue, password) {
                    if (password.length<=0) return encryptedValue;
                    var key = CryptoJS.SHA3(password, { outputLength: 256 });
                    // this is the decrypted data as a sequence of bytes
                    var decryptedData = Cipher.decrypt(encryptedValue, key, {
                        mode: mode,
                        padding: padding
                    });
                    return  decryptedData.toString(CryptoJS.enc.Utf8);
                }
    }
}
