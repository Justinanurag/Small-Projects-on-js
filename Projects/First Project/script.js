var isStatus=document.querySelector("h5")

var addCar=document.querySelector("#buy")
addCar.addEventListener("click",function(){
    isStatus.innerHTML="Congratulations! You have a new friend"
    isStatus.style.color="green"

})
var removeCar=document.querySelector("#sell")
removeCar.addEventListener("click",function(){
    isStatus.innerHTML="You have sold your car"
    isStatus.style.color="red"
})

var driveCar = document.querySelector("#drive");
var isStatus = document.querySelector("h5"); // Ensure this is correctly selected
var check = 0;

driveCar.addEventListener("click", function () {
    if (check === 0) {
        isStatus.innerHTML = "You are driving your car";
        isStatus.style.color = "blue";
        driveCar.innerHTML = "Stop";  // Use driveCar instead of btn
        check = 1;
    } else {
        isStatus.innerHTML = "You are not driving your car";
        isStatus.style.color = "orange";
        driveCar.innerHTML = "Drive";  // Use driveCar instead of btn
        check = 0; // Reset check
    }
});


