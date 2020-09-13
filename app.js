const express= require("express");
const https= require("https");


const app= express();

app.get("/", function(req,res){
const url= "https://api.openweathermap.org/data/2.5/weather?q=London&appid=0c6b6879146b984f930f2d16f7332844&units=metric"

https.get(url, function(response){
console.log(response.statusCode);

response.on("data", function(data){
   const weatherdata= JSON.parse(data);
   console.log(weatherdata);

   const temp= weatherdata.main.temp;
   console.log(temp);

 res.write("<h1>the temp. in london " + temp + " degress celcius</h1>");
 res.send
})


})
});







app.listen(3000, function(){
    console.log("app is running on port 3000");
});
