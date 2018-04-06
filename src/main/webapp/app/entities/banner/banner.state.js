(function() {
    'use strict';

    angular
        .module('test0403JsApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('banner', {
            parent: 'entity',
            url: '/banner?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'test0403JsApp.banner.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/banner/banners.html',
                    controller: 'BannerController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('banner');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('banner-detail', {
            parent: 'banner',
            url: '/banner/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'test0403JsApp.banner.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/banner/banner-detail.html',
                    controller: 'BannerDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('banner');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Banner', function($stateParams, Banner) {
                    return Banner.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'banner',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('banner-detail.edit', {
            parent: 'banner-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/banner/banner-dialog.html',
                    controller: 'BannerDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Banner', function(Banner) {
                            return Banner.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('banner.new', {
            parent: 'banner',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/banner/banner-dialog.html',
                    controller: 'BannerDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                banner: null,
                                describs: null,
                                isdelete: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('banner', null, { reload: 'banner' });
                }, function() {
                    $state.go('banner');
                });
            }]
        })
        .state('banner.edit', {
            parent: 'banner',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/banner/banner-dialog.html',
                    controller: 'BannerDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Banner', function(Banner) {
                            return Banner.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('banner', null, { reload: 'banner' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('banner.delete', {
            parent: 'banner',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/banner/banner-delete-dialog.html',
                    controller: 'BannerDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Banner', function(Banner) {
                            return Banner.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('banner', null, { reload: 'banner' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
