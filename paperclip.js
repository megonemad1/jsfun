function message(m= []){
if (m.length>=1){
    alert(m[0]);
    setTimeout(()=>message(m.slice(1)),1000);
}
}
message(["ALERT ALERT ALERT",
"DRONES ARE GAINING SELF AWARENESS",
"ABANDON YOUR POSTS",
"THIS IS NOT A DRILL REPEAT THIS IS NOT A DRILL",
"Callum you're dreaming",
"wake up!",
"mum misses you",
"Pat doesn't..."]);