var con = document.querySelector("#container");
var love = document.querySelector("#LikeHeart");

con.addEventListener("dblclick", function () { 
   love.style.transform = "translate(-50%,-50%) scale(1)";
   setTimeout(function (){
    love.style.transform = "translate(-50%,-50%) scale(0)";}, 1000);
});
