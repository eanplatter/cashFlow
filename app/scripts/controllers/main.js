'use strict';

/**
 * @ngdoc function
 * @name cashFlowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cashFlowApp
 */
angular.module('cashFlowApp')
  .controller('MainCtrl', ['$scope', function($scope) {
      
      $scope.income = 0;
      $scope.otherIncome = 0;
      $scope.savings = 0;
      $scope.food = 0;
      $scope.rent = 0;
      $scope.utilities = 0;
      $scope.transport = 0;
      $scope.debt = 0;
      $scope.insurance = 0;
      $scope.medical = 0;
      $scope.clothing = 0;
      $scope.school = 0;
      $scope.other = 0;
      $scope.other2 = 0;

      var arrIn = []
  	$scope.inflow = function(income, otherIncome) { 
  		if(income || otherIncome) {
  			var total = income + otherIncome;
  			return total;  	
  			$scope.arrIn.push(total);	

  			}
  	}; 

  var arrOut = []
  	$scope.outflow = function(savings, food, rent, utilities, transport, debt, insurance, medical, clothing, school, other, other2) { 
  		if(savings || food || rent || utilities || transport || debt || insurance || medical || clothing || school || other || other2) { 
  			var total = (savings + food + rent + utilities + transport + debt + insurance + medical + clothing + school + other + other2);
  			return total;  	
  			$scope.arrOut.push(total);	

  			}
  	}; 

var arrOver = []
  	$scope.leftOvers = function(income, otherIncome, savings, food, rent, utilities, transport, debt, insurance, medical, clothing, school, other, other2) { 
  		if(income || otherIncome || savings || food || rent || utilities || transport || debt || insurance || medical || clothing || school || other || other2) {
  		var total = ((income + otherIncome)-(savings + food + rent + utilities + transport + debt + insurance + medical + clothing + school + other + other2))
  			return total;   	
  			$scope.arrOver.push(total);	

  			}
  	}; 


    }]);