/**
 * Created by Administrator on 2016/7/22.
 */
define([],function(){
    return ['$scope','$rootScope','$$map',function($scope,$rootScope,$$map){

        $scope.goShop = function(){
            $$map($scope,'go','shop');
        };

    }]

});