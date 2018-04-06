(function() {
    'use strict';

    angular
        .module('test0403JsApp')
        .controller('BannerDialogController', BannerDialogController);

    BannerDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Banner'];

    function BannerDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Banner) {
        var vm = this;

        vm.banner = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.banner.id !== null) {
                Banner.update(vm.banner, onSaveSuccess, onSaveError);
            } else {
                Banner.save(vm.banner, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('test0403JsApp:bannerUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
