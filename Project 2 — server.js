// Function for reduced typing
// document.getElementById
function $gel(id) {
    return document.getElementById(id);
}
// console.log
function $mesh(id) {
    return console.log(id);
}

// Setting port
let port = process.env.PORT || 1337;
let server = app.listen(port, function () {
    console.log("Server is running on port " + port);
});

// Setting up express
let express = require('express');
let parse = require('body-parser');
let app = express();
app.use(parse.urlencoded({ extended: false }));
