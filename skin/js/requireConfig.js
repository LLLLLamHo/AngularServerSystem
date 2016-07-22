/**
 * Created by Administrator on 2016/7/21.
 */
require.config({
    paths: {
        // angular
        "angular": "../js/lib/ng/js/angular.min",

        // angular-ui
        "angular-ui-router": "../js/lib/ng/js/angular-ui-router.min",

        // angularAMD
        "angularAMD": "../js/lib/ng/angularAMD/angularAMD.min",
        "ngload": "../js/lib/ng/angularAMD/ngload.min",

        // angular-animate
        "angularAnimate" : "../js/lib/ng/js/angular-animate",

        //controller
        "initIndexModule" : "./appCtr",

        //router
        "initIndexRouter" : "./appRouter",

        //map
        //"initMap" : "./map"

    },
    shim: {
        // angular
        "angular": { exports: "angular" },

        // angular-ui
        "angular-ui-router": ["angular"],

        // angular-animate
        "angular-animate" : ["angular"],

        // angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"]
    }
});