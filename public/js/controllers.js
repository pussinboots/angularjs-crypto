'use strict';

function DecodeGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    $scope.data = Data.query();
}

function EncodeQueryGetController($scope, Data) {
    $scope.data = Data.query({name_enc:'COMMERZBANK AG'}, function(response) {
	//store sended query param in scope
	$scope.queryParam=$scope.data.$queryParams
    });
}

function EncodeFullQueryGetController($scope, Data) {
    $scope.data = Data.queryFullCrypt({name:'COMMERZBANK AG', value:12345, id:12345}, function(response) {
	//store sended query param in scope
	$scope.queryParam=$scope.data.$queryParams
    });
}

function EncodeBodyPostController($scope, Data) {
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
    Data.saveFullCrypt($scope.send);
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
