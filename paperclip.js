function flash(i=0){
document.body.style.background = `rgb(${i%255}, 126, 126)`;
setTimeout(()=>flash(i+1),500);
}
flash();