'use strict';

function DecodeGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    $scope.data = Data.query();
}

function EncodeQueryGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    $scope.plainQueryParam = {name_enc:'COMMERZBANK AG'}
    $scope.data = Data.query({name_enc:'COMMERZBANK AG'}, function(response) {
	$scope.queryParam=$scope.data.$queryParams
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
