document.getElementById("increase").addEventListener("click", function(){
    changeFontSize(1);
})

document.getElementById("decrease").addEventListener("click", function(){
    changeFontSize(-1);
})

function changeFontSize(step) {
    var currentFontsize = parseFloat(getComputedStyle(document.body).fontSize);
    var newFontSize = currentFontsize + step;
    document.body.style.fontSize = newFontSize + "px";
}