var phonecatControllers_old = angular.module('phonecatControllers1', []);
var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers_old.controller('PhoneListCtrl1', ['$scope', '$http', function ($scope, $http) {
    $scope.sjpOrder = 'age';

    $http({method: 'GET', url: 'phones/phones.json'}).
        then(
        function successCallBk(response) {
            console.log(response.data);
            $scope.phones = response.data;
        }, function errorCallBk(response) {
            console.log(response);
        });

}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
    //$scope.phoneId = $routeParams.phoneId;

    $http({
        method: 'GET',
        url: 'phones/' + $routeParams.sjpphoneId + '.json'
    }).then(function (response) {
            $scope.phone = response.data;
            $scope.mainImageUrl = response.data.images[0];
        },
        function (response) {

        }
    );

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };

}]);


phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    //$scope.phones = Phone.query();
   // $scope.phones = Phone.query2();
    $scope.phones = Phone.query({phoneId: 'phones'});

   /* var rtn = Phone.query(function() {
        $scope.phones = rtn;
    });*/
    $scope.sjpOrder = 'age';

}]);


phonecatControllers.controller('PhoneDetailCtrl6',['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
   /* $scope.phone = Phone.get({phoneId : $routeParams.phoneId}, function(phone) {
        console.log(phone);
        $scope.mainImageUrl = phone.images[0];
    });*/



    $scope.phone = Phone.get(function(phone) {
        console.log("phone============="+phone);
        $scope.mainImageUrl = phone.images[0];
    });


    //$scope.phone = Phone.get({phoneId : $routeParams.phoneId});
    //console.log($scope.phone.name);
// $scope.mainImageUrl = $scope.phone.images[0];

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };
}]);