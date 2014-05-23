'use strict';

String.prototype.endsWith = function(str)
{
    var lastIndex = this.lastIndexOf(str);
    return (lastIndex != -1) && (lastIndex + str.length == this.length);
}

function ConfigCtrl($scope, Config) {
	$scope.configs=Config.query({}); 
}
