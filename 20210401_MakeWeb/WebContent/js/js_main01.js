/**
 * 
 */

// 마우스오버 내려오는부분
$(document).ready(function () {

     $("#centerUl").mouseover(function () {

          $("#centerUl_layer").slideDown(300)

     });

     $("#centerUl_layer").mouseleave(function () {
          $("#centerUl_layer").slideUp(300)
     });

});



// 슬라이드 부분 버튼
// 지금 버튼 안먹힘 html에서 안보임
var num = 1;

function preGallary() {
     //	alert("이전");
     num--;
     if (num < 1) {
          num = 5;
     }
     document.getElementById('gallary').src =
          "./images/juice0" + num + ".jpg";

     return false;
}

function nextGallary() {
     //	alert("다음");
     num++;
     if (num > 5) {
          num = 1;
     }
     document.getElementById('gallary').src =
          "./images/juice0" + num + ".jpg";

     return false;
}
















