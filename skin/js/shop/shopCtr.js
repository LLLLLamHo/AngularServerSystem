/**
 * Created by Administrator on 2016/7/22.
 */
define([],function(){
    return ['$scope','$$map',function($scope,$$map){

        $scope.shops = [
            '阿发',
            '手机白马',
            '微商城',
            '淘宝',
            '京东',
            '天猫'
        ];

        //返回登陆
        $scope.loginOut = function(){
            $$map($scope,'back','login');
        };

        //去登陆
        $scope.goIndex = function(){
            $$map($scope,'go','index');
        };
    }]
});