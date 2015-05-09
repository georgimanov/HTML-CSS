/**
 * Created by George Manov on 11.1.2015 г..
 */
'use strict';

app.controller('UserEditController',
    function ($scope, $location, townsService, authService, userService, notifyService) {
        $scope.towns = townsService.getTowns();
        $scope.password = {};

        userService.getUserInfo(
            function success(data) {
                $scope.userData = data;
            },
            function error(err) {
                notifyService.showError("Error", err);
            }
        );

        $scope.editProfile = function(params) {
            userService.editProfile( params,
                function success(data) {
                    notifyService.showInfo('Successfully edited profile');
                    $location.path('/user/editProfile');
                },
                function error(err) {
                    notifyService.showError("Profile edit failed", err);
                }
            );
        };

        $scope.changePassword = function(params) {

            userService.changePassword(params,
                function success(data) {
                    notifyService.showInfo('Successfully changed password');
                    $location.path('/user/editProfile');
                },
                function error(err) {
                    notifyService.showError("Could not change password", err);
                }
            );
        };

        $scope.cancel = function () {
            $location.path('/user/ads');
        }
    }
);

