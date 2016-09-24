var app = angular.module('main', []);

app.controller('scoreboard', ['$scope', function($scope){

    // DEFINES rows TO BE THE INDIVIDUAL ROWS DATA IN THE VIEW
    // $scope.rows[rowNumber].score
    $scope.rows = [];
    var rows = $scope.rows;

    var positions = ["one", "two", "three", "four", "five", "six"];
    $scope.scores = ["goals", "assists", "steals", "blocks"];
    var scores = $scope.scores;
    // Populates the rows list
    $.each(positions, function(i, v){
        var dict = {};
        dict.name = v;
        $.each(scores, function(i, v){
            dict[v] = 0;
        });
        rows.push(dict);
    });

    $scope.plusOne = function(row, score){
        rows[row][score] += 1;
    };

}]);

/*$(document).ready(function(){
    $("button").click(function(event){
        var button = $(this);
        var id = button.attr("id");

        var temp = id.split("-");
        var position = temp[0];
        var score = temp[1];

        button.html(parseInt(button.html()) + 1);




    });

});*/

