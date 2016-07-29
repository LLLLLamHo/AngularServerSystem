/**
 * Created by Administrator on 2016/7/29.
 */
/**
 * Created by Administrator on 2016/7/29.
 */
/**
 * Created by Administrator on 2016/7/25.
 */
define([],function(){
    return ['$scope','$sce','$$changeLeftTab',function($scope,$sce,$$changeLeftTab) {
        $$changeLeftTab($scope, 'alert');

        $scope.title = 'alert警告框';

        $scope.alerts = [
            { type: 'danger', msg: 'this is danger.' },
            { type: 'success', msg: 'this is success.' },
            { type: 'info', msg: 'this is info.' },
            { type: 'warning', msg: 'this is warning.' },
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: 'Another alert!'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


        $scope.hasShow = true;
        $scope.showSingeAlert = function(){
            $scope.hasShow = true;
        };
        $scope.closeSingeAlert = function(){
            $scope.hasShow = false;
        }
    }]
});