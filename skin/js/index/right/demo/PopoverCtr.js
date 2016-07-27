/**
 * Created by Administrator on 2016/7/25.
 */
define([],function(){
    return ['$scope','$sce',function($scope,$sce){
        $scope.title = 'Popover弹窗';

        $scope.dynamicPopover = {
            content: 'Hello, World!',
            templateUrl : "myPopoverTemplate.html",
            template: $sce.trustAsHtml('<span style="margin-right:10px;">123</span>'+
                '<button style="margin-right:10px;" class="btn btn-sm btn-confirm">确认</button>'+
                '<button class="btn btn-sm btn-default">取消</button>'),
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


        $scope.afaDemoUrl = 'afaDemo.html';
    }]
});