const x = document.getElementById("button");
const  me = document.getElementById("heading");
function maketextsizer(size){
    function changeSize(){
    me.style.fontSize = `${size}px`;
}
return changeSize;
}
const size12 = maketextsizer(12);
x.addEventListener("click",size12);
