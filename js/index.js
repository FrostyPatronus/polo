var app = angular.module('main', []);

app.controller('scoreboard', ['$scope', function($scope){
    $scope.positions = 
    [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six"
    ];

    $scope.scores = ["goals", "assists", "steals", "blocks"];

}]);

$(document).ready(function(){
    $("button").click(function(event){
        var button = $(this);
        var id = button.attr("id");

        var temp = id.split("-");
        var position = temp[0];
        var score = temp[1];

        


    });

});

