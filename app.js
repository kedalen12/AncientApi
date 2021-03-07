var express = require("express");
var app = express();

app.get("/animal", (req, res, next) => {
    res.json("1.0.0");
   });

   app.get("/animal/url", (req, res, next) => {
    res.json("https://dl.dropbox.com/s/cgxkkz6otn9i9ek/AncientLauncher.zip?dl=0");
   });
app.get("/launcher", (req, res, next) => {
    res.json("1.0.0");
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});