'use strict';

function DecodeGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    $scope.data = Data.query();
}

function EncodeQueryGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    var queryParam = {name_enc:'COMMERZBANK AG'}
    $scope.data = Data.query(queryParam);
    $scope.queryParam=$scope.data.params
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
