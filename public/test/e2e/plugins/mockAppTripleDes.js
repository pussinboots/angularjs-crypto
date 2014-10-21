var myAppDev = angular.module('demoApp-e2e', ['demoApp', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?name_enc=w%2BdTF60Xm%2F26VoKM2gEDTA%3D%3D').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?query=maSq%2B1FVBWfU8QQDSBHRDHeMz526Ar7iFgX4reSHsjfDOv1Kuj7ZRQHzK2XvS3qwffMeGHl7Fo8%3D').respond(givenEncodedWithFieldNames(), {'Content-Type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', '2VUSj+1mFXYT6bPgw/PzBQ5fT9WLj0BbGLqKLG6ghQqdyigFM/oMrgEnrZHbn5i1NDkH+8QBwGB7jHDVZIcfIK6bMhbK49N1FmM8Z8QyUWgP0xwxUPV7neQ6QNW5F7Eb').respond({body:'2VUSj+1mFXYT6bPgw/PzBQ5fT9WLj0BbGLqKLG6ghQqdyigFM/oMrgEnrZHbn5i1NDkH+8QBwGB7jHDVZIcfIK6bMhbK49N1FmM8Z8QyUWgP0xwxUPV7neQ6QNW5F7Eb'}, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', givenProfile()).respond(200);
    $httpBackend.whenPOST('/assets/empty').respond(null, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

//given
function givenProfile() {
    return {    items: [
        {name_enc: "w+dTF60Xm/26VoKM2gEDTA==", value_enc: "QB5mqzB3Zqc=", plain: "Hallo"}
    ],
        count: 1
    }
}

function givenEncodedWithFieldNames() {
    return {    items: [
        {name_enc: "w+dTF60Xm/26VoKM2gEDTA==", value_enc: "QB5mqzB3Zqc=", plain: "Hallo"},
        {name_enc: "w+dTF60Xm/26VoKM2gEDTA==", value_enc: "QB5mqzB3Zqc=", plain: "Hallo"},
        {name_enc: "w+dTF60Xm/26VoKM2gEDTA==", value_enc: "QB5mqzB3Zqc="}
    ],
        count: 3
    }
}
