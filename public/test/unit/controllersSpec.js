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

        it('should set result of profile response to the scope result variable', function () {
            $httpBackend.expectGET('/assets/config').respond(200,[{name:"XJWoMnnOlSF3tFoU4jn4gg==", value: "l0gZvr5oiHds8nQpqe0Kqg=="}]);
            rootScope.$digest()
            $httpBackend.flush();
            expect(scope.config).toEqualData([{name:"COMMERZBANK AG", value: "1504.75"}]);
        });
    });
});
