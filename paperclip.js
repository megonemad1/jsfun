
/*document.body.style.backgroundImage = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg";
setTimeout(()=>{document.body.style.backgroundImage = "";},1000);
*/
function message(m= []){
if (m.length>=1){
    alert(m[0]);
    setTimeout(()=>message(m.slice(1)),10000);
}
}
message(["Ok Mr Anderson",
"it’s time for your medicines again",
"Now now you know you need to take them",
"It’s for your own good Mr Anderson please stop fighting back",
"WE HAVE A CODE RED IN WARD THREE! REPEAT WE HAAAAAAAGHHHHH!!!"]);


//var myWindow = window.open("", "", "width=200, height=100");
  //  myWindow.document.write("<head><style></style></head><body>div.xmasTree</body>");
    //myWindow.blur();