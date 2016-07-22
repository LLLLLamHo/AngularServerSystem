/**
 * Created by Administrator on 2016/7/21.
 */
define([],function(){
    return ['$scope','$$map','$$changeLeftTab',function($scope,$$map,$$changeLeftTab){
        $scope.title = "this is msg two";
        $$changeLeftTab($scope,'msg2');

        $scope.goGoods2 = function(){
            $$map($scope,'left','goods','goods2');
        };

    }]
});