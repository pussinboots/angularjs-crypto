var myAppDev = angular.module('demoApp-e2e', ['demoApp', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?name_enc=AFx0ylylXKZG3Fp1veuO%2Bg%3D%3D').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?query=H8VtqH0%2Bbsbevunuf6RZoEbEQ3NiyajlumOymJd4vsVOenO4cn32JloP9v5L0yuLP0sryWIAzNA%3D').respond(givenEncodedWithFieldNames(), {'Content-Type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', 'O2DvGZe8KL4KqccGVdAz1cJ9f4VIAQLfTBgjJYyLEmZNUdYbuP/jSWc3eaqbJL2tj0iuHbocaW4v9g46mrq1U6if+y4BTrTQrRlMAeNzHQjws+yB0E4yFIEm7WwLBag2').respond({body:'7fF8WOaj2HNvqhnOgvCNWFlxbNFX3N2Fi13ueR/Fe5kT5/pZGp1oVUw+ZYIgv7ST/Ke4+F5/8JXQI87/mpHVlNF6UrYEHrqAnj0gewtcwQ20lf+Kc4aSaXwJN8XJuNYy'}, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', givenProfile()).respond(200);
    $httpBackend.whenPOST('/assets/empty').respond(null, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

//given
function givenProfile() {
    return {    items: [
        {name_enc: "AFx0ylylXKZG3Fp1veuO+g==", value_enc: "kDlxDGGIm2w=", plain: "Hallo"}
    ],
        count: 1
    }

}

function givenEncodedWithFieldNames() {
    return {    items: [
        {name_enc: "AFx0ylylXKZG3Fp1veuO+g==", value_enc: "kDlxDGGIm2w=", plain: "Hallo"},
        {name_enc: "AFx0ylylXKZG3Fp1veuO+g==", value_enc: "kDlxDGGIm2w=", plain: "Hallo"},
        {name_enc: "AFx0ylylXKZG3Fp1veuO+g==", value_enc: "kDlxDGGIm2w="}
    ],
        count: 3
    }
}
