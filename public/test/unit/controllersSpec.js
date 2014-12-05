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


    //TODO is uncommented because check if cryptoHttpInterceptor is registered as http interceptor not working because it is added as anonoums function because that was the only way i know to inject the cfCryptoHttpInterceptor config provider
    /*describe('config: with module callback in beforeEach', function () {

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

    });*/

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
            $httpBackend.expectGET('/assets/config').respond(200, {items: [
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}
            ],
                count: 1
            }, {'Content-Type': 'application/json;charset=utf-8'});
            $httpBackend.expectGET('/data/get/aes').respond(200, {items: [
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}
            ],
                count: 1
            }, {'Content-Type': 'application/json;charset=utf-8'});
            rootScope.$digest();
            $httpBackend.flush();
            expect(scope.data).toEqualData({items: [
                { name_enc: 'COMMERZBANK AG', value_enc: '1504.75', plain: 'Hallo' }
            ], count: 1});
            expect(scope.received).toEqualData({items: [
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}
            ],
                count: 1
            });
        });

        it('decode complex json by field name that ends with _enc', function () {
            $httpBackend.expectGET('/assets/config').respond(200,
                {    items: [
                    {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                    {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                    {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}
                ],
                    count: 3
                }, {'Content-Type': 'application/json;charset=utf-8'}
            );
            $httpBackend.expectGET('/data/get/aes').respond(200,
                {    items: [
                    {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                    {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                    {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}
                ],
                    count: 3
                }, {'Content-Type': 'application/json;charset=utf-8'}
            );
            rootScope.$digest();
            $httpBackend.flush();
            expect(scope.data).toEqualData({items: [
                { name_enc: 'COMMERZBANK AG', value_enc: '1504.75', plain: 'Hallo' },
                { name_enc: 'COMMERZBANK AG', value_enc: '1504.75', plain: 'Hallo' },
                { name_enc: 'COMMERZBANK AG', value_enc: '1504.75'}
            ], count: 3});
            expect(scope.received).toEqualData({    items: [
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}
            ],
                count: 3
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
            $httpBackend.expectPOST('/assets/config', {    items: [
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}
            ],
                count: 1
            }).respond(200);
            rootScope.$digest();
            $httpBackend.flush();
            expect(scope.send).toEqualData({items: [
                {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}
            ],
                count: 1
            });
        });
    });

     describe('empty http responses', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(EmptyController, {$scope: scope});
        }));
	it('reject request with empty data and set content type to application/json', function () {
	    // post request is requested because of empty request data (body)
    	    /*$httpBackend.whenPOST('/assets/empty').respond(200, null,{'content-type': 'application/json;charset=utf-8'});*/
	    $httpBackend.whenGET('/assets/config').respond(200, null,{'content-type': 'application/json;charset=utf-8'});
            rootScope.$digest();
            $httpBackend.flush();
            expect(scope.data).toEqualData({});
            expect(scope.received).toEqualData({});
        });

        it('reject promise by empty response which should be decrypted by service configuration', function () {
            $httpBackend.whenGET('/assets/config').respond(200, null,{'content-type': 'application/json;charset=utf-8'});
            rootScope.$digest();
            $httpBackend.flush();
            expect(scope.data).toEqualData({});
            expect(scope.received).toEqualData({});
        });
    });

    describe('encode query parameters', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(EncodeQueryGetController, {$scope: scope});
        }));

        it('encode query param by field name pattern', function () {
            $httpBackend.expectGET('/data/get/aes?name_enc=XJWoMnnOlSF3tFoU4jn4gg%3D%3D').respond(200, {
                		query: "name_enc=XJWoMnnOlSF3tFoU4jn4gg=="
            	}, 
		{'Content-Type': 'application/json;charset=utf-8'}
	    );
	    rootScope.$digest();
        $httpBackend.flush();
        expect(scope.query).toEqualData('name_enc=XJWoMnnOlSF3tFoU4jn4gg==');
        });
    });

    describe('encode/decode complete request/response body', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(EncodeBodyPostController, {$scope: scope});
        }));

        it('encode post request body', function () {
            $httpBackend.expectPOST('/assets/config','7fF8WOaj2HNvqhnOgvCNWFlxbNFX3N2Fi13ueR/Fe5kT5/pZGp1oVUw+ZYIgv7ST/Ke4+F5/8JXQI87/mpHVlNF6UrYEHrqAnj0gewtcwQ20lf+Kc4aSaXwJN8XJuNYy').respond(200);
            rootScope.$digest();
            $httpBackend.flush();
            expect(scope.send).toEqualData({
		items: [
		    {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
		],
		count: 1
	    });
        });
    });

    describe('encode complete request query params', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(EncodeFullQueryGetController, {$scope: scope});
        }));

        it('encode complete get request query params', function () {
            $httpBackend.expectGET('/assets/config?query=WZM2hwPXWx4%2B7SbaJpUPrh6KZl7c4lqZ%2F67En5tJy8DGTjW%2BmxDV0g8t2UtDklW4f1Ec%2Fmr6hPf2K6V%2BoE%2F21A%3D%3D').respond(200, {
                		query: "WZM2hwPXWx4+7SbaJpUPrh6KZl7c4lqZ/67En5tJy8DGTjW+mxDV0g8t2UtDklW4f1Ec/mr6hPf2K6V+oE/21A=="
                    },
		{'Content-Type': 'application/json;charset=utf-8'}
	    );
	    rootScope.$digest();
        $httpBackend.flush();
        expect(scope.query).toEqualData('WZM2hwPXWx4+7SbaJpUPrh6KZl7c4lqZ/67En5tJy8DGTjW+mxDV0g8t2UtDklW4f1Ec/mr6hPf2K6V+oE/21A==');
        });
    });

});
