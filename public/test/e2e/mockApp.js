var myAppDev = angular.module('angularjs-crypto-e2e', ['angularjs-crypto', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenProfile());
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

//given
function givenProfile() {
    return [{name:"XJWoMnnOlSF3tFoU4jn4gg==", value: "l0gZvr5oiHds8nQpqe0Kqg=="}]
}
