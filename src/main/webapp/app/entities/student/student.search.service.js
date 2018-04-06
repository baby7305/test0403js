(function() {
    'use strict';

    angular
        .module('test0403JsApp')
        .factory('StudentSearch', StudentSearch);

    StudentSearch.$inject = ['$resource'];

    function StudentSearch($resource) {
        var resourceUrl =  'api/_search/students/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
