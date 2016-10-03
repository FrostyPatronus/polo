var app = angular.module('main', []);

var evals = ["goals", "assists", "steals", "blocks"];
var positions = ["1", "2", "3", "4", "5", "6"];
var players = [];
var playerNames = [];

function initPlayerObj(name) {
    var player = {name: name};

    $.each(evals, function(i, v){
        player[v] = 0;
    });

    return player;
}

/* 
-----------------------
-- LEFT HALF ----------
-----------------------
*/

app.controller('scoreboard', function() {
    /* 
    SCOPE VARIABLES DEFINED: 
    rows: Each of the individual rows' data in the left side
    scores: Each of the evaluation points a player will be grade
    plusOne: Takes a row index and score value and increments it
    */

    // DEFINES rows TO BE THE INDIVIDUAL ROWS DATA IN THE VIEW
    // this.rows[rowNumber] = playerObj
    this.positions = positions;

    this.rows = [];
    var rows = this.rows;

    this.scores = evals;
    var scores = this.scores;

    // Populates the rows list

    $.each(positions, function(i, v){
        var dict = initPlayerObj("Empty");
        rows.push(dict);
    });

    this.plusOne = function(row, score){
        rows[row][score] += 1;
    };


});

/* 
-----------------------
-- RIGHT HALF -----------
-----------------------
*/

app.controller("RosterController", function(){
    // ALL THE PLAYERS AND THEIR SCORES
    this.players = players;
    this.name = "";
    this.playerNames = playerNames;

    this.isDuped = function (val) {
        return this.playerNames.indexOf(this.name) > -1;
    };

    this.addPlayer = function(){ 
        if(this.name.length){
            this.playerNames.push(this.name);
            this.players.push(initPlayerObj(this.name));
            this.name = "";
        }
    };

});

// DIRECTIVES
app.directive("rowLabel", function() {
    return {
        restrict: "E",
        templateUrl: "html/labels.html"
    };
});

app.directive("currentPlay", function(){
    return {
        restrict: "E",
        templateUrl: "html/current-play.html",
        link: function($scope, element, attr){

            $(element.children().eq(0)).droppable({
                drop: function () {
                    
                },
                classes: {
                    "ui-droppable-hover": "hoverDrop",
                    "ui-droppable-active": "activeDrop"
                }, 
                tolerance: "touch"
            });

        }
    };
});

app.directive("roster", function(){
    return {
        restrict: "E",
        templateUrl: "html/roster.html"
    };
});

app.directive("player", function(){
    return {
        restrict: "E",
        templateUrl: "html/player.html",
        link: function ($scope, element, attr){
            element = $(element.children().eq(0));
            element.draggable({
                helper: "clone",
                appendTo: "body",
                revert: "true"
            });
        }
    };
});
