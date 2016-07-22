define([], function () {

    // controller
    return ['$scope','$$map','$$changeTopTab','$$receiveLeftTab',function($scope,$$map,$$changeTopTab,$$receiveLeftTab){

        $scope.orderList = [
            "msg1",
            "msg2"
        ];

        $scope.currTab = 'msg1';

        $scope.changeTab = function(currTab){
            $scope.currTab = currTab;

            switch ($scope.currTab){
                case "msg1" : $$map($scope,'right','msg','msg1');
                    break;
                case "msg2" : $$map($scope,'right','msg','msg2');
                    break;
            }
        };

        //发送当前选择项给父视图
        $$changeTopTab($scope,'msg');

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