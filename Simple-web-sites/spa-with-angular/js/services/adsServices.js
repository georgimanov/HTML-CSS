/**
 * Created by George Manov on 6.1.2015 г..
 */

'use strict';

app.constant('defaultImg', 'http://www.paolobugatti.com/img/img-default.png');

app.factory('adsService',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);

app.factory('userAdsService',
    function ($resource, baseServiceUrl) {
        var userAdsService = $resource(
            baseServiceUrl + '/api/user/ads',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getAds: function(params, success, error) {
                return userAdsService.getAll(params, success, error);
            },

            menuAds: function() {
                return true;
            }
        }
    }
);


app.factory('townsService',
    function ($resource, baseServiceUrl) {
        var townsResource = $resource(
            baseServiceUrl + '/api/towns'
        );
        return {
            getTowns: function(success, error) {
                return townsResource.query(success, error);
            }
        };
    }
);

app.factory('categoriesService',
    function ($resource, baseServiceUrl) {
        var categoriesResource = $resource(
            baseServiceUrl + '/api/categories'
        );

        return {
            getCategories: function(success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);
