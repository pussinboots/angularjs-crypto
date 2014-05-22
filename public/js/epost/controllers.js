'use strict';

String.prototype.endsWith = function(str)
{
    var lastIndex = this.lastIndexOf(str);
    return (lastIndex != -1) && (lastIndex + str.length == this.length);
}

function ConfigCtrl($scope, Config) {

function isEncoded(element, index, array) {
	  return (element.endsWith('_enc'));
	}

function decode(encryptedValue) {
	var base64Key = "16rdKQfqN3L4TY7YktgxBw==";
	console.log( "base64Key = " + base64Key );

	// this is the actual key as a sequence of bytes
	var key = CryptoJS.enc.Base64.parse(base64Key);
	// this is the decrypted data as a sequence of bytes
	var decryptedData = CryptoJS.AES.decrypt( encryptedValue, key, {
	    mode: CryptoJS.mode.ECB,
	    padding: CryptoJS.pad.Pkcs7
	} );


	var decryptedValue = decryptedData.toString( CryptoJS.enc.Utf8 );
	return decryptedValue
}
	
function walk(events)
  {
    var keys = Object.keys(events);
    for (var i in keys) {
    if (typeof events[keys[i]] === 'object')
        keys = keys.concat(walk(events[keys[i]]))
    }
    return keys.filter(isEncoded)
  }


	$scope.config=Config.query({},function(data){
		console.log('success, got data: ', data);
		var base64Key = "16rdKQfqN3L4TY7YktgxBw==";
		console.log( "base64Key = " + base64Key );

		// this is the actual key as a sequence of bytes
		var key = CryptoJS.enc.Base64.parse(base64Key);
		console.log( "key = " + key );
		var enc_array = data['enc_array']
		var encodedKeys = walk( data);
		console.log("encoded " +encodedKeys)		
		
		console.log(data[enc_array][0].name_enc)
		
		for (var i in data[enc_array]) {
			var item = data[enc_array][i]
			console.log(item)
			for(var y in encodedKeys) {
				console.log(item[encodedKeys[y]])
				item[encodedKeys[y]] = decode(item[encodedKeys[y]])
				console.log(item[encodedKeys[y]])
			}
		}

		/*data = data.map(function(element) {

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
		})*/
    console.log('decrypted: ', data);
    data
  }, function(err){
    console.log('error, got data: ', err);
  }); 
}
