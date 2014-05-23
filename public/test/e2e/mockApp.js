var myAppDev = angular.module('angularjs-crypto-e2e', ['angularjs-crypto', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(),  {'content-type': 'application/json'});
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

//given
function givenProfile() {
        return {	items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	}

}

function givenEncodedWithFieldNames() {
    return {	items:[	{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}	],
			count:3
		}
}
