(function() {
    'use strict';

    angular
        .module('test0403JsApp')
        .controller('TeacherController', TeacherController);

    TeacherController.$inject = ['Teacher', 'TeacherSearch'];

    function TeacherController(Teacher, TeacherSearch) {

        var vm = this;

        vm.teachers = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Teacher.query(function(result) {
                vm.teachers = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            TeacherSearch.query({query: vm.searchQuery}, function(result) {
                vm.teachers = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
