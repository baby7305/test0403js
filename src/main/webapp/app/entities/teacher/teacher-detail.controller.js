(function() {
    'use strict';

    angular
        .module('test0403JsApp')
        .controller('TeacherDetailController', TeacherDetailController);

    TeacherDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Teacher', 'Student'];

    function TeacherDetailController($scope, $rootScope, $stateParams, previousState, entity, Teacher, Student) {
        var vm = this;

        vm.teacher = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('test0403JsApp:teacherUpdate', function(event, result) {
            vm.teacher = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
