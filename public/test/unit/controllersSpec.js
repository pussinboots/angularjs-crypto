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


    beforeEach(module('productServices'));


    describe('ProfileCtrl', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            $rootScope.apikey = {access_token: "token"};
            scope = $rootScope.$new();
            $controller(ProfileCtrl, {$scope: scope});
        }));


        it('should set result of profile response to the scope result variable', function () {
            $httpBackend.expectGET('/assets/proxy/{{config.readurl}}identities/me').respond(200, {salutation: 'Dr'});
            rootScope.$digest()
            $httpBackend.flush();
            expect(scope.result).toEqualData({salutation: 'Dr'});
        });
    });

    describe('InBoxCtrl', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            $rootScope.apikey = {access_token: "token"};
            scope = $rootScope.$new();
            $controller(InBoxCtrl, {$scope: scope});
        }));


        it('should fetch all folders and the default folder inbox content', function () {
            $httpBackend.whenGET('/assets/proxy/{{config.readurl}}inbox?limit=10').respond(givenInBoxResponse());
            $httpBackend.whenGET('/assets/proxy/{{config.readurl}}folders').respond(givenFoldersResponse());
            rootScope.$digest();
            $httpBackend.flush();

            expect(scope.folders).toEqualData(givenFoldersResponse());
            expect(scope.mails).toEqualData(givenInBoxResponse());
            expect(scope.mails.info.name).toEqual("Inbox");
        });

        it('should fetch all folders and specified folder "test ordner" content', function () {
            $httpBackend.whenGET('/assets/proxy/{{config.readurl}}inbox?limit=10').respond(givenInBoxResponse());
            $httpBackend.whenGET('/assets/proxy/{{config.readurl}}folders').respond(givenFoldersResponse());
            $httpBackend.whenGET('/assets/proxy/https:%2F%2Fmailbox.api.epost.de%2Ffolders%2F81410c61-c2b1-11e2-bb8f-d48564cd4bac%2Fcontent').respond(givenTestFolderResponse());
            rootScope.$digest();


            var aLink = document.createElement("a");
            aLink.href="https://mailbox.api.epost.de/folders/81410c61-c2b1-11e2-bb8f-d48564cd4bac/content";
            scope.mail(aLink);
            $httpBackend.flush();
            expect(scope.mails).toEqualData(givenTestFolderResponse());
            expect(scope.mails.info.name).toEqual("test ordner");
            expect(scope.mails.info.type).toEqual("USER");
        });

        it('should transform inbox response for ng grid rendering', function () {
            $httpBackend.whenGET('/assets/proxy/{{config.readurl}}inbox?limit=10').respond(givenInBoxResponse());
            $httpBackend.whenGET('/assets/proxy/{{config.readurl}}folders').respond(givenFoldersResponse());
            rootScope.$digest();
            $httpBackend.flush();

            expect(scope.myData).toEqualData([
                {id: 'b02228d0-0617-11e3-970f-d48564cd4bac', Datum: '2013-08-16', Uhrzeit: '04:00:53', Betreff: 'Rechnung E-Postbrief', Absender: 'rechnung@dpdhl.epost.de'}
            ]);
            expect(scope.gridOptions).toEqualData(givenGridOptions());
        });
    });

    //given
    function givenInBoxResponse() {
        return {"info": {
            "name": "Inbox",
            "type": "SYSTEM"
        }, "status": {
            "totalCount": 328,
            "unreadCount": 310
        }, "paging": {
            "currentOffset": 0,
            "currentLimit": 500,
            "_links": {
                "page": {
                    "href": "https://mailbox.api.epost.de/inbox{?offset,limit}",
                    "templated": true
                }
            }
        }, "envelopes": [
            {
                "letterId": "b02228d0-0617-11e3-970f-d48564cd4bac",
                "sender": {
                    "epostAddress": "rechnung@dpdhl.epost.de"
                },
                "recipients": [
                    {
                        "epostAddress": "frank.ittermann@epost.de"
                    }
                ],
                "recipientsInCopy": [],
                "recipientsPrinted": [],
                "sentDate": "2013-08-16T04:00:53+02:00",
                "letterType": {
                    "messageType": "EPB",
                    "systemMessage": false,
                    "senderType": "business",
                    "systemMessageType": "normal"
                },
                "subject": "Rechnung E-Postbrief",
                "read": true,
                "hasAttachments": true,
                "_links": {
                    "letter": {
                        "href": "https://mailbox.api.epost.de/letters/b02228d0-0617-11e3-970f-d48564cd4bac"
                    },
                    "attachments": {
                        "href": "https://mailbox.api.epost.de/letters/b02228d0-0617-11e3-970f-d48564cd4bac/attachments"
                    }
                }
            }
        ]
        }
    }

    function givenTestFolderResponse() {
        return {"info": {
            "name": "test ordner",
            "type": "USER"
        }, "status": {
            "totalCount": 1,
            "unreadCount": 1
        }, "paging": {
            "currentOffset": 0,
            "currentLimit": 500,
            "_links": {
                "page": {
                    "href": "https://mailbox.api.epost.de/folders/81410c61-c2b1-11e2-bb8f-d48564cd4bac",
                    "templated": true
                }
            }
        }, "envelopes": [
            {
                "letterId": "b02228d0-0617-11e3-970f-d48564cd4bab",
                "sender": {
                    "epostAddress": "rechnung@dpdhl.epost.de"
                },
                "recipients": [
                    {
                        "epostAddress": "frank.ittermann@epost.de"
                    }
                ],
                "recipientsInCopy": [],
                "recipientsPrinted": [],
                "sentDate": "2013-08-16T04:00:53+02:00",
                "letterType": {
                    "messageType": "EPB",
                    "systemMessage": false,
                    "senderType": "business",
                    "systemMessageType": "normal"
                },
                "subject": "Rechnung E-Postbrief",
                "read": true,
                "hasAttachments": true,
                "_links": {
                    "letter": {
                        "href": "https://mailbox.api.epost.de/letters/b02228d0-0617-11e3-970f-d48564cd4bab"
                    },
                    "attachments": {
                        "href": "https://mailbox.api.epost.de/letters/b02228d0-0617-11e3-970f-d48564cd4bab/attachments"
                    }
                }
            }
        ]
        }
    }

    function givenFoldersResponse() {
        return {"entries": [
            {
                "folderInfo": {
                    "name": "test ordner",
                    "type": "USER"
                },
                "folderStatus": {
                    "totalCount": 0,
                    "unreadCount": 0
                },
                "entries": [],
                "_links": {
                    "content": {
                        "href": "https://mailbox.api.epost.de/folders/81410c61-c2b1-11e2-bb8f-d48564cd4bac/content{?offset,limit}",
                        "templated": true
                    },
                    "self": {
                        "href": "https://mailbox.api.epost.de/folders/81410c61-c2b1-11e2-bb8f-d48564cd4bac"
                    }
                }
            }
        ]
        }
    }

    function givenGridOptions() {
        return {
            data: 'myData',
            canSelectRows: false,
            showGroupPanel: true,
            columnDefs: [
                { field: "Datum", width: 200},
                { field: "Uhrzeit", width: 100},
                { field: "Betreff", width: 350, cellTemplate: '<a href="#/letter/{{row.entity.id}}" class="thumb">  {{row.entity.Betreff}}  </a>' },
                { field: "Absender", width: 350 }
            ]
        }
    }
});
