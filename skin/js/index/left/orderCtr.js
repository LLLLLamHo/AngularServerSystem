define([], function () {

    // controller
    return ['$scope','$$map','$$changeTopTab','$$receiveLeftTab',function($scope,$$map,$$changeTopTab,$$receiveLeftTab){

        $scope.orderList = [
            "order1",
            "order2"
        ];

        $scope.currTab = 'order1';

        $scope.changeTab = function(currTab){
            $scope.currTab = currTab;

            switch ($scope.currTab){
                case "order1" : $$map($scope,'right','order','order1');
                    break;
                case "order2" : $$map($scope,'right','order','order2');
                    break;
            }
        };

        //发送当前选择项给父视图
        $$changeTopTab($scope,'order');

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