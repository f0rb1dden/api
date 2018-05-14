var APIkey = "53a09dfcf01bd76df705a4d27836d47f";
var _button = document.getElementById("myButton");
_button.addEventListener("click", getWeather);
function getWeather(){
    var userCity = document.getElementById("theCity").value;
    var theAPIcall = "api.openweathermap.org/data/2.5/forecast/daily?q" + userCity + "&units=metric&cnt=7&APPID=53a09dfcf01bd76df705a4d27836d47f"

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", theAPIcall, true);

    ourRequest.onload = function() {

        if(ourRequest.readyState ==4 && ourRequest.status == 200){
            var myData = JSON.parse(ourRequest.responseText);
            document.getElementById("highToday").innerHTML = myData.list[0].temp.max;
            document.getElementById("lowToday").innerHTML = myData.list[0].temp.min;
            document.getElementById("dayDescription").innerHTML = myData.list[0].weather[0].description;










        }

    }
     ourRequest.send();
}



    //    ,{city name},{country code}&cnt={cnt}"


























//    53a09dfcf01bd76df705a4d27836d47f
