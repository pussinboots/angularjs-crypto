'use strict';

function ConfigCtrl($scope, Config) {
	$scope.config=Config.query({},function(data){
		console.log('success, got data: ', data);
		var base64Key = "16rdKQfqN3L4TY7YktgxBw==";
		console.log( "base64Key = " + base64Key );

		// this is the actual key as a sequence of bytes
		var key = CryptoJS.enc.Base64.parse(base64Key);
		console.log( "key = " + key );
		data = data.map(function(element) {

			// this is the decrypted data as a sequence of bytes
			var decryptedData = CryptoJS.AES.decrypt( element.name, key, {
			    mode: CryptoJS.mode.ECB,
			    padding: CryptoJS.pad.Pkcs7
			} );


			var decryptedName = decryptedData.toString( CryptoJS.enc.Utf8 );
			decryptedData = CryptoJS.AES.decrypt( element.value, key, {
			    mode: CryptoJS.mode.ECB,
			    padding: CryptoJS.pad.Pkcs7
			} );
			console.log( "decryptedData = " + decryptedData );

			// this is the decrypted data as a string
			var decryptedValue = decryptedData.toString( CryptoJS.enc.Utf8 );

			element.name = decryptedName
			element.value = decryptedValue

			element
		})
    console.log('decrypted: ', data);
    data
  }, function(err){
    console.log('error, got data: ', err);
  }); 
}
