'use strict';

String.prototype.endsWith = function(str)
{
    var lastIndex = this.lastIndexOf(str);
    return (lastIndex != -1) && (lastIndex + str.length == this.length);
}

function DecodeGetController($scope, Data) {
	$scope.received=Data.queryNoCrypt();
	$scope.data=Data.query(); 
}

function EncodePostController($scope, Data) {
	$scope.data = {	items:[	{name_enc:"COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}],
			count:1
		}
	$scope.send = {	items:[	{name_enc:"COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}],
			count:1
		}
	Data.save($scope.send)
}

function DisablePostController($scope, Data) {
	$scope.data = {	items:[	{name_enc:"COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}],
			count:1
		}
	$scope.send = {	items:[	{name_enc:"COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}],
			count:1
		}
	Data.save($scope.send)
}
