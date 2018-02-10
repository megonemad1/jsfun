
    function exe(prev = ""){
    try{

var url = "https://raw.githubusercontent.com/megonemad1/jsfun/master/paperclip.js";
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", url, true);
xmlHttp.onload = function(e) {
  if (xmlHttp.readyState === 4) {
    if (xmlHttp.status === 200) {
      x = xmlHttp.responseText; 

    console.log(x);
if (prev != x){
    console.log(x);
   eval(x);
   prev = x;
    } 
  }
}}
xmlHttp.send();
    }
    catch(e){

    }
setTimeout(()=>exe(prev),1000);
console.log("execute");
    }
exe();