/**
 * Created by George Manov on 6.1.2015 г..
 */
'use strict';

app.controller('HomeController',
    function ($scope, adsService, notifyService, pageSize, defaultImg) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        $scope.reloadAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };

        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.reloadAds();
        $scope.defaultImg = defaultImg;
    }
);
