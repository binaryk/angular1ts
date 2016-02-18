/// <reference path="../typings/angularjs/angular.d.ts" />
module app {
    var main = angular.module("productManagement",["ngRoute","common.services","productResourceMock"]);

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider):void{

        $routeProvider.when(
            "/productList",{
                templateUrl: "/app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .when(
            "/productDetail/:productId",{
                templateUrl: "/app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm"
            }).otherwise("/productList");

    }
}
