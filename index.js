function screenclick(val){
document.getElementById("scr").value+=val;
}

function clr(){
document.getElementById("scr").value="";
}

function equalto(){
var numbers=document.getElementById("scr").value;
var result=eval(numbers);
document.getElementById("scr").value=result;
}
