var myAppDev = angular.module('demoApp-e2e', ['demoApp', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?name_enc=XJWoMnnOlSF3tFoU4jn4gg%3D%3D').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', givenProfile()).respond(200);
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

//given
function givenProfile() {
    return {    items: [
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}
    ],
        count: 1
    }

}

function givenEncodedWithFieldNames() {
    return {    items: [
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}
    ],
        count: 3
    }
}
