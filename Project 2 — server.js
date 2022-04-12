// $gel function for reduced typing
function $gel(id) {
    return document.getElementById(id);
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
    // Verifying customer textbox
    if (custBox.innerHTML == null || NaN) {
        console.log('Customer ID verification failed. Retrying...');
        // Reset box
        custBox.innerHTML = "";
    }
    // Verifying first name textbox
    if (firstBox.innerHTML == null) {
        console.log('First name verification failed. Retrying...');
        // Reset box
        firstBox.innerHTML = "";
    }
    // Verifying last name textbox
    if (lastBox.innerHTML == null) {
        console.log('Last name verification failed. Retrying...');
        // Reset box
        lastBox.innerHTML = "";
    }
    // Verifying address textbox
    if (addBox.innerHTML == null) {
        console.log('Address verification failed. Retrying...');
        // Reset box
        addBox.innerHTML = "";
    }
    // Verifying city textbox
    if (addBox.innerHTML == null) {
        console.log('City verification failed. Retrying...');
        // Reset box
        cityBox.innerHTML = "";
    }
    // Verifying province textbox
    if (proBox.innerHTML == null) {
        console.log('Province verification failed. Retrying...');
        // Reset box
        proBox.innerHTML = "";
    }
    // Verifying postal code textbox
    if (postBox.innerHTML == null) {
        console.log('Postal code verification failed. Retrying...');
        // Reset box
        postBox.innerHTML = "";
    }
};
