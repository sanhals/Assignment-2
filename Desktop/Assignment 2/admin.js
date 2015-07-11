angular.module('myApp', []).controller('userCtrl', function ($scope) {
    $scope.fName = '';
    $scope.lName = '';
    $scope.address = '';
    $scope.city = '';
    $scope.state = '';
    $scope.postalcode = '';
    $scope.phoneno = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.users = [
{ id: 1, fName: 'Tim', lName: "Roth", address: "1711 cudaback Ave PMB", city: "NigraFall", state: "NY", postalcode: "14303", phoneno: "1234567890" },
{ id: 2, fName: 'Kim', lName: "Pim", address: '40 Wellington Court Bringtone Road', city: 'Crawley', state: 'NY', postalcode: '14303', phoneno: "1234567890" },
{ id: 3, fName: 'Peter', lName: "Doe", address: '711 Post St', city: 'San Francisco', state: 'CA', postalcode: '94109', phoneno: "1234567890" },
{ id: 4, fName: 'Jack', lName: "Jones", address: '75 Washington Pl', city: 'New York', state: 'NY', postalcode: '10011', phoneno: "1234567890" },
{ id: 5, fName: 'John', lName: "Smith", address: 'Brooklyn Navy Yard 63 Flushing Ave #300', city: 'Brooklyn', state: 'NY', postalcode: '11205', phoneno: "1234567890" },
{ id: 6, fName: 'Peter', lName: "Raws", address: '333 Adams Street', city: 'Brooklyn', state: 'NY', postalcode: '11201', phoneno: "1234567890" }
];
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.editUser = function (id) {
        if (id == 'new') {
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
            $scope.address = '';
            $scope.city = '';
            $scope.state = '';
            $scope.postalcode = '';
            $scope.phoneno = '';

        } else {
            $scope.edit = false;
            $scope.fName = $scope.users[id - 1].fName;
            $scope.lName = $scope.users[id - 1].lName;
            $scope.address = $scope.users[id - 1].address;
            $scope.city = $scope.users[id - 1].city;
            $scope.state = $scope.users[id - 1].state;
            $scope.postalcode = $scope.users[id - 1].postalcode;
            $scope.phoneno = $scope.users[id - 1].phoneno;
        
        }
    };

    $scope.$watch('passw1', function () { $scope.test(); });
    $scope.$watch('passw2', function () { $scope.test(); });
    $scope.$watch('fName', function () { $scope.test(); });
    $scope.$watch('lName', function () { $scope.test(); });
    $scope.$watch('address', function () { $scope.test(); });
    $scope.$watch('city', function () { $scope.test(); });
    $scope.$watch('state', function () { $scope.test(); });
    $scope.$watch('postalcode', function () { $scope.test(); });
    $scope.$watch('phoneno', function () { $scope.test(); });

    $scope.test = function () {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length || !$scope.address.length || !$scope.city.length || !$scope.state.length 
  || !$scope.postalcode.length || !$scope.phoneno.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
})