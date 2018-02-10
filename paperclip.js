function message(m= []){
if (m.length>=1){
    alert(m[0]);
    setTimeout(()=>message(m.slice(1)),10000);
}
}
message(["Callum please come back to us", "Visiting time is over now", "we'll come back tomorrow"]);