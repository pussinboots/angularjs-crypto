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
 
	beforeEach(module('angularjs-crypto', function ($httpProvider) {
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

    beforeEach(module('angularjs-crypto'));


    describe('ConfigCtrl', function () {
        var scope, $httpBackend, rootScope;

	beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
	    rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(ConfigCtrl, {$scope: scope});
        }));

        it('decode simple json by field name that ends with _enc', function () {
            $httpBackend.expectGET('/assets/config').respond(200,{	items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	}, {'content-type': 'application/json'});
	    rootScope.$digest();
	    $httpBackend.flush();
            expect(scope.configs).toEqualData({items : [ { name_enc : 'COMMERZBANK AG', value_enc : '1504.75', plain : 'Hallo' } ], count : 1} );
        });

	it('decode complex json by field name that ends with _enc', function () {
            $httpBackend.expectGET('/assets/config').respond(200,
		{	items:[	{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
				{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}	],
			count:3
		},  {'content-type': 'application/json'}
	);
	    rootScope.$digest();
	    $httpBackend.flush();
            expect(scope.configs).toEqualData({items : [ { name_enc : 'COMMERZBANK AG', value_enc : '1504.75', plain : 'Hallo' },
							{ name_enc : 'COMMERZBANK AG', value_enc : '1504.75', plain : 'Hallo' },
							{ name_enc : 'COMMERZBANK AG', value_enc : '1504.75'} ], count : 3} );
        });
    });

});
