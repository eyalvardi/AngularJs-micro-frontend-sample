/**
 * Created by Eyal on 30/03/2017.
 */
import {clientApp} from './clientApp';
import {IFilterService, IHttpService, IScope} from "angular";
import {IState} from "@types/angular-ui-router";


export class ActiveDirectoryCtrl{

    selectedActiveDirectory = null;
    activeDirectoryList     = [];
    deleteAdModalShown      = false;
    selecdtName             = "";
    activeDirectoriesCount  = 0;


    constructor(
        private $scope : IScope,
        private $http : IHttpService,
        private $filter : IFilterService,
        private $state : IState,

        private alertsService,
        private checkStateChangeService,
        private mySavedData,
        private ngTableParams,
        private ajaxErrorsService){

    }

    closeDeleteAdModal() {
        this.deleteAdModalShown = false;
        this.$scope.$apply();
};
    deleteActiveDirectory(){
        var encodedName = encodeURIComponent($scope.selecdtName);
        $http.delete(baseUrl + '/endpoint/' + encodedName)
            .then(function onSuccess(res){
                var data = res.data;
                $scope.adTableParams.reload();
                $scope.deleteAdModalShown = false;
            }, function onError(error){
            });
        $scope.deleteAdModalShown = false;
        $scope.$apply();
};
}

clientApp
    .controller('activeDirectoryCtrl', ['$scope', '$http','$state','alertsService','checkStateChangeService','mySavedData','ngTableParams','$filter','ajaxErrorsService' ,
        function ($scope, $http,$state,alertsService,checkStateChangeService,mySavedData,ngTableParams,$filter,ajaxErrorsService) {
        var baseUrl = '/mvc/activedirectory';
        $scope.selectedActiveDirectory = null;
        $scope.activeDirectoryList = [];
        $scope.deleteAdModalShown = false;
        $scope.selecdtName = "";
        $scope.activeDirectoriesCount = 0;
        $scope.openDeleteAdModal = function(name) {
            $scope.deleteAdModalShown = true;
            $scope.selecdtName = name;
        };
        $scope.closeDeleteAdModal = function() {
            $scope.deleteAdModalShown = false;
            $scope.$apply();
        };
        $scope.deleteActiveDirectory = function(){
            var encodedName = encodeURIComponent($scope.selecdtName);
            $http.delete(baseUrl + '/endpoint/' + encodedName)
                .then(function onSuccess(res){
                    var data = res.data;
                    $scope.adTableParams.reload();
                    $scope.deleteAdModalShown = false;
                }, function onError(error){
                });
            $scope.deleteAdModalShown = false;
            $scope.$apply();
        };
        $scope.adTableParams = new ngTableParams({
            page: 1, // show first page
            total: 1, // value less than count hide pagination
            count: 500,
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            counts: [], // hide page counts control
            total: 1,  // value less than count hide pagination
            getData: function($defer, params) {
                $http.get(baseUrl + '/endpoints')
                    .then(function onSuccess(res){
                        var data = res.data;
                        $scope.activeDirectoryList = data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                        $scope.activeDirectoriesCount = $scope.activeDirectoryList.length;
                        $scope.activeDirectoryList  = $filter('orderBy')($scope.activeDirectoryList, params.orderBy());
                        $defer.resolve($scope.activeDirectoryList);
                        $http.get(baseUrl + '/endpoints/status')
                            .then(function onSuccess(res){
                                var data = res.data;
                                if (data != null && data.length > 0) {
                                    for (var i = 0; i < $scope.activeDirectoryList.length; i++) {
                                        var foundSameComponent = false;
                                        for (var j = 0; j < data.length; j++) {
                                            if ($scope.activeDirectoryList[i].name == data[j].name) {
                                                if (data[j].latest) {
                                                    $scope.activeDirectoryList[i].statusIcon = getStatusIcon(data[j].status);
                                                    $scope.activeDirectoryList[i].statusClass = getStatusClass(data[j].status);
                                                    $scope.activeDirectoryList[i].errorMessageTooltip = !data[j].connected && data[j].errorMessage != null? data[j].errorMessage: "";
                                                    foundSameComponent = true;
                                                }
                                                break;
                                            }
                                        }
                                        if (!foundSameComponent) {
                                            testAdConnection($scope.activeDirectoryList[i]);
                                        }
                                    }
                                } else {
                                    for (var i = 0; i < $scope.activeDirectoryList.length; i++) {
                                        testAdConnection($scope.activeDirectoryList[i]);
                                    }
                                }
                            }, function onError(error){
                                ajaxErrorsService.suppressMessage(error.data);
                            });
                    }, function onError(error){
                        ajaxErrorsService.suppressMessage(error.data);
                    });
            }
        });
        $scope.selectActiveDirectory = function(adName){
            if(angular.isDefined(adName)){
                angular.forEach($scope.activeDirectoryList, function(activeDirectory){
                    if(activeDirectory.name === adName){
                        $scope.selectedActiveDirectory = activeDirectory;
                    }
                });
            }else{
                $scope.selectedActiveDirectory = null;
            }
        };
        $scope.openAddActiveDirectory = function () {
            mySavedData.set('ad', 'add');
            $state.transitionTo('adminSettings.general.activeDirectoryEdit');
        };
        $scope.openEditActiveDirectory = function () {
            mySavedData.set('ad', $scope.selectedActiveDirectory);
            $state.transitionTo('adminSettings.general.activeDirectoryEdit');
        };
        $scope.gotoAdEditState = function gotoAdEditState(adName){
            $state.go('adminSettings.general.activeDirectoryEdit', { adName: adName });
        };
        function getStatusIcon(status) {
            return status == 'GOOD'? 'images/deployment_ok.png': status == 'MEDIUM'? 'images/warning-orange.png': 'images/deployment_error.png';
        }
        function getStatusClass(status) {
            return status == 'MEDIUM'? 'active-directory-medium-status': 'active-directory-status';
        }
        function testAdConnection(activeDirectory) {
            var url = '/mvc/activedirectory/testConnection';
            $http.post(url, activeDirectory)
                .then(function onSuccess(res){
                    var data = res.data;
                    activeDirectory.statusIcon = getStatusIcon(data.status);
                    activeDirectory.statusClass = getStatusClass(data.status);
                    activeDirectory.errorMessageTooltip = !data.connected && data.errorMessage != null? data.errorMessage: "";
                }, function onError(error){
                });
        }
    }]);