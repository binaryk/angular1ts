/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../products/product" />
module app.common {
    interface IDataAccessService {
        getProductResource() : ng.resource.IResourceClass<IProductResource>;
    }

    interface IProductResource extends ng.resource.IResource<app.domain.IProduct>{

    }

    export class DataAccessService implements IDataAccessService{
        static $inject = ["$resource"];
        constructor(private $resource : ng.resource.IResourceService){
        }

        getProductResource = ():ng.resource.IResourceClass<IProductResource> => {
            return this.$resource("/api/products/:productId");
        }

        getProducts = () => {
            return [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": new Date(2009, 2, 19),
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": new Date(2010, 2, 18),
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 5,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": new Date(2013, 4, 21),
                    "description": "Curved claw steel hammer",
                    "price": 8.99,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                }
            ]
        }
    }

    angular.module("common.services")
            .service("dataAccessService", DataAccessService);
}