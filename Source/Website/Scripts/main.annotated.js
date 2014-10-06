(function() {
    'use strict';
    angular.module('codehouse.demo', ['mgcrea.ngStrap'])
            .value('version', '0.1');
})();
(function() {
    'use strict';

    var addToCartDirective = function() {
        var link = function() {

        };
        var controller = function() {
                
            };

        var directive = {
            restrict: 'A',
            controllerAs: 'ctrl',
            controller: controller,
            link: link,
            template: '<a href="#" class="btn btn-danger add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart...</a>',
        };

      

        return directive;

    };

    addToCartDirective.$inject = [];

    angular
    .module('codehouse.demo')
    .directive('addToCartDirective', anchor);

   

    


})();