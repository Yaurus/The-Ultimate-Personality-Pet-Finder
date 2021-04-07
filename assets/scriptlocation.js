//call the variables
var button = document.getElementById("button");

var locationValue = [];
var postalValue =[];
<<<<<<< HEAD
var lat = [];
var lon = [];

//retrieve local storage
var hasDog = localStorage.getItem("hasdog")
var hasCat = localStorage.getItem("hascat")




if (hasDog === "true") {
  console.log("Has Dog: True");
}
else {
  console.log("Has Dog: False");
}

if (hasCat === "true") {
  console.log("Has Cat: True");
}
else {
  console.log("Has Dog: False");
}


=======
>>>>>>> jodi



//Event listener on the button
button.addEventListener("click", function(){
    //gets the value of the imput bar
    var search = document.getElementById("search").value;
    var postCode = document.getElementById("searchtwo").value;
    var searchRadius = document.getElementById("radius").value;
    
    console.log("A button was clicked")
    console.log(search); 
    console.log(postCode); 
    console.log(searchRadius);
    locationValue.push(search);
    localStorage.setItem("location", JSON.stringify(locationValue));
    postalValue.push(postCode);
    localStorage.setItem("post", JSON.stringify(postalValue));
    localStorage.setItem("radius", JSON.stringify(searchRadius));
    geoCodeApi();
});

//under here will call the geo code api. It will push a lat and lon value into an array.
function geoCodeApi(){
    var city = document.getElementById("search").value.trim();
    var postalCode = document.getElementById("searchtwo").value.trim();
    var geoCode = "https://api.geoapify.com/v1/geocode/search?text=%20" + city + "%20" + postalCode + "&limit=1&apiKey=3b4a9f7da30e4c01940be99d78ea8f34";

    fetch(geoCode)
         .then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
              console.log(data)
              //gets the latitude and lonitiude of the location and sets them to local storage so they can be used later.
              localStorage.setItem("latValue", JSON.stringify(data.features[0].geometry.coordinates[0]));
              localStorage.setItem("lonValue", JSON.stringify(data.features[0].geometry.coordinates[1]));
              window.location.href = "results.html"
              });
            }
          })
          .catch(function () {
            console.log('Unable to connect');
            
          }); 
}

<<<<<<< HEAD



// finction to call the places api to look up places that are related to pets
// I need a way to make it so it only runs after the geocodeapi has returned the data.
function callLocation() {
  var locationApi = "https://api.geoapify.com/v2/places?categories=pet&filter=circle:" + lat + "," + lon + ",20000&limit=20&apiKey=3b4a9f7da30e4c01940be99d78ea8f34";
  //var locationApi  = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +lat +"," + lon+ "&radius=1500&type=animal_shelter&key=AIzaSyAsS5MK-sagl9FEdNRBtmu1OzFlAmZBV3Y"


  fetch(locationApi)
       .then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
            console.log(data)
            });
          }
        })
        .catch(function () {
          console.log('Unable to connect'); 
        }); 
      };
     


=======
>>>>>>> jodi
// link to places https://api.geoapify.com/v2/places

// link to geo codeing "https://api.geoapify.com/v1/geocode/search?text=%20Westminster&apiKey=3b4a9f7da30e4c01940be99d78ea8f34"
// complete link "https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=3b4a9f7da30e4c01940be99d78ea8f34"

// key 3b4a9f7da30e4c01940be99d78ea8f34
// api website https://apidocs.geoapify.com/

// Plan I need to change the location api becuase I couldn't get the google place one to work. 
// I am now using the geopify api to find stuff and it works.
// I have the geocodeing api take a given postalcode and a city and return one result with the lat and lon values,
// My goal is now to get those two values and use them in the place finding api to get locations in the area.