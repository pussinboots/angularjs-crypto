'use strict';

function DecodeGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    Data.query({}, function(response){
    	$scope.data=response;
    });
}

function EncodeQueryGetController($scope, Data) {
    $scope.plainQueryParam={name_enc:'COMMERZBANK AG'}
    $scope.data = Data.query({name_enc:'COMMERZBANK AG'}, function(response) {
	//store sended query param in scope
	   $scope.query=response.query;
    });
}

function EncodeFullQueryGetController($scope, Data) {
    $scope.plainQueryParam={name:'COMMERZBANK AG', value:12345, id:12345}
    $scope.data = Data.queryFullCrypt({name:'COMMERZBANK AG', value:12345, id:12345}, function(response) {
	//store sended query param in scope
    	$scope.query=response.query;
    });
}

function EncodeBodyPostController($scope, Data) {
    $scope.data = {
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    };
    $scope.send = Data.saveFullCrypt({
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    }, function(response){
        console.log('respone ' + response);
    });
}

function EmptyController($scope, Empty, Data) {
    $scope.received = Empty.post();
    $scope.data = Data.query()
}

function EncodePostController($scope, Data) {
    $scope.data = {
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    };
    $scope.send = {
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    };
    Data.save($scope.send);
}
