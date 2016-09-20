var app = angular.module('main', []);

$(".players button").click(function(event){

    var button = $(event.target);
    alert(button.attr("id"));    
});