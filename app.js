angular.module('calcApp', ['ngMessages', 'ngRoute', 'ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: './home.html'
        })
        .when('/meal', {
            templateUrl: './meal.html'
        })
        .when('/earnings', { ///:price/:tip
            templateUrl: './earnings.html'
        })
        .otherwise({
            redirectTo: '/'
        })
    })
        
    .controller('mealCtrl', function($scope, $location, $timeout) {
    
        $scope.tax = 6.25;
        $scope.subtotal = 0;
        $scope.tipDisplay = 0;
        $scope.total = 0;
        $scope.tipTotal = 0;
        $scope.mealTotal = 0;
        $scope.tipAvg = 0;
        $scope.tip = 0;

        
        // ng-onclick function
        $scope.customerPrice = function(menuPrice, tax, tip) {
            // Subtotal (Price + Tax)
            $scope.subtotal = menuPrice + (menuPrice * (tax/100));
            
            // Handle no tip
            if ($scope.tip == "") {
                $scope.tip = 0;
            };
            
            // Tip (Price * Tax %)
            $scope.tipDisplay = menuPrice * (tip/100);
            
            // Total (Subtotal + Tip)
            $scope.total = $scope.subtotal + $scope.tipDisplay;
            
            // Session Tip Total
            $scope.tipTotal = $scope.tipTotal + $scope.tipDisplay;
            
            // Session Meal Total
            $scope.mealTotal = $scope.mealTotal + 1;
            
            // Session Tip Average
            $scope.tipAvg = $scope.tipTotal / $scope.mealTotal;
            
            // Reset Inputs
            $scope.menuPrice = "";
            $scope.tip = "";
            /*$scope.detailsInfo.$setPristine();*/
                        
        };
        
        $scope.cancel = function() {
            $scope.subtotal = 0;
            $scope.tipDisplay = 0;
            $scope.total = 0;
            $scope.tax = 6.25;
            $scope.menuPrice = "";
            $scope.tip = "";
            $scope.detailsInfo.$setPristine();
        };
    
        $scope.reset = function() {
            $scope.tipTotal = 0;
            $scope.mealTotal = 0;
            $scope.tipAvg = 0;
            $scope.subtotal = 0;
            $scope.tipDisplay = 0;
            $scope.total = 0;
        };
    });