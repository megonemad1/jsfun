  function exe(prev = ""){
    try{

var url = "https://raw.githubusercontent.com/megonemad1/jsfun/master/paperclip.js?_=" + new Date().getTime();
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
}

setTimeout(()=>exe(prev),5000);
}
xmlHttp.send();
    }
    finally{
exe();
    }
console.log("execute");
    }
exe();