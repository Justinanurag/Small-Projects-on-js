var main=document.querySelector("#main");
var cursor=document.querySelector(".cursor");

// cursor.style.backgroundColor="red";
main.addEventListener("mousemove",function(event){
   cursor.style.left=event.x+"px"
   cursor.style.top=event.y+"px"
});