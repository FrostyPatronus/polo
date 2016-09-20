var app = angular.module('main', []);

var buttons = $(".players button");
buttons.addClass("context-menu-one");

var numbers = {
    one : 0,
    two : 0,
    three : 0,
    four : 0,
    five : 0,
    six : 0
};

buttons.dblclick(function (event){
    var button = $(event.target);
    var id = button.attr("id");

    numbers[id] -= 3;

    button.css("color", "red");
    button.html(numbers[id]);
});

buttons.click(function(event){
    var button = $(event.target);
    var id = button.attr("id");

    numbers[id]++;

    button.css("color", "red");
    button.html(numbers[id]);

});

var reset = '<button class="reset">Reset</button>';
$(".first div, .second div, .third div").append(reset);

$(".reset").click(function(event){

    var reset = $(event.target);
    var button = reset.prev();
    var id = button.attr("id");

    numbers[id] = 0;

    button.html(numbers[id]);

});