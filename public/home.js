$(function  () {
  var barData = [{name:"Abc1", place:"A1" }, {name:"Xyz", place:"B1" }, {name:"Abc2", place:"A2" }];

    var theTemplateScript = $("#bar-template").html(); 

    var theTemplate = Handlebars.compile(theTemplateScript); 

    $(".barsNav").append(theTemplate(barData)); 
 
});