(function() {
    'use strict';

    angular
        .module('test0403JsApp')
        .controller('BannerDetailController', BannerDetailController);

    BannerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Banner'];

    function BannerDetailController($scope, $rootScope, $stateParams, previousState, entity, Banner) {
        var vm = this;

        vm.banner = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('test0403JsApp:bannerUpdate', function(event, result) {
            vm.banner = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
