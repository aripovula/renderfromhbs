$(function  () {
    var barData = [{name:"Abc1", place:"A1" }, {name:"Xyz", place:"B1" }, {name:"Abc2", place:"A2" }];
      var theTemplateScript = $("#bar-template").html(); 
  
      var theTemplate = Handlebars.compile(theTemplateScript); 

      var html='';

      for(var i = 0; i < barData.length; i++) {
        html = html + `<li class="bars">${barData[i].name} is @ ${barData[i].place} </li>`;
      }
  
      $(".barsNav").append(html); 
  
      
  });