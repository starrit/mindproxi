(function(){

    angular.module("mp-app").controller('IndexCtrl',Controller);

    function Controller($scope){
        //alert("Testing Index Controller")
        var vm = this;
        vm.title = "Testing Index"
    }
}());