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


    beforeEach(module('services'));


    describe('ConfigCtrl', function () {
        var scope, $httpBackend, rootScope;

	beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
	    rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(ConfigCtrl, {$scope: scope});
        }));

        it('fetch encoded data and check that the decoded data are rendered', function () {
            $httpBackend.expectGET('/assets/config').respond(200,{	enc_array:"items",
		items:[{name_enc:"XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}],
		count:1
	});
	    rootScope.$digest();
	    $httpBackend.flush();
            expect(scope.config).toEqualData({ enc_array : 'items', items : [ { name_enc : 'COMMERZBANK AG', value_enc : '1504.75', plain : 'Hallo' } ], count : 1} );
        });
    });
});
