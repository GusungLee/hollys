/**
 * 
 */

$(document).ready(function () {

     $("#centerUl").mouseover(function () {

          $("#centerUl_layer").slideDown(300)

     });

     $("#centerUl_layer").mouseleave(function () {
          $("#centerUl_layer").slideUp(300)
     });

});

