/**
 * Created by Administrator on 2016/7/25.
 */
define([],function(){
    return ['$scope','$sce','$$changeLeftTab',function($scope,$sce,$$changeLeftTab){
        $$changeLeftTab($scope,'popover');

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

        /**
         * 阿发删除弹框需要使用的DEMO
         * **/
        $scope.afaDemoUrl = 'afaDemo.html';

        $scope.confirm = function(text){
            console.log(text);
            console.log('确认删除');
        };
        $scope.cancel = function(){
            console.log('取消删除');
        };
        /**
         * 阿发改分组弹框需要使用的DEMO
         * **/
        $scope.data = [
            {
                text : "爱死丹尼斯",
                id : "1",
                hasSelect : true
            },
            {
                text : "12313",
                id : "2",
                hasSelect : true
            },
            {
                text : "啊实打实大",
                id : "3",
                hasSelect : false
            },
            {
                text : "四十四四大三四十岁",
                id : "4",
                hasSelect : true
            },
            {
                text : "按时大大撒大大大大大",
                id : "5",
                hasSelect : true
            },
            {
                text : "assassination",
                id : "6",
                hasSelect : false
            },
            {
                text : "1四方达",
                id : "7",
                hasSelect : false
            },
            {
                text : "啊实打实大",
                id : "8",
                hasSelect : false
            },
            {
                text : "四十四四大三四十岁",
                id : "9",
                hasSelect : false
            },
            {
                text : "按时大大撒大大大大大",
                id : "10",
                hasSelect : true
            },
            {
                text : "asassassinationassassinationsassination",
                id : "11",
                hasSelect : true
            },
            {
                text : "1四方达",
                id : "12",
                hasSelect : true
            }
        ];

        $scope.confirm2 = function(){
            console.log('确认删除');
        };
        $scope.cancel2 = function(){
            console.log('取消删除');
        };

    }]
});