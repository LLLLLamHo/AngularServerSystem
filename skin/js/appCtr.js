/**
 * Created by Administrator on 2016/7/20.
 */
define([],function(){
    function initIndexCtr(module){
        module.controller('afaCtr',['$scope',function($scope){

            $scope.pageTarget = 'goLogin';
            $scope.$on('changePageClass',function(event,msg){
                $scope.pageTarget = msg;
            })
        }]);
    }
    return initIndexCtr;
});

