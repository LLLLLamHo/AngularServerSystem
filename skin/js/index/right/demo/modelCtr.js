/**
 * Created by Administrator on 2016/7/25.
 */
define([],function(){
    return ['$scope','$$changeLeftTab','$uibModal',function($scope,$$changeLeftTab,$uibModal){
        $scope.title = '模态框的demo';

        $$changeLeftTab($scope,'model');


        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        //模态弹框
        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                template: '<div class="modal-header">'+
                          '<h3 class="modal-title">I\'m a modal!</h3>'+
                          '</div>'+
                          '<div class="modal-body">'+
                          '<ul>'+
                          '<li ng-repeat="item in items">'+
                          '<a href="#" ng-click="changeSelected(item)">{{ item }}</a>'+
                          '</li>'+
                          '</ul>'+
                          'Selected: <b>{{ selected }}</b>'+
                          '</div>'+
                          '<div class="modal-footer">'+
                          '<button class="btn btn-confirm" type="button" ng-click="ok()">OK</button>'+
                          '<button class="btn btn-default" type="button" ng-click="cancel()">Cancel</button>'+
                          '</div>',
                size: size,//--有默认值，可以传入lg，sm
                scope : $scope//--指定scope的范围
            });

            $scope.ok = function () {
                modalInstance.close();
            };

            $scope.cancel = function () {
                modalInstance.dismiss('cancel');
            };

            $scope.selected = 'item1';

            $scope.changeSelected = function(item){
                $scope.selected = item;
            };

            /**
             * 第一个fn代表close()后的触发事件
             * 第二个fn代表dismiss()后的触发事件
             * **/
            modalInstance.result.then(function (selectedItem) {
                console.log('触发close');
            }, function () {
                console.log('触发dismiss');
            });
        };



    }]
});