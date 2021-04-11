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



 
window.onload = function(){
	var chks = document.getElementsByName('chk');
	for(var i=0; i<chks.length;i++){
		chks[i].onclick = function(){
			if(chkChecked(chks) == chks.length){
				document.getElementsByName('allChk')[0].checked = true;
			}else{
				document.getElementsByName('allChk')[0].checked = false;
			}
		}
	}
}


function allSelect(bool){
//	var allChk = document.getElementsByName('allChk')[0];
//	console.log(allChk.value);
//    console.log(allChk.checked);
	console.log(bool);
	var chks = document.getElementsByName('chk');
	for(var c in chks){
		chks[c].checked = bool;
	}
}

// 체크된 chk 갯수를 확인 
function chkChecked(chks){
	var count = 0;
	for(var i=0; i<chks.length ; i++){
		if(chks[i].checked){
			count++;
		}
	}
	
	return count;
}

function selColor(){
	var chks = document.getElementsByName('chk');
	// 한개라도 체크가 없다면 사용자에 알려줌
	if(chkChecked(chks)>0){
		for(var c in chks){
			if(chks[c].checked){
				document.getElementById(chks[c].value).style.backgroundColor = chks[c].value;
			}else{
				document.getElementById(chks[c].value).style.backgroundColor = 'white';
			}
		}
	}else{
		alert("최소 한개 이상을 체크해 주세요");
	}
}

function clearDiv(){
	var colorBox = document.querySelectorAll("#colorBox>div");
	for(var i=0; i< colorBox.length; i++){
		colorBox[i].style.backgroundColor = 'white';
	}
	allSelect(false);
	document.getElementsByName('allChk')[0].checked =false;
	
}





