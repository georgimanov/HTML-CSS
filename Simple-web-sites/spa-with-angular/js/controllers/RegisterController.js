/**
 * Created by George Manov on 6.1.2015 г..
 */

'use strict';

app.controller('RegisterController',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.userData = {townId: null};

        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showError("Registration successful", err);
                    $location.path('/login');
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);

