(function() {

    var ExcuseController = function($scope, $routeParams, excuseFactory) {

        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
            excuseFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    console.log('there was an error');
                });
        }

        init();

    };

    ExcuseController.$inject = ['$scope', '$routeParams', 'excuseFactory'];

    angular.module('dailyApp')
        .controller('ExcuseController', ExcuseController);
}());
