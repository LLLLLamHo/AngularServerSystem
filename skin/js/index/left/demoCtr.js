/**
 * Created by Administrator on 2016/7/21.
 */
define([],function(){
    return ['$scope','$$map','$$changeTopTab','$$receiveLeftTab',function($scope,$$map,$$changeTopTab,$$receiveLeftTab){

        $scope.demoList = [
            "model",
            "pagination",
            "popover",
            "accordion",
            "alert"
        ];

        $scope.currTab = 'model';

        $scope.changeTab = function(currTab){
            $scope.currTab = currTab;

            switch ($scope.currTab){
                case "model" : $$map($scope,'right','demo','model');
                    break;
                case "pagination" : $$map($scope,'right','demo','pagination');
                    break;
                case "popover" : $$map($scope,'right','demo','popover');
                    break;
                case "accordion" : $$map($scope,'right','demo','accordion');
                    break;
                case "alert" : $$map($scope,'right','demo','alert');
                    break;
            }
        };

        //发送当前选择项给父视图
        $$changeTopTab($scope,'demo');

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