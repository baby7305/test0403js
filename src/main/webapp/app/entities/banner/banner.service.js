(function() {
    'use strict';
    angular
        .module('test0403JsApp')
        .factory('Banner', Banner);

    Banner.$inject = ['$resource'];

    function Banner ($resource) {
        var resourceUrl =  'api/banners/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
