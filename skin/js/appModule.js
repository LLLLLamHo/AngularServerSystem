
define(['angular','angularAMD','initIndexModule','initIndexRouter','angular-ui-router','angularAnimate'],function(angular,angularAMD,initIndexModule,initIndexRouter){

    var afa = angular.module('afaModule',['ui.bootstrap','ui.router','ngAnimate'],['$httpProvider',function($httpProvider){
        //重定义ng post的方法
        function resetAngularPost($httpProvider){
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            var param = function(obj) {
                var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

                for(name in obj) {
                    value = obj[name];

                    if(value instanceof Array) {
                        for(i=0; i<value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                    else if(value instanceof Object) {
                        for(subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                    else if(value !== undefined && value !== null)
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };

            // Override $http service's default transformRequest
            $httpProvider.defaults.transformRequest = [function(data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];
        }

        resetAngularPost($httpProvider);
    }]);



    initIndexModule(afa);
    initIndexRouter(afa);

    //请求
    afa.factory('$$ajaxPostServer', ['$http',function($http) {
        var $$ajaxPostServer = function(url,data,callback){
            $http({
                method: 'POST',
                url:url,
                data: data
            }).success(function(response){
                console.log(response);
                console.log("success!");
                if(callback){
                    callback(response);
                }
            }).error(function(){
                console.log("error");
                console.log('异常')
            });
        };
        return $$ajaxPostServer;
    }]);

    /**
     * 切换路由API
     * 参数 scope,type,firstTarget,secondTarget
     * scope 用来传送数据到父级视图 scope == $scope 必须
     * type 用来表示是前进还是返回  go/back/left/right
     *      left/right是为index设计的
     *      left改变的是index里这个视图--渐显效果
     *      right改变的是index里右边的视图--从右进来从右出去效果
     *
     * firstTarget 第一个视图的名称
     * firstTarget == login/shop/index  路由切换到对应的一级视图
     * secondTarget == index下的子级视图名称
     * 如果firstTarget != login/shop/index 则默认以index为一级视图进行跳转
     *
     * 例如 ： firstTarget == msg    secondTarget没有传入
     *          $state.go('index' + firstTarget + 默认的二级视图的子级视图);
     *
     *        firstTarget == msg    secondTarget == msg1
     *          $state.go('index' + firstTarget + secondTarget);
     * **/
    afa.factory('$$map',['$state',function($state){
        return function(scope,type,firstTarget,secondTarget){

            //login
            if(firstTarget == 'login'){
                //判断方式
                if(type === 'go'){

                    scope.$emit('changePageClass','goLogin')

                }else if(type === 'back'){

                    scope.$emit('changePageClass','backLogin')

                }else{

                    console.error('type参数为空！go/back');
                    return false;
                }
                $state.go(firstTarget);

            //shop
            }else if(firstTarget == 'shop'){
                //判断方式
                if(type === 'go'){

                    scope.$emit('changePageClass','goShop')

                }else if(type === 'back'){

                    scope.$emit('changePageClass','backShop')

                }else{

                    console.error('type参数为空！go/back');
                    return false;
                }
                $state.go(firstTarget);

            //index
            }else{
                //进入index页面
                if(firstTarget == 'index' && arguments.length == 3){
                    //判断方式
                    if(type === 'go'){

                        scope.$emit('changePageClass','goIndex')

                    }else if(type === 'back'){

                        scope.$emit('changePageClass','backIndex')

                    }else{

                        console.error('type参数为空！go/back');
                        return false;
                    }
                    $state.go('index.msg.msg1');

                //修改index里右边的视图
                }else if(arguments.length == 4){//跳去指定位置

                    $state.go('index.'+firstTarget+'.'+secondTarget);

                //修改index里左边的视图及左边视图默认的右边视图
                }else if(arguments.length == 3){//没有传secondTarget代表去左边目录默认的右边的模板

                    switch (firstTarget){
                        case 'msg' : $state.go('index.msg.msg1');
                            break;
                        case 'customer' : $state.go('index.customer.customer1');
                            break;
                        case 'goods' : $state.go('index.goods.goods1');
                            break;
                        case 'order' : $state.go('index.order.order1');
                            break;
                        case 'demo' : $state.go('index.demo.model');
                            break;
                    }

                }else if(arguments.length == 0){
                    console.error('请指定跳转目标名字')
                }
            }

        }
    }]);

    /**
     * 更改头部导航选中项
     * **/
    afa.factory('$$changeTopTab',[function(){
        return function(scope,currTab){
            scope.$emit("changeTopTab", currTab);
        }
    }]);

    /**
     * 接收头部导航选中项
     * **/
    afa.factory('$$receiveTopTab',[function(){
        return function(scope,fn){
            scope.$on('changeTopTab',function(event,msg){
                fn(msg);
            })
        }
    }]);

    /**
     * 更改左边选导航中项
     * **/
    afa.factory('$$changeLeftTab',[function(){
        return function(scope,currTab){
            scope.$emit("changeLeftTab", currTab);
        }
    }]);

    /**
     * 接收左边导航选中项
     * **/
    afa.factory('$$receiveLeftTab',[function(){
        return function(scope,fn){
            scope.$on('changeLeftTab',function(event,msg){
                fn(msg);
            })
        }
    }]);


    //删除弹框
    afa.directive('popoverCancel',function(){
        return {
            restrict: "AE",
            priority: 1,
            replace: true,
            scope: {
                'text' : '@text',
                'placement' : '@placement',
                'cancelText' : '@cancelText',
                'confirm' : '&',
                'cancel' : '&',
                'hasConfirmClosePop' : '@hasConfirmClosePop',
                'hasCancelClosePop' : '@hasCancelClosePop',
                'popWidth' : '@popWidth'
            },
            templateUrl: '../skin/js/directive/popoverCancel/popoverCancel.html',
            controller: ['$scope', '$sce', '$timeout', function ($scope, $sce, $timeout) {

                console.log($scope);

                //弹框的位置
                $scope.style = {
                    top: 0,
                    left: 0,
                    display: 'none',
                    width : '236px',
                    opacity: 0
                };

                //点击其他元素时关闭其他已经打开的弹框
                function close(event){
                    var target = event.target;
                    //如果点击的是带有notCloseElement属性的元素则不会关闭
                    if(target.getAttribute('notCloseElement') != null){
                        return;
                    }
                    $scope.style.opacity = '0';
                    $timeout(function(){
                        $scope.style.display = 'none';
                        //关闭以后取消事件
                        (function(){
                            document.body.removeEventListener('click',close);
                        })()
                    },100)
                }

                //点击切换显示按钮
                $scope.togglePopover = function (e) {
                    var el = e.target || e.srcElement;
                    if(el.nodeName == 'SPAN'){
                        getPlacement($scope.popPlacement, el, function () {
                            if($scope.style.opacity == 1){
                                $timeout(function(){$scope.style.display = 'none';},100)
                            }
                            $scope.style.opacity = $scope.style.opacity == 1 ? 0 : 1;

                            document.body.addEventListener('click',close);

                        });
                    }else{
                        return false;
                    }

                };

                //点击确认按钮事件
                $scope.confirmBtnEvent = function(){
                    //判断是否需要关闭弹框  默认关闭
                    if($scope.hasConfirmClose){
                        $scope.style.opacity = '0';
                        $timeout(function(){
                            $scope.style.display = 'none';
                        },100)
                    }
                    $scope.confirm();
                };

                //点击取消按钮事件
                $scope.cancelBtnEvent = function(){
                    //判断是否需要关闭弹框  默认关闭
                    if($scope.hasCancelClose){
                        $scope.style.opacity = '0';
                        $timeout(function(){
                            $scope.style.display = 'none';
                        },100)
                    }
                    $scope.cancel();
                };

                //根据方向选择
                function getPlacement(placement, el, callback) {
                    if($scope.style.opacity == 1){
                        callback();
                        return false;
                    }else{
                        switch (placement) {
                            case 'top' : setTopPosition(el, callback);
                                break;
                            case 'bottom' : setBottomPosition(el, callback);
                                break;
                            case 'left' : setLeftPosition(el, callback);
                                break;
                            case 'right' : setRightPosition(el, callback);
                                break;
                        }
                    }
                }

                //设置方向为top的定位
                function setTopPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth;
                    $timeout(function(){
                        //设置top
                        $scope.style.top = '-' + pop.offsetHeight + 'px';

                        //设置left
                        var left = elWidth / 2 - pop.offsetWidth/2;

                        $scope.style.left = left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);


                }

                //设置方向为bottom的定位
                function setBottomPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth,
                        elHeight = target.offsetHeight;
                    $timeout(function(){
                        //设置top
                        var top = elHeight;
                        $scope.style.top = top + 'px';

                        //设置left
                        var left = elWidth / 2 - pop.offsetWidth/2;

                        $scope.style.left = left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);

                }

                //设置方向为left的定位
                function setLeftPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth,
                        elHeight = target.offsetHeight;
                    $timeout(function(){
                        //设置top
                        var top = pop.offsetHeight/2 - elHeight/2;
                        $scope.style.top = '-' + top + 'px';

                        //设置left
                        var left = pop.offsetWidth;

                        $scope.style.left = '-' + left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);

                }

                //设置方向为right的定位
                function setRightPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth,
                        elHeight = target.offsetHeight;
                    $timeout(function(){
                        //设置top
                        var top = pop.offsetHeight/2 - elHeight/2;
                        $scope.style.top = '-' + top + 'px';

                        //设置left
                        var left = elWidth;

                        $scope.style.left = left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);

                }


            }],
            compile: function compile(tElement, tAttrs, transclude) {

                return {

                    post: function postLink(scope, iElement, iAttrs, controller) {

                        //默认是点击确认或者删除按钮都会关闭弹框
                        if(typeof(scope.hasConfirmClosePop) == 'undefined' || (scope.hasConfirmClosePop != 'true' || scope.hasConfirmClosePop != 'false')){
                            scope.hasConfirmClose = true;
                        }else{
                            scope.hasConfirmClose = scope.hasConfirmClosePop == 'true' ? true : false;
                        }
                        if(typeof(scope.hasCancelClosePop) == 'undefined' || (scope.hasCancelClosePop != 'true' || scope.hasCancelClosePop != 'false')){
                            scope.hasCancelClose = true;
                        }else{
                            scope.hasCancelClose = scope.hasCancelClosePop == 'true' ? true : false;
                        }
                        //默认宽度是236px 可以设置
                        if(typeof(scope.popWidth) == 'undefined'){
                            scope.style.width = '236px';
                        }else{
                            scope.style.width = scope.popWidth;
                        }
                        //弹框默认方向
                        if(typeof(scope.placement) == 'undefined'){
                            scope.popPlacement = 'top';
                        }else{
                            scope.popPlacement = scope.placement;
                        }
                        //默认删除框提示语
                        if(typeof(scope.cancelText) == 'undefined'){
                            scope.popText = '确认删除吗？';
                        }else{
                            scope.popText = scope.cancelText;
                        }

                    }

                }

            }
        }
    });

    //分组弹框
    afa.directive('popoverGroup',function(){
        return {
            restrict: "AE",
            priority: 1,
            replace: true,
            scope: {
                'text' : '@text',
                'placement' : '@placement',
                'hasConfirmClosePop' : '@hasConfirmClosePop',
                'hasCancelClosePop' : '@hasCancelClosePop',
                'data' : '=data',
                'popWidth' : '@popWidth',
                'confirm' : '&',
                'cancel' : '&'
            },
            templateUrl: '../skin/js/directive/popoverGroup/popoverGroup.html',
            controller: ['$scope', '$sce', '$timeout', function ($scope, $sce, $timeout) {

                console.log($scope);

                //弹框的位置
                $scope.style = {
                    top: 0,
                    left: 0,
                    display: 'none',
                    width : '236px',
                    opacity: 0
                };

                $scope.choice = function(e){
                    var target = e.target;

                };

                //点击其他元素时关闭其他已经打开的弹框
                function close(event){
                    var target = event.target;
                    //如果点击的是带有notCloseElement属性的元素则不会关闭
                    if(target.getAttribute('notCloseElement') != null){
                        return;
                    }
                    $scope.style.opacity = '0';
                    $timeout(function(){
                        $scope.style.display = 'none';
                        //关闭以后取消事件
                        (function(){
                            document.body.removeEventListener('click',close);
                        })()
                    },100)
                }

                //点击切换显示按钮
                $scope.togglePopover = function (e) {
                    var el = e.target || e.srcElement;
                    if(el.nodeName == 'SPAN' && el.getAttribute('togglePop') != null){
                        getPlacement($scope.popPlacement, el, function () {
                            if($scope.style.opacity == 1){
                                $timeout(function(){$scope.style.display = 'none';},100)
                            }
                            $scope.style.opacity = $scope.style.opacity == 1 ? 0 : 1;

                            document.body.addEventListener('click',close);

                        });


                    }else{
                        return false;
                    }

                };

                //点击确认按钮事件
                $scope.confirmBtnEvent = function(){
                    //判断是否需要关闭弹框  默认关闭
                    if($scope.hasConfirmClose){
                        $scope.style.opacity = '0';
                        $timeout(function(){
                            $scope.style.display = 'none';
                        },100)
                    }
                    $scope.confirm();
                };

                //点击取消按钮事件
                $scope.cancelBtnEvent = function(){
                    //判断是否需要关闭弹框  默认关闭
                    if($scope.hasCancelClose){
                        $scope.style.opacity = '0';
                        $timeout(function(){
                            $scope.style.display = 'none';
                        },100)
                    }
                    $scope.cancel();
                };

                //根据方向选择
                function getPlacement(placement, el, callback) {
                    if($scope.style.opacity == 1){
                        callback();
                        return false;
                    }else{
                        switch (placement) {
                            case 'top' : setTopPosition(el, callback);
                                break;
                            case 'bottom' : setBottomPosition(el, callback);
                                break;
                            case 'left' : setLeftPosition(el, callback);
                                break;
                            case 'right' : setRightPosition(el, callback);
                                break;
                        }
                    }
                }

                //设置方向为top的定位
                function setTopPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth;
                    $timeout(function(){
                        //设置top
                        $scope.style.top = '-' + pop.offsetHeight + 'px';

                        //设置left
                        var left = elWidth / 2 - pop.offsetWidth/2;

                        $scope.style.left = left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);


                }

                //设置方向为bottom的定位
                function setBottomPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth,
                        elHeight = target.offsetHeight;
                    $timeout(function(){
                        //设置top
                        var top = elHeight;
                        $scope.style.top = top + 'px';

                        //设置left
                        var left = elWidth / 2 - pop.offsetWidth/2;

                        $scope.style.left = left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);

                }

                //设置方向为left的定位
                function setLeftPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth,
                        elHeight = target.offsetHeight;
                    $timeout(function(){
                        //设置top
                        var top = pop.offsetHeight/2 - elHeight/2;
                        $scope.style.top = '-' + top + 'px';

                        //设置left
                        var left = pop.offsetWidth;

                        $scope.style.left = '-' + left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);

                }

                //设置方向为right的定位
                function setRightPosition(target, callback) {
                    //先显示出来
                    $scope.style.display = 'block';
                    var pop = angular.element(target).children()[0];
                    var elWidth = target.offsetWidth,
                        elHeight = target.offsetHeight;
                    $timeout(function(){
                        //设置top
                        var top = pop.offsetHeight/2 - elHeight/2;
                        $scope.style.top = '-' + top + 'px';

                        //设置left
                        var left = elWidth;

                        $scope.style.left = left + 'px';
                        $timeout(function () {
                            callback();
                        }, 100);
                    },100);

                }


            }],
            compile: function compile(tElement, tAttrs, transclude) {

                return {

                    post: function postLink(scope, iElement, iAttrs, controller) {

                        //默认是点击确认或者删除按钮都会关闭弹框
                        if(typeof(scope.hasConfirmClosePop) == 'undefined' || (scope.hasConfirmClosePop != 'true' || scope.hasConfirmClosePop != 'false')){
                            scope.hasConfirmClose = true;
                        }else{
                            scope.hasConfirmClose = scope.hasConfirmClosePop == 'true' ? true : false;
                        }
                        if(typeof(scope.hasCancelClosePop) == 'undefined' || (scope.hasCancelClosePop != 'true' || scope.hasCancelClosePop != 'false')){
                            scope.hasCancelClose = true;
                        }else{
                            scope.hasCancelClose = scope.hasCancelClosePop == 'true' ? true : false;
                        }
                        //默认宽度是236px 可以设置
                        if(typeof(scope.popWidth) == 'undefined'){
                            scope.style.width = '236px';
                        }else{
                            scope.style.width = scope.popWidth;
                        }
                        //弹框默认方向
                        if(typeof(scope.placement) == 'undefined'){
                            scope.popPlacement = 'top';
                        }else{
                            scope.popPlacement = scope.placement;
                        }
                    }

                }

            }
        }
    });

    return angularAMD.bootstrap(afa);

});


