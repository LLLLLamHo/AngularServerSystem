/**
 * Created by Administrator on 2016/7/25.
 */
define([],function(){
    return ['$scope','$log','$$changeLeftTab',function($scope,$log,$$changeLeftTab){

        $$changeLeftTab($scope,'pagination');

        $scope.title = "pagination分页";

        $scope.totalItems = 64;
        $scope.currentPage = 4;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            $log.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 10;
        $scope.bigTotalItems = 100;
        $scope.bigCurrentPage = 5;

        //demo
        $scope.afaDemoTotalItems = 100;
        $scope.afaDemoCurrentItems = 1;
        $scope.afaDemoItemsPerPage = 10;
        $scope.afaDemoNumPages = $scope.afaDemoItemsPerPage;
        $scope.afaDemoMaxSize = $scope.afaDemoTotalItems/$scope.afaDemoItemsPerPage;
        $scope.inputPage = $scope.afaDemoCurrentItems;

        $scope.textChangePage = function(currPage){
            if(parseInt(currPage) && parseInt(currPage) != 0){
                $scope.afaDemoCurrentItems = $scope.inputPage;
                $log.log(currPage);
            }else{
                return false;
            }
        };

        $scope.btnChangePage = function(currPage){
            if(parseInt(currPage) && parseInt(currPage) != 0){
                $scope.inputPage = $scope.afaDemoCurrentItems;
                $log.log(currPage);
            }else{
                return false;
            }
        };


    }]
});