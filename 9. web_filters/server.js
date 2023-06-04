let express = require("express");
let app = express();
let path = require("path");
let port = 3000;
console.log(__dirname);
// Когато заредим в браузъра localhost:3000/
app.get("/", function (req, res) {
    let file_name = path.join(__dirname, "/nachalna_stranica.html");
    res.sendFile(file_name);
});
app.get("/public/img1.png", function(req, res) {
    res.sendFile("C:/Users/dimitar/Desktop/TSA 2022- 2023/L3/9. web_filters/public/img1.png");
})
app.listen(port, function () {
    console.log("SURVURA SLUSHA NA PORT: " + port);
});