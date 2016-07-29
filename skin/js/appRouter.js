/**
 * Created by Administrator on 2016/7/20.
 */
define(["angularAMD"],function(angularAMD){
    function initRouter(module){
        module.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){

            $stateProvider
                //login
                .state('login',angularAMD.route({
                    url: "/login",
                    templateUrl: "../tpl/login/login.html",
                    controllerUrl: "../skin/js/login/loginCtr.js"
                }))

                //shop
                .state('shop',angularAMD.route({
                    url: "/shop",
                    templateUrl: "../tpl/shop/shop.html",
                    controllerUrl: "../skin/js/shop/shopCtr.js"
                }))

                //index
                .state('index',angularAMD.route({
                    url: "/index",
                    templateUrl: "../tpl/index/index.html",
                    controllerUrl: "../skin/js/index/indexCtr.js"
                }))

                //消息
                .state("index.msg", angularAMD.route({
                    url: "/msg",
                    templateUrl: "../tpl/index/left/msg.html",
                    controllerUrl: "../skin/js/index/left/msgCtr.js"
                }))
                .state("index.msg.msg1", angularAMD.route({
                    url: "/msg1",
                    templateUrl: "../tpl/index/right/msg/msg1.html",
                    controllerUrl: "../skin/js/index/right/msg/msg1Ctr.js"
                }))
                .state("index.msg.msg2", angularAMD.route({
                    url: "/msg2",
                    templateUrl: "../tpl/index/right/msg/msg2.html",
                    controllerUrl: "../skin/js/index/right/msg/msg2Ctr.js"
                }))

                //客户
                .state("index.customer", angularAMD.route({
                    url: "/customer",
                    templateUrl: "../tpl/index/left/customer.html",
                    controllerUrl: "../skin/js/index/left/customerCtr.js"
                }))
                .state("index.customer.customer1", angularAMD.route({
                    url: "/customer1",
                    templateUrl: "../tpl/index/right/customer/customer1.html",
                    controllerUrl: "../skin/js/index/right/customer/customer1Ctr.js"
                }))
                .state("index.customer.customer2", angularAMD.route({
                    url: "/customer2",
                    templateUrl: "../tpl/index/right/customer/customer2.html",
                    controllerUrl: "../skin/js/index/right/customer/customer2Ctr.js"
                }))

                //商品
                .state("index.goods", angularAMD.route({
                    url: "/goods",
                    templateUrl: "../tpl/index/left/goods.html",
                    controllerUrl: "../skin/js/index/left/goodsCtr.js"
                }))
                .state("index.goods.goods1", angularAMD.route({
                    url: "/goods1",
                    templateUrl: "../tpl/index/right/goods/goods1.html",
                    controllerUrl: "../skin/js/index/right/goods/goods1Ctr.js"
                }))
                .state("index.goods.goods2", angularAMD.route({
                    url: "/goods2",
                    templateUrl: "../tpl/index/right/goods/goods2.html",
                    controllerUrl: "../skin/js/index/right/goods/goods2Ctr.js"
                }))

                //订单
                .state("index.order", angularAMD.route({
                    url: "/order",
                    templateUrl: "../tpl/index/left/order.html",
                    controllerUrl: "../skin/js/index/left/orderCtr.js"
                }))
                .state("index.order.order1", angularAMD.route({
                    url: "/order1",
                    templateUrl: "../tpl/index/right/order/order1.html",
                    controllerUrl: "../skin/js/index/right/order/order1Ctr.js"
                }))
                .state("index.order.order2", angularAMD.route({
                    url: "/order2",
                    templateUrl: "../tpl/index/right/order/order2.html",
                    controllerUrl: "../skin/js/index/right/order/order2Ctr.js"
                }))

                //demo
                .state("index.demo", angularAMD.route({
                    url: "/demo",
                    templateUrl: "../tpl/index/left/demo.html",
                    controllerUrl: "../skin/js/index/left/demoCtr.js"
                }))
                .state("index.demo.model", angularAMD.route({
                    url: "/model",
                    templateUrl: "../tpl/index/right/demo/model.html",
                    controllerUrl: "../skin/js/index/right/demo/modelCtr.js"
                }))
                .state("index.demo.pagination", angularAMD.route({
                    url: "/pagination",
                    templateUrl: "../tpl/index/right/demo/pagination.html",
                    controllerUrl: "../skin/js/index/right/demo/paginationCtr.js"
                }))
                .state("index.demo.accordion", angularAMD.route({
                    url: "/accordion",
                    templateUrl: "../tpl/index/right/demo/accordion.html",
                    controllerUrl: "../skin/js/index/right/demo/accordionCtr.js"
                }))
                .state("index.demo.alert", angularAMD.route({
                    url: "/alert",
                    templateUrl: "../tpl/index/right/demo/alert.html",
                    controllerUrl: "../skin/js/index/right/demo/alertCtr.js"
                }))
                .state("index.demo.popover", angularAMD.route({
                    url: "/popover",
                    templateUrl: "../tpl/index/right/demo/popover.html",
                    controllerUrl: "../skin/js/index/right/demo/popoverCtr.js"
                }));




            $urlRouterProvider.otherwise("login");
        }]);
    }

    return initRouter;
});

