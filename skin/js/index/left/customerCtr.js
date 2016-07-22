/**
 * Created by Administrator on 2016/7/21.
 */
define([],function(){
    return ['$scope','$$map','$$changeTopTab','$$receiveLeftTab',function($scope,$$map,$$changeTopTab,$$receiveLeftTab){

        $scope.orderList = [
            "customer1",
            "customer2"
        ];

        $scope.currTab = 'customer1';

        $scope.changeTab = function(currTab){
            $scope.currTab = currTab;

            switch ($scope.currTab){
                case "customer1" : $$map($scope,'right','customer','customer1');
                    break;
                case "customer2" : $$map($scope,'right','customer','customer2');
                    break;
            }
        };

        //发送当前选择项给父视图
        $$changeTopTab($scope,'customer');

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