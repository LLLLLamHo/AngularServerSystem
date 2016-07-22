/**
 * Created by Administrator on 2016/7/21.
 */
define([],function(){
    return ['$scope','$$map','$$changeTopTab','$$receiveLeftTab',function($scope,$$map,$$changeTopTab,$$receiveLeftTab){

        $scope.orderList = [
            "goods1",
            "goods2"
        ];

        $scope.currTab = 'goods1';

        $scope.changeTab = function(currTab){
            $scope.currTab = currTab;

            switch ($scope.currTab){
                case "goods1" : $$map($scope,'right','goods','goods1');
                    break;
                case "goods2" : $$map($scope,'right','goods','goods2');
                    break;
            }
        };

        //发送当前选择项给父视图
        $$changeTopTab($scope,'goods');

        //接收当前左边导航的选中项
        $$receiveLeftTab($scope,function(msg){
            $scope.currTab = msg;
        });

        $scope.check = function(currTab){
            if($scope.currTab == currTab) return true;
            return false;
        };

    }]
});