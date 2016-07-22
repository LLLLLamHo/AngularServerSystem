/**
 * Created by Administrator on 2016/7/21.
 */
define([],function(){
    return ['$scope','$$changeLeftTab',function($scope,$$changeLeftTab){
        $scope.title = "this is goods two";
        $$changeLeftTab($scope,'goods2');

    }]
});