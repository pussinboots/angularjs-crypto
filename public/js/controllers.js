'use strict';

function DecodeGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    $scope.data = Data.query();
}

function EncodeQueryGetController($scope, Data) {
    $scope.received = Data.queryNoCrypt();
    $scope.data = Data.query({name_enc:'COMMERZBANK AG'});
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
