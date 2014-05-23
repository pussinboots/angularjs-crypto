var myAppDev = angular.module('angularjs-crypto-e2e', ['angularjs-crypto', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(),  {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(),  {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', givenProfile()).respond(200);
    /*$httpBackend.whenPOST('/assets/config').respond(function(method, url, data, headers){
	console.log(JSON.parse(data))
	console.log(givenProfile())        
	console.log(JSON.parse(data) == givenProfile())
        return [200, data, {}];
    })*/
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
