/**
 * Created by Administrator on 2016/7/29.
 */
/**
 * Created by Administrator on 2016/7/25.
 */
define([],function(){
    return ['$scope','$sce','$$changeLeftTab',function($scope,$sce,$$changeLeftTab) {
        $$changeLeftTab($scope, 'accordion');

        $scope.title = 'accordion手风琴';

        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };



    }]
});