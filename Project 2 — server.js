// Setting port
let port = process.env.PORT || 1337;
let server = app.listen(port, function () {
    console.log("Server is running on port " + port);
});

// Setting objects and constructors
let express = require('express');
let parser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => response.sendFile(__dirname + "/index.html"));

// $gel function for reduced typing
function $gel(id) {
    return document.getElementById(id);
}

// $mesh function for reduced typing
function $mesh(id) {
    return console.log(id);
}

// Setting input variables
let custBox = $gel("customer");
let firstBox = $gel("firstname");
let lastBox = $gel("lastname");
let addBox = $gel("address");
let cityBox = $gel("city");
let proBox = $gel("province");
let postBox = $gel("postal");

// NEW button clears all text boxes
function clearFields() {
    custBox.innerHTML = "";
    firstBox.innerHTML = "";
    lastBox.innerHTML = "";
    addBox.innerHTML = "";
    cityBox.innerHTML = "";
    proBox.innerHTML = "";
    postBox.innerHTML = "";
};

// ADD button verifies field contents
function verifyContents() {
    $mesh(custBox.value);
    $mesh(firstBox.value);
    $mesh(lastBox.value);
    $mesh(addBox.value);
    $mesh(cityBox.value);
    $mesh(proBox.value);
    $mesh(postBox.value);
};
