$(document).ready(function(){
   var i = 1; var j=10;
   setInterval(function () {
      $("#dynamicNumber7").html(i);
      i++; 
  }, 2000);
  setInterval(function () {
    $("#dynamicNumber6").html(j);
     j++;
},3000);
});
 