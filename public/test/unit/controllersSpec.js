'use strict';

/* jasmine specs for controllers go here */
describe('Controllers tests', function () {

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });


    describe('config: with module callback in beforeEach', function () {
	 
	var httpProvider;
 
	beforeEach(module('demoApp', function ($httpProvider) {
	    console.log('BEGIN: module callback');
	    httpProvider = $httpProvider;
	    console.log('END: module callback');
	}));
 
	it('should have added cryptoHttpInterceptor as http interceptor (inject calls module callback before run test)', inject(function () {
	    console.log('BEGIN: it test');
	    expect(httpProvider.interceptors).toContain('cryptoHttpInterceptor');
	    console.log('END: it test');
	}));
 
    });

    beforeEach(module('demoApp'));


    describe('decode GET response', function () {
        var scope, $httpBackend, rootScope;

	beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
	    rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(DecodeGetController, {$scope: scope});
        }));

        it('decode simple json by field name that ends with _enc', function () {
            $httpBackend.expectGET('/assets/config').respond(200,{items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	}, {'Content-Type': 'application/json;charset=utf-8'});
	    $httpBackend.expectGET('/assets/config').respond(200,{items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	}, {'Content-Type': 'application/json;charset=utf-8'});
	    rootScope.$digest();
	    $httpBackend.flush();
            expect(scope.data).toEqualData({items : [ { name_enc : 'COMMERZBANK AG', value_enc : '1504.75', plain : 'Hallo' } ], count : 1} );
	    expect(scope.received).toEqualData({items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	});
        });

	it('decode complex json by field name that ends with _enc', function () {
            $httpBackend.expectGET('/assets/config').respond(200,
		{	items:[	{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}	],
			count:3
		},  {'Content-Type': 'application/json;charset=utf-8'}
	);
	    $httpBackend.expectGET('/assets/config').respond(200,
		{	items:[	{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}	],
			count:3
		},  {'Content-Type': 'application/json;charset=utf-8'}
	);
	    rootScope.$digest();
	    $httpBackend.flush();
            expect(scope.data).toEqualData({items : [ { name_enc : 'COMMERZBANK AG', value_enc : '1504.75', plain : 'Hallo' },
							{ name_enc : 'COMMERZBANK AG', value_enc : '1504.75', plain : 'Hallo' },
							{ name_enc : 'COMMERZBANK AG', value_enc : '1504.75'} ], count : 3} );
	    expect(scope.received).toEqualData({	items:[	{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}	],
			count:3
		});
        });
    });

    describe('encode POST,PUT request', function () {
        var scope, $httpBackend, rootScope;

	beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
	    rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(EncodePostController, {$scope: scope});
        }));

        it('encode simple json post request all fields that end with _enc', function () {
            $httpBackend.expectPOST('/assets/config', {	items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	}).respond(200);
	    rootScope.$digest();
	    $httpBackend.flush();
	    expect(scope.send).toEqualData({items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	});
        });
    });

});
