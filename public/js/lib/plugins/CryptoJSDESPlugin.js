'use strict';
function CryptoJSDES(mode, padding) {
    return new CryptoJSCipher(mode, padding, CryptoJS.DES)
}
