var express = require("express");
var app = express();
var request = require("request");
var HighCharts = require("highcharts");

app.set("view engine", "ejs");



app.get("/", function(req, res){
    request('https://data.marincounty.org/resource/mw3d-ud6d.json', function(error, response, body){
        if (error){
            console.log(error);
        } else {
            if (response.statusCode == 200){
                var parsedData = JSON.parse(body);
                var depArray = [];
                for (var i = 0; i < parsedData.length; i++){
                    var name = parsedData["department"];
                    if (depArray.indexOf(name) == -1)
                    depArray.push(name);
                }
                console.log(depArray);
                // depArray.forEach(function(data){
                //     console.log(data);
                // })
                res.render("landing", {parsedData: parsedData});
                // res.send(parsedData[0]["department"]);
            }
        }
    })
})

app.listen(8080, function(){
    console.log("this is bart_chart has started");
})