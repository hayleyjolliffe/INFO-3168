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

// POST handler
app.post('/api/data', (request, response) => {
    let pbody = request.body;

    if (pbody.customer === NOTNULL) {
        pbody.firstname = $gel(firstname).value;
        $mesh(pbody.firstname);
        pbody.lastname = $gel(lastname).value;
        $mesh(pbody.lastname);
        pbody.address = $gel(address).value;
        $mesh(pbody.address);
        pbody.city = $gel(city).value;
        $mesh(pbody.city);
        pbody.province = $gel(province).value;
        $mesh(pbody.province);
        pbody.postal = $gel(postal).value;
        $mesh(pbody.postal);
        response.send(pbody);
        console.log(pbody);
    }
    else {
        pbody.first = "Not found";
        pbody.last = "";
        pbody.address = "";
        response.send(pbody);
        console.log(pbody);
    }
});
