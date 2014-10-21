var myAppDev = angular.module('demoApp-e2e', ['demoApp', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?name_enc=d%2Fjahqgd7BBM1MklteU%3D').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?query=T5X5qoAqlGgv2c1IuecTkg%2FqGqozL6mzBjvH1QenqXrJjjlDF%2FIGMwyyd0ltb%2FUbwCw%3D').respond(givenEncodedWithFieldNames(), {'Content-Type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', 'T5X+v4gixXA3wfknmsMsrRLOOoIxVMzSZVT88TmIjhm99CsxZOUGMxO3OQY5AqNBlnMy0+l8AYN0ejc860+tRUd5ft5Z2XPAE1aEYhaqceXUG+NMUAcB5YQ=').respond({body:'T5X+v4gixXA3wfknmsMsrRLOOoIxVMzSZVT88TmIjhm99CsxZOUGMxO3OQY5AqNBlnMy0+l8AYN0ejc860+tRUd5ft5Z2XPAE1aEYhaqceXUG+NMUAcB5YQ='}, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', givenProfile()).respond(200);
    $httpBackend.whenPOST('/assets/empty').respond(null, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

//given
function givenProfile() {
    return {    items: [
        {name_enc: "d/jahqgd7BBM1MklteU=", value_enc: "BYKn/8N4gw==", plain: "Hallo"}
    ],
        count: 1
    }
}

function givenEncodedWithFieldNames() {
    return {    items: [
        {name_enc: "d/jahqgd7BBM1MklteU=", value_enc: "BYKn/8N4gw==", plain: "Hallo"},
        {name_enc: "d/jahqgd7BBM1MklteU=", value_enc: "BYKn/8N4gw==", plain: "Hallo"},
        {name_enc: "d/jahqgd7BBM1MklteU=", value_enc: "BYKn/8N4gw=="}
    ],
        count: 3
    }
}
