// A very helpful artical about connecting the pet finder api
// https://gomakethings.com/how-to-make-multiple-fetch-calls-with-the-same-oauth-token-in-vanilla-js/

var apiKey = 'LWxSqYatdplE3OeXhPTKjm1PHsfDDVflXSPguuUtViYdrQMY1c'; // assign our key to a variable, easier to read
var secret = "kWGAVp8RvLCQqmYSGVA9danmtZydlMw6CufLt6CR";
var fetchPets = "https://api.petfinder.com/v2/types/dogs?location=midland,l0k2a0&age=adult&limit=4&good_with_children=1&good_with_dogs=1&good_with_cats=0special_needs=1" 


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
}).then(function (response){
    return response.json();

}).then (function (data){
     console.log('token', data);

    token = data.access_token;
	tokenType = data.token_type;
	expires = new Date().getTime() + (data.expires_in * 1000);
    getPets ();

})


function getPets() {
    return fetch("https://api.petfinder.com/v2/animals?type=dog&location=-79.885712,44.750147&limit=4",{
        headers: {
            "Authorization": tokenType + " " + token,
            "content-type": "application/x-www-form-urlencoded"
        }
    }).then(function (response){
        return response.json();
    }).then(function(data){
        console.log("pets",data);
    })   
};  

function callApi() {
    if(expires - new Date().getTime() < 1) {
    console.log("Making New Call");
    gettoken();
    getPets();
    }
    return;
}
