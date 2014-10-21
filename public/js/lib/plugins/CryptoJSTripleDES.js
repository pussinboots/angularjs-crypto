'use strict';
function CryptoJSTripleDES(mode, padding) {
    return new CryptoJSCipher(mode, padding, CryptoJS.TripleDES)
}
