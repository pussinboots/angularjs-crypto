'use strict';
function ContentHeaderCheck(headerToCrypt) {
    var headerToCrypt = headerToCrypt;
    return {
        check: function(contentType) {
            var result = false;
            for (var index = 0; index < headerToCrypt.length; index++) {
                result = contentType.beginsWith(headerToCrypt[index]);
                if(result) {return result};
            } 
            return result;
        }
    }
}
