const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req, resp){
  resp.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,resp){
  const city = req.body.cityName;
  const apiKey = req.body.apiKey;
  const unit = req.body.units;
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+unit+"&appid="+apiKey;
  https.get(url, function(response){

    response.on("data", function(data){
      const weather = JSON.parse(data);
      const temp = weather.main.temp;
      const desc = weather.weather[0].description;
      const icon = weather.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

      resp.write("<h1>The temperature in " + city + " is " + temp + "degree Celsius.</h1>");
      resp.write( "<p>The weather is currently "+ desc+"</p>");
      resp.write("<img src=\""+imageUrl+"\">");
      resp.send();
    })
  });

});

app.listen(3000, function(){
  console.log("Server is running on 3000");
});
