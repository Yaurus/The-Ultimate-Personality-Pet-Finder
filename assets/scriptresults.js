// A very helpful artical about connecting the pet finder api
// https://gomakethings.com/how-to-make-multiple-fetch-calls-with-the-same-oauth-token-in-vanilla-js/

var apiKey = 'LWxSqYatdplE3OeXhPTKjm1PHsfDDVflXSPguuUtViYdrQMY1c'; // assign our key to a variable, easier to read
var secret = "kWGAVp8RvLCQqmYSGVA9danmtZydlMw6CufLt6CR";
var fetchPets = "https://api.petfinder.com/v2/types/dogs?location=midland,l0k2a0&age=adult&limit=4&good_with_children=1&good_with_dogs=1&good_with_cats=0special_needs=1"

//var fetchPets = "https://api.petfinder.com/v2/types/dogs?location=" +  + "," + hascity + "&radius=" + haspost + "&good_with_dogs=" + hasDog + "&good_with_cats=" + hasCat + "&limit=4"


//retrieve local storage
var hasDog = localStorage.getItem("hasdog")
var hasCat = localStorage.getItem("hascat")
var hasLat = localStorage.getItem("latValue")
var hasLon = localStorage.getItem("lonValue")
var hasRadi = localStorage.getItem("radius")
var hasPost = localStorage.getItem("post")
var hasCity = localStorage.getItem("location")

console.log(hasDog);
console.log(hasCat);
console.log(hasLat);
console.log(hasLon);
console.log(hasRadi);
console.log(hasPost);
console.log(hasCity);




// if (hasDog === "true") {
//   console.log("Has Dog: True");
// }
// else {
//   console.log("Has Dog: False");
// }

// if (hasCat === "true") {
//   console.log("Has Cat: True");
// }
// else {
//   console.log("Has Dog: False");
// }


var submitted = document.getElementById("submitZip")
//tokens and stuff
var token, tokenType, expires;



// submitted.addEventListener("click", function(){
//     event.preventDefault()
//     console.log("a button was clicked")
// })


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


function getPets() {    
    if (hasCity.length > 0) {
        return fetch(`https://api.petfinder.com/v2/animals?location=${hasPost}&good_with_cats=${hasCat}`, {
            headers: {
                "Authorization": tokenType + " " + token,
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("pets", data);
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
