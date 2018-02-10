function message(m= []){
if (m.length>=1){
    alert(m[0]);
    setTimeout(()=>message(m.slice(1)),1000);
}
}
message(["Everything is not fine!"]);