var elem1=document.querySelector("#elem1");
var elemImage=document.querySelector("#elem2 img");
elem1.addEventListener("mousemove",function(event){
    // console.log("elem1 move babe");
    elemImage.style.left=event.x+"px"
})