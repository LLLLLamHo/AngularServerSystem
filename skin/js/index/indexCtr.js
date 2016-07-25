/**
 * Created by Administrator on 2016/7/22.
 */
define([],function(){
    return ['$scope','$state','$$map','$$receiveTopTab',function($scope,$state,$$map,$$receiveTopTab){

        $scope.currTab = 'msg';

        $scope.changeLeft = function(e){

            var src = e.target;
            if(src.nodeName != "LI")return;
            $scope.currTab = src.getAttribute('data-id');

            switch ($scope.currTab){
                case 'msg' : $$map($scope,'left','msg');
                    break;
                case 'customer' : $$map($scope,'left','customer');
                    break;
                case 'goods' : $$map($scope,'left','goods');
                    break;
                case 'order' : $$map($scope,'left','order');
                    break;
                case 'demo' : $$map($scope,'left','demo');
                    break;
            }
        };

        $scope.loginOut = function(){
            $$map($scope,'back','login');
        };

        $scope.changeShop = function(){
            $$map($scope,'back','shop');
        };

        //接收当前头部导航选中项
        $$receiveTopTab($scope,function(msg){
            $scope.currTab = msg;
        });
    }]
});