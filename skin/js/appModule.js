
define(['angular','angularAMD','initIndexModule','initIndexRouter','angular-ui-router','angularAnimate'],function(angular,angularAMD,initIndexModule,initIndexRouter){

    var afa = angular.module('afaModule',['ui.router','ngAnimate']);

    initIndexModule(afa);
    initIndexRouter(afa);

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

    return angularAMD.bootstrap(afa);

});


