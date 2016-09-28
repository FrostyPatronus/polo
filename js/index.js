var app = angular.module('main', []);

app.controller('scoreboard', function(){

    // DEFINES rows TO BE THE INDIVIDUAL ROWS DATA IN THE VIEW
    // this.rows[rowNumber].score
    this.rows = [];
    var rows = this.rows;

    var positions = ["one", "two", "three", "four", "five", "six"];
    this.scores = ["goals", "assists", "steals", "blocks"];
    var scores = this.scores;
    // Populates the rows list
    $.each(positions, function(i, v){
        var dict = {};
        dict.name = v;
        $.each(scores, function(i, v){
            dict[v] = 0;
        });
        rows.push(dict);
    });

    this.plusOne = function(row, score){
        rows[row][score] += 1;
    };

    this.name = "";

});

