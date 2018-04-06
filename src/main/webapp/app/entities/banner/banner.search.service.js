(function() {
    'use strict';

    angular
        .module('test0403JsApp')
        .factory('BannerSearch', BannerSearch);

    BannerSearch.$inject = ['$resource'];

    function BannerSearch($resource) {
        var resourceUrl =  'api/_search/banners/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
