/**
 * Created by Administrator on 2016/7/25.
 */
define([],function(){
    return ['$scope','$sce',function($scope,$sce){
        $scope.title = 'Popover弹窗';

        $scope.dynamicPopover = {
            content: 'Hello, World!',
            templateUrl : "myPopoverTemplate.html",
            template: $sce.trustAsHtml('<div class="form-group">'+
                      '<label>Popup Title:<input type="text" ng-model="dynamicPopover.title" class="form-control"></label>'+
                      '</div>'),
            title: 'Title'
        };

        $scope.placement = {
            options: [
                'top',
                'top-left',
                'top-right',
                'bottom',
                'bottom-left',
                'bottom-right',
                'left',
                'left-top',
                'left-bottom',
                'right',
                'right-top',
                'right-bottom'
            ],
            selected: 'top'
        };

        $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');


    }]
});