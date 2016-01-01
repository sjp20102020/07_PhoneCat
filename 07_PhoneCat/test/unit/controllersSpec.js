'use strict';

/* jasmine specs for controllers go here */
describe('Phonecat controllers with ajax', function () {


    xdescribe('PhoneListCtrl old', function () {
        beforeEach(module('phonecatApp'));


        /*
         //this works if controller is global scope or global namesapce
         it('should create phones model with 3 phones', function () {
         var scope = {};
         var ctrl = new PhoneListCtrl(scope);
         expect(scope.phones.length).toBe(3);
         });*/


        it('should create "phones" model with 3 phones', inject(function ($controller) {
            var scope = {};
            var ctrl = $controller('PhoneListCtrl', {$scope: scope});
            expect(scope.phones.length).toBe(19);

        }));


        xit('should have "nexus s" phone in phones model ', inject(function ($controller) {
            var scope = {};
            var ctrl = $controller('PhoneListCtrl', {$scope: scope});

            var phones = [
                {
                    name: 'Nexus s',
                    snippet: 'Nexus s is Fast',
                    age: 2
                },
                {
                    name: 'Galaxy S6',
                    snippet: 'Galaxu S6 is brilliant',
                    age: 3
                },
                {
                    name: 'Iphone 6',
                    snippet: 'Iphone 6 perfect',
                    age: 1
                },
                {
                    name: 'Nexus Bs',
                    snippet: 'Nexus BS is cool',
                    age: 4
                }]

            //expect(scope.phones[0]).toBe(phones[0]);
            console.log(scope.phones[0]);
            expect(phones).toContain(scope.phones[0]);
            expect(phones).toContain(scope.phones[1]);
            expect(phones).toContain(scope.phones[2]);


        }));


        it('should have default order as newest', inject(function ($controller) {
            var scope = {};
            var ctrl = $controller('PhoneListCtrl', {$scope: scope});
            expect(scope.sjpOrder).toBe('age');


        }));


    });

    xdescribe('PhoneListCtrl with ajax', function () {
        /*
         it('dummy test', function() {
         expect(true).toBe(true);
         });
         */

        var scope, ctrl, $httpBackend;

        //load our app module defitinition before each test
        beforeEach(module('phonecatApp'));

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expect('GET', '/app/phones/phones.json').respond([{
                    name: 'Nexus S'
                }, {
                    name: 'Motorola DROPID'
                }]
            );

            scope = $rootScope.$new();//give a child scope
            ctrl = $controller('PhoneListCtrl', {$scope: scope});


        }));

        it('should have empty phone list before the http calls', function () {
            expect(scope.phones).toBeUndefined();
        });

        it('should create "phones" model with 2 phones after the XHR call 2 ', function () {
            $httpBackend.flush();
            expect(scope.phones).toEqual([
                {
                    name: 'Nexus S'
                }, {
                    name: 'Motorola DROPID'
                }
            ]);
            expect(scope.phones.length).toBe(2);
        });

        it('should have the default value of order model as age', function () {
            expect(scope.sjpOrder).toBe('age');

        });

    });

    beforeEach(module('phonecatApp'));


    /**
     * cannot inject $routeparams
     */
    xdescribe('PhoneDetailCtrl', function(){
        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz'});

            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
        }));


        it('should fetch phone detail', function() {
            expect(scope.phone).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phone).toEqual({name:'phone xyz'});
        });
    });
});
