// A very helpful artical about connecting the pet finder api
// https://gomakethings.com/how-to-make-multiple-fetch-calls-with-the-same-oauth-token-in-vanilla-js/

var apiKey = 'LWxSqYatdplE3OeXhPTKjm1PHsfDDVflXSPguuUtViYdrQMY1c'; // assign our key to a variable, easier to read
var secret = "kWGAVp8RvLCQqmYSGVA9danmtZydlMw6CufLt6CR";
var fetchPets = "https://api.petfinder.com/v2/types/dogs?location=midland,l0k2a0&age=adult&limit=4&good_with_children=1&good_with_dogs=1&good_with_cats=0special_needs=1"

//var fetchPets = "https://api.petfinder.com/v2/types/dogs?location=" +  + "," + hascity + "&radius=" + haspost + "&good_with_dogs=" + hasDog + "&good_with_cats=" + hasCat + "&limit=4"


//retrieve local storage
//pet based values
var hasDog = JSON.parse(localStorage.getItem("hasdog")) // for both dogs and cats
var hasCat = JSON.parse(localStorage.getItem("hascat")) // for children
var hasSpecialneeds = JSON.parse(localStorage.getItem("hasspecialneeds"))
var hasAge = JSON.parse(localStorage.getItem("hasage"))

// Location based Values
var hasLat = JSON.parse(localStorage.getItem("latValue"))
var hasLon = JSON.parse(localStorage.getItem("lonValue"))
var hasRadi = JSON.parse(localStorage.getItem("radius"))
var hasPost = JSON.parse(localStorage.getItem("post"))
var hasCity = JSON.parse(localStorage.getItem("location"))
var staOrPro = JSON.parse(localStorage.getItem("Staorpro"))


console.log(hasDog);
console.log(hasCat);
console.log(hasLat);
console.log(hasLon);
console.log(hasRadi);
console.log(hasPost);
console.log(hasCity);
console.log(staOrPro);

var petData = {};


var submitted = document.getElementById("submitZip")
//tokens and stuff
var token, tokenType, expires;



fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body: "grant_type=client_credentials&client_id=" + apiKey + "&client_secret=" + secret,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}).then(function (response) {
    return response.json();

}).then(function (data) {
    console.log('token', data);

    token = data.access_token;
    tokenType = data.token_type;
    expires = new Date().getTime() + (data.expires_in * 1000);
    getPets();

})

//not working values
//&distance=${radius} need to turn it into a number
// ,${hasCity},${hasLat},${hasLon} dosn't like this
//&good_with_dogs=${hasDog}
// &distance=${radius}

//"https://api.petfinder.com/v2/animals/?limit=4&location=" + hasCity + "," + staOrPro + ";" + hasLat + "," + hasLon +  ";&good_with_cats=" + hasDog + "&good_with_dogs=" + hasDog

function getPets() {    
    var radius = parseInt(hasRadi);
    if (hasCity.length > 0) {
        return fetch("https://api.petfinder.com/v2/animals/?limit=4&location=" + hasPost + "&distance=" + hasRadi + "&good_with_cats=" + hasDog + "&good_with_dogs=" + hasDog + "&good_with_children=" + hasCat, {
            headers: {
                "Authorization": tokenType + " " + token,
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("pets", data);
            petData.data = data.animals;
            console.log(petData)
            buildPetBox();
        })
    }
};

function callApi() {
    if (expires - new Date().getTime() < 1) {
        console.log("Making New Call");
        gettoken();
        getPets();
    }
    return;
}

//Build elemts for displaying pets data.
// info to provide: pet image, pet name, pet description, url with a button to link to pets page.  

function buildPetBox() {
    var petsHere = document.getElementById("petsSection")
    console.log(petsHere);
    console.log(petData.data[0].url)
    
    for (var i = 0; i < 4; i++) {
        var elements = petData.data[i];
        console.log(elements);

    // creates an element for the info to sit in
    var petBlock = document.createElement("div")
    petBlock.classList.add("petBlock") 
    // creates an image tag
    var petPic = document.createElement("img")
    petPic.classList.add("PetPic")
    petPic.setAttribute("src", petData.data[i].primary_photo_cropped.small);
    // create a tag for the pets name
    var petName = document.createElement("h3")
    petName.classList.add("petName")
    petName.textContent = petData.data[i].name;
    //creates a tag for pet description
    var petDes = document.createElement("p")
    petDes.classList.add("petDes")
    petDes.textContent = petData.data[i].description
    // //link to pet page
    var petLinkBtn = document.createElement("button")
    petLinkBtn.classList.add("petLinkBtn")
    petLinkBtn.textContent = "View Pet"
    petLinkBtn.setAttribute("href", petData.data[i].url);
    


    //append children to the pest here section
    petsHere.appendChild(petBlock)
    petBlock.appendChild(petPic)
    petBlock.appendChild(petName)
    petBlock.appendChild(petDes)
    petBlock.appendChild(petLinkBtn)
    
    }
};
