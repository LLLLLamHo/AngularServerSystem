/**
 * Created by Administrator on 2016/7/21.
 */
define([],function(){
    return ['$scope','$$map','$$changeLeftTab',function($scope,$$map,$$changeLeftTab){
        $scope.title = "this is msg one";

        $$changeLeftTab($scope,'msg1');

        $scope.goOrder2 = function(){
            $$map($scope,'left','order','order2');
        };

    }]
});